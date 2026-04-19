import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Theater, LayoutGrid, MapPin, Search } from 'lucide-react'

function Directory({ spaces, loading, title = "Espacios" }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const allTypes = [...new Set(spaces.flatMap(s => s.tipo_espacio || []))]
  const categories = ['All', 'Salas de Hoteles', ...allTypes]

  const filteredSpaces = activeFilter === 'All' 
    ? spaces 
    : activeFilter === 'Salas de Hoteles'
    ? spaces.filter(s => s.tipo_espacio?.some(t => t.toLowerCase().includes('hotel')) || s.title.toLowerCase().includes('hotel'))
    : spaces.filter(s => s.tipo_espacio?.includes(activeFilter))

  const getCount = (cat) => {
    if (cat === 'All') return spaces.length
    if (cat === 'Salas de Hoteles') return spaces.filter(s => s.tipo_espacio?.some(t => t.toLowerCase().includes('hotel')) || s.title.toLowerCase().includes('hotel')).length
    return spaces.filter(s => s.tipo_espacio?.includes(cat)).length
  }

  return (
    <div className="directory-page">
      <section className="directory-hero-page">
        <div className="editorial-container">
          <h1>{title}</h1>
          <p className="subtitle">
            Explora más de 400 espacios exclusivos seleccionados para tu evento en Madrid.
          </p>
        </div>
      </section>

      <section className="filters-section" style={{ borderBottom: '1px solid var(--border)', padding: '2rem 0' }}>
        <div className="editorial-container">
          <div className="filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {categories.map(cat => {
              const count = getCount(cat);
              if (count === 0 && cat !== 'All') return null;
              return (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                  style={{ 
                    padding: '0.8rem 1.5rem', 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    background: activeFilter === cat ? 'var(--primary)' : 'transparent',
                    color: activeFilter === cat ? 'white' : 'var(--muted-foreground)',
                    border: '1px solid ' + (activeFilter === cat ? 'var(--primary)' : 'var(--border)'),
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
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
                      <img src={space.featured_image} alt={space.title} />
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
                    <div className="card-footer-link" style={{ marginTop: '2rem', textAlign: 'right' }}>
                      <span className="read-more" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Lee más »</span>
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
