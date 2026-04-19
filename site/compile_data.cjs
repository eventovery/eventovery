const fs = require('fs');
const path = require('path');

const EXPORT_DIR = '../eventovery_export';
const DATA_FILE = './public/data.json';
const IMAGES_SRC = '../eventovery_export/images';
const IMAGES_DEST = './public/images';

if (!fs.existsSync('./public')) fs.mkdirSync('./public');
if (!fs.existsSync(IMAGES_DEST)) fs.mkdirSync(IMAGES_DEST);

const files = fs.readdirSync(EXPORT_DIR).filter(f => f.endsWith('.md'));
const data = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(EXPORT_DIR, file), 'utf8');
    const frontmatterMatch = content.match(/^---([\s\S]*?)---/);
    if (frontmatterMatch) {
        const fm = frontmatterMatch[1];
        const item = {};
        fm.split('\n').forEach(line => {
            const [key, ...val] = line.split(':');
            if (key && val.length) {
                try {
                    item[key.trim()] = JSON.parse(val.join(':').trim());
                } catch (e) {
                    item[key.trim()] = val.join(':').trim();
                }
            }
        });
        
        // Normalize image paths
        if (item.featured_image && item.featured_image.startsWith('./images/')) {
            item.featured_image = item.featured_image.replace('./images/', '/images/');
        }
        if (Array.isArray(item.gallery)) {
            item.gallery = item.gallery.map(img => 
                img.startsWith('./images/') ? img.replace('./images/', '/images/') : img
            );
        }
        
        // Extract description (strip HTML tags for simplicity in grid)
        const body = content.replace(/^---[\s\S]*?---/, '').trim();
        item.description = body.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
        item.full_content = body;
        
        data.push(item);
    }
});

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

// Copy images
const images = fs.readdirSync(IMAGES_SRC);
images.forEach(img => {
    fs.copyFileSync(path.join(IMAGES_SRC, img), path.join(IMAGES_DEST, img));
});

console.log(`Processed ${data.length} items and copied images.`);
