import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Home() {
  const brands = [
    { name: "IE Business School", src: "https://eventovery.com/wp-content/uploads/2022/03/IE_Business_School_Logo-2-1024x329.png" },
    { name: "PRISA Media", src: "https://eventovery.com/wp-content/uploads/2022/09/prisa-media.jpg" },
    { name: "Thomson Reuters", src: "https://eventovery.com/wp-content/uploads/2022/03/thomson_reuters-1024x639.jpg" },
    { name: "Embajada Rep. Dominicana", src: "https://eventovery.com/wp-content/uploads/2022/03/embajada-republica-dominicana.png" },
    { name: "OnRetrieval", src: "https://eventovery.com/wp-content/uploads/2025/04/logo-onretrieval.jpg" },
    { name: "Tecnofor", src: "https://eventovery.com/wp-content/uploads/2024/01/tecnofor-1024x576.png" },
    { name: "Roomonitor", src: "https://eventovery.com/wp-content/uploads/2022/03/roomonitor-2-1024x953.png" },
    { name: "Agencia SIM", src: "https://eventovery.com/wp-content/uploads/2022/03/agencia_SIM.png" }
  ];

  return (
    <div className="home-page-new">
      <section className="hero-landing">
        <div className="editorial-container">
          <div className="hero-content">
            <div className="hero-badges">
              <span className="badge">SIN COSTE ADICIONAL</span>
              <span className="badge">RÁPIDO</span>
              <span className="badge">EFECTIVO</span>
            </div>
            <h1>Espacios y Catering en Madrid <span>exclusivos</span> para eventos corporativos</h1>
            <p className="hero-description">
              Recibe varias propuestas por los mejores Espacios y Catering en Madrid para el éxito de tu empresa.
            </p>
          </div>
        </div>
      </section>

      <section className="main-choices">
        <div className="editorial-container">
          <div className="choices-grid">
            <div className="choice-card">
              <h2>Espacios</h2>
              <Link to="/espacios">
                <div className="choice-image-box">
                  <img src="https://eventovery.com/wp-content/uploads/2024/01/auditorio-espacio-2.png" alt="Espacios" />
                </div>
              </Link>
              <div className="choice-info">
                <h3>Más de 400 salas seleccionadas:</h3>
                <p>Auditorios, Palacetes, Teatros, Cines, Multiespacios, Espacios únicos, Terrazas, Jardines y Restaurantes para eventos de empresa.</p>
                <Link to="/espacios" className="click-here">HAZ CLIC AQUÍ <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="choice-card">
              <h2>Catering</h2>
              <Link to="/catering">
                <div className="choice-image-box">
                <img 
                  src="https://eventovery.com/wp-content/uploads/2022/03/banner-comida-3.jpg" 
                  alt="Catering" 
                  referrerPolicy="no-referrer"
                />
              </div>
              </Link>
              <div className="choice-info">
                <h3>Catering exclusivos para eventos</h3>
                <p>Los mejores catering de Madrid: tradicionales, vanguardistas, con propuestas adaptadas a cualquier tipo de cocina y experiencia.</p>
                <Link to="/catering" className="click-here">HAZ CLIC AQUÍ <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brands-strip">
        <div className="editorial-container">
          <h4 className="brands-title">ALGUNAS DE LAS MARCAS QUE CONFIAN EN NOSOTROS</h4>
          <div className="brands-grid">
            {brands.map(brand => (
              <div key={brand.name} className="brand-logo-item">
                <img src={brand.src} alt={brand.name} style={{ maxHeight: '50px', maxWidth: '150px', filter: 'grayscale(1) brightness(0.9)', opacity: 0.8 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="objectives" id="objetivos">
        <div className="editorial-container">
          <h2 className="section-title-large">Objetivos</h2>
          <div className="objectives-grid">
            <div className="objectives-text">
              <p className="highlight-text">
                Visito constantemente nuevos <strong>ESPACIOS</strong> en <strong>MADRID</strong> para ofrecerte <strong>PROPUESTAS EFECTIVAS</strong> <span className="no-cost">sin costes adicionales.</span>
              </p>
              <p>Trabajamos codo a codo con empresas nacionales e internacionales.</p>
              
              <div className="question-box">
                <p>¿Te han encargado organizar un evento para tu empresa?</p>
                <p><strong>¿Quieres optimizar tus tiempos en búsqueda y que tu evento tenga éxito?</strong></p>
              </div>

              <div className="benefits-list">
                <p>RECIBIRÁS:</p>
                <ul>
                  <li>VARIAS PROPUESTAS de ESPACIOS optimizadas a las necesidades de tu evento para que puedas comparar</li>
                  <li>Respuestas rápidas y eficaces</li>
                  <li>Propuestas de Catering competitivas y profesionales</li>
                  <li>Asesoramiento y gestión de reservas</li>
                  <li>Soporte durante todo el proceso de contratación</li>
                </ul>
              </div>
            </div>
            <div className="objectives-video">
              <div className="video-wrapper">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/yZ0TcnLhjgQ" 
                  title="Eventovery presentación" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
