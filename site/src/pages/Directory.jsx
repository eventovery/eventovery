import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Theater, LayoutGrid, MapPin, Search } from 'lucide-react'

function Directory({ spaces, loading, title = "Espacios" }) {
  const [activeFilter, setActiveFilter] = useState('All')

  // Pre-sort spaces: larger capacity first
  const sortedSpaces = [...spaces].sort((a, b) => {
    const capA = parseInt(a.capacidad_coctail?.[0] || a.capacidad_teatro?.[0] || 0);
    const capB = parseInt(b.capacidad_coctail?.[0] || b.capacidad_teatro?.[0] || 0);
    return capB - capA;
  });

  const allTypes = [...new Set(sortedSpaces.flatMap(s => s.tipo_espacio || []))]
  const categories = ['All', 'Salas de Hoteles', ...allTypes]

  const filteredSpaces = activeFilter === 'All' 
    ? sortedSpaces 
    : activeFilter === 'Salas de Hoteles'
    ? sortedSpaces.filter(s => s.tipo_espacio?.some(t => t.toLowerCase().includes('hotel')) || s.title.toLowerCase().includes('hotel'))
    : sortedSpaces.filter(s => s.tipo_espacio?.includes(activeFilter))

  const getCount = (cat) => {
    if (cat === 'All') return sortedSpaces.length
    if (cat === 'Salas de Hoteles') return sortedSpaces.filter(s => s.tipo_espacio?.some(t => t.toLowerCase().includes('hotel')) || s.title.toLowerCase().includes('hotel')).length
    return sortedSpaces.filter(s => s.tipo_espacio?.includes(cat)).length
  }

  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  return (
    <div className="directory-page">
      <section className="directory-hero-page">
        <div className="editorial-container">
          <h1>{title}</h1>
          <p className="subtitle">
            Una selección curada de los escenarios más exclusivos y versátiles de la capital.
          </p>
        </div>
      </section>

      <section className="filters-section">
        <div className="editorial-container">
          <div className="filters-container">
            {categories.map(cat => {
              const count = getCount(cat);
              if (count === 0 && cat !== 'All') return null;
              return (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="directory-section">
        <div className="editorial-container">
          {loading ? (
            <div className="loading">Cargando...</div>
          ) : (
            <div className="directory-grid">
              {filteredSpaces.map(space => (
                <Link to={`/space/${space.slug}`} key={space.id} className="card">
                  <div className="card-image-wrap">
                    {space.featured_image && (
                      <img src={getImageUrl(space.featured_image)} alt={space.title} />
                    )}
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{space.title}</h3>
                    <div className="card-meta">
                      <div className="meta-item">
                        <div className="icon-label-group">
                          <Users className="meta-icon-small" size={16} />
                          <span className="meta-label-small">Cóctel</span>
                        </div>
                        <span className="meta-value-small">{space.capacidad_coctail?.[0] || '-'}</span>
                      </div>
                      <div className="meta-item">
                        <div className="icon-label-group">
                          <Theater className="meta-icon-small" size={16} />
                          <span className="meta-label-small">Teatro</span>
                        </div>
                        <span className="meta-value-small">{space.capacidad_teatro?.[0] || '-'}</span>
                      </div>
                      <div className="meta-item">
                        <div className="icon-label-group">
                          <LayoutGrid className="meta-icon-small" size={16} />
                          <span className="meta-label-small">Salas</span>
                        </div>
                        <span className="meta-value-small">{space.numero_salas?.[0] || '1'}</span>
                      </div>
                      <div className="meta-item">
                        <div className="icon-label-group">
                          <MapPin className="meta-icon-small" size={16} />
                          <span className="meta-label-small">Ciudad</span>
                        </div>
                        <span className="meta-value-small">Madrid</span>
                      </div>
                    </div>
                    <div className="card-footer-link">
                      <span className="read-more">Lee más »</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Directory
