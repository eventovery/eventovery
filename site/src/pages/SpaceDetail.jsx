import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Users, Theater, LayoutGrid, MapPin, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'

function SpaceDetail({ spaces }) {
  const { slug } = useParams()
  const [space, setSpace] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const found = spaces.find(s => s.slug === slug)
    if (found) {
      setSpace(found)
      window.scrollTo(0, 0)
    }
  }, [slug, spaces])

  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const gallery = space.gallery?.length ? space.gallery : [space.featured_image]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  return (
    <div className="detail-page">
      <div className="editorial-container">
        <Link to="/espacios" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          <ArrowLeft size={16} /> Volver al Explorador
        </Link>
        
        <div className="detail-hero-grid">
          {/* Left Column: The Large Editorial Image/Carousel */}
          <div className="carousel-container">
            <div className="carousel">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentSlide * 100}%)`, height: '100%', display: 'flex', transition: 'transform 0.5s ease-in-out' }}
              >
                {gallery.map((img, i) => (
                  <div key={i} className="carousel-slide" style={{ minWidth: '100%', height: '100%' }}>
                    <img src={getImageUrl(img)} alt={`${space.title} gallery ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              {gallery.length > 1 && (
                <>
                  <button className="carousel-btn prev-btn" onClick={prevSlide} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'white', border: 'none', padding: '1rem', cursor: 'pointer', zIndex: 10 }}><ChevronLeft size={24} /></button>
                  <button className="carousel-btn next-btn" onClick={nextSlide} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'white', border: 'none', padding: '1rem', cursor: 'pointer', zIndex: 10 }}><ChevronRight size={24} /></button>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Structured Data Panel */}
          <div className="info-panel">
            <div className="detail-header">
              <h1 className="detail-title">{space.title}</h1>
            </div>

            <div className="detail-meta-list">
              <div className="meta-row">
                <div className="meta-icon">
                    <Users size={32} />
                </div>
                <div className="meta-content">
                  <span className="meta-label">CAPACIDAD CÓCTEL</span>
                  <span className="meta-value">{space.capacidad_coctail?.[0] || 'Consultar'}</span>
                </div>
              </div>
              <div className="meta-row">
                <div className="meta-icon">
                   <Theater size={32} />
                </div>
                <div className="meta-content">
                  <span className="meta-label">CAPACIDAD TEATRO</span>
                  <span className="meta-value">{space.capacidad_teatro?.[0] || 'Consultar'}</span>
                </div>
              </div>
              <div className="meta-row">
                <div className="meta-icon">
                    <LayoutGrid size={32} />
                </div>
                <div className="meta-content">
                  <span className="meta-label">NÚMERO DE SALAS</span>
                  <span className="meta-value">{space.numero_salas?.[0] || '1'}</span>
                </div>
              </div>
              <div className="meta-row">
                <div className="meta-icon">
                    <MapPin size={32} />
                </div>
                <div className="meta-content">
                  <span className="meta-label">UBICACIÓN</span>
                  <span className="meta-value">Madrid</span>
                </div>
              </div>
            </div>

            <button className="btn-primary">
              SOLICITAR DOSIER
            </button>
          </div>
        </div>

        <div className="detail-body" style={{ marginTop: '6rem' }}>
            <h2 className="section-title">Descripción:</h2>
            <div 
              className="detail-content"
              style={{ fontSize: '1.2rem', color: '#444', maxWidth: '900px' }}
              dangerouslySetInnerHTML={{ __html: space.full_content }}
            ></div>
            
            <div className="interest-box" style={{ marginTop: '4rem', padding: '3rem', background: 'var(--muted)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>¿Te interesa este espacio?</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Pídelo ya o llámanos</p>
              <Link to="/contacto" className="btn-primary" style={{ display: 'inline-block', width: 'auto' }}>Click aquí</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SpaceDetail
