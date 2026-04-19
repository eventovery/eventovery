const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://eventovery.com/wp-json/wp/v2';
const EXPORT_DIR = 'eventovery_export';
const IMAGES_DIR = path.join(EXPORT_DIR, 'images');

// Create directories
if (!fs.existsSync(EXPORT_DIR)) fs.mkdirSync(EXPORT_DIR);
if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR);

async function fetchAll(endpoint) {
    let allData = [];
    let page = 1;
    let totalPages = 1;

    console.log(`Fetching ${endpoint}...`);
    
    do {
        const response = await fetch(`${BASE_URL}/${endpoint}?per_page=100&page=${page}`);
        if (!response.ok) break;
        
        const data = await response.json();
        allData = allData.concat(data);
        
        totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1');
        page++;
    } while (page <= totalPages);

    return allData;
}

async function getTaxonomyMap(taxonomy) {
    const data = await fetchAll(taxonomy);
    const map = {};
    data.forEach(item => {
        map[item.id] = item.name;
    });
    return map;
}

async function downloadImage(url, filename) {
    const filePath = path.join(IMAGES_DIR, filename);
    if (fs.existsSync(filePath)) {
        // console.log(`  Skipping ${filename} (already exists)`);
        return true;
    }
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Status ${response.status}`);
        const buffer = await response.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(buffer));
        return true;
    } catch (e) {
        console.error(`Failed to download image ${url}: ${e.message}`);
        return false;
    }
}

async function run() {
    try {
        // 1. Get taxonomy maps
        const [tipos, salas, coctel, teatro] = await Promise.all([
            getTaxonomyMap('tipo_espacio'),
            getTaxonomyMap('numero_salas'),
            getTaxonomyMap('capacidad_sala_en_coctail'),
            getTaxonomyMap('capacidad_teatro')
        ]);

        const taxonomyMaps = {
            tipo_espacio: tipos,
            numero_salas: salas,
            capacidad_sala_en_coctail: coctel,
            capacidad_teatro: teatro
        };

        // 2. Get all posts
        const posts = await fetchAll('directorio_espacios');
        console.log(`Found ${posts.length} posts.`);

        for (const post of posts) {
            console.log(`Processing: ${post.title.rendered}...`);
            
            const frontmatter = {
                id: post.id,
                title: post.title.rendered,
                date: post.date,
                slug: post.slug,
                link: post.link,
                tipo_espacio: (post.tipo_espacio || []).map(id => taxonomyMaps.tipo_espacio[id] || id),
                numero_salas: (post.numero_salas || []).map(id => taxonomyMaps.numero_salas[id] || id),
                capacidad_coctail: (post.capacidad_sala_en_coctail || []).map(id => taxonomyMaps.capacidad_sala_en_coctail[id] || id),
                capacidad_teatro: (post.capacidad_teatro || []).map(id => taxonomyMaps.capacidad_teatro[id] || id),
                gallery: []
            };

            // 3. Handle images
            // Featured Media
            if (post.featured_media) {
                const mediaResponse = await fetch(`${BASE_URL}/media/${post.featured_media}`);
                if (mediaResponse.ok) {
                    const media = await mediaResponse.json();
                    const imgUrl = media.source_url;
                    if (imgUrl) {
                        const imgName = `${post.slug}${path.extname(imgUrl.split('?')[0])}`;
                        const success = await downloadImage(imgUrl, imgName);
                        if (success) {
                            frontmatter.featured_image = `./images/${imgName}`;
                        }
                    }
                }
            }

            // Gallery (Attachments)
            const galleryResponse = await fetch(`${BASE_URL}/media?parent=${post.id}&per_page=100`);
            if (galleryResponse.ok) {
                const galleryData = await galleryResponse.json();
                const localGallery = [];
                for (let i = 0; i < galleryData.length; i++) {
                    const media = galleryData[i];
                    const imgUrl = media.source_url;
                    if (imgUrl) {
                        const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
                        const imgName = `${post.slug}-gallery-${i}${ext}`;
                        // console.log(`  Downloading gallery image ${i+1}/${galleryData.length}: ${imgName}`);
                        const success = await downloadImage(imgUrl, imgName);
                        if (success) {
                            localGallery.push(`./images/${imgName}`);
                        } else {
                            localGallery.push(imgUrl);
                        }
                    }
                }
                frontmatter.gallery = localGallery;
            }

            // 3.5 Handle images in content
            let content = post.content.rendered;
            const imgRegex = /<img[^>]+src="([^">]+)"/g;
            let match;
            let imgCount = 0;
            while ((match = imgRegex.exec(content)) !== null) {
                const imgUrl = match[1];
                if (imgUrl.startsWith('http')) {
                    const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
                    const imgName = `${post.slug}-content-${imgCount}${ext}`;
                    console.log(`  Downloading content image: ${imgName}`);
                    const success = await downloadImage(imgUrl, imgName);
                    if (success) {
                        content = content.replace(imgUrl, `./images/${imgName}`);
                        imgCount++;
                    }
                }
            }

            // 4. Create Markdown content
            const mdContent = `---
${Object.entries(frontmatter).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n')}
---

${content}
`;

            fs.writeFileSync(path.join(EXPORT_DIR, `${post.slug}.md`), mdContent);
        }

        console.log('Export finished successfully!');
    } catch (error) {
        console.error('Export failed:', error);
    }
}

run();
