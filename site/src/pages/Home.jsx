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
              <span className="badge">GESTIÓN GRATUITA</span>
              <span className="badge">RESPUESTA INMEDIATA</span>
              <span className="badge">RESULTADOS EFICACES</span>
            </div>
            <h1>Espacios y Catering <span>Exclusivos</span> para Eventos de Empresa en Madrid</h1>
            <p className="hero-description">
              La selección definitiva de espacios singulares y gastronomía de alto nivel, diseñada específicamente para el éxito de tu marca.
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
                  <img 
                    src="https://eventovery.com/wp-content/uploads/2024/01/auditorio-espacio-2.png" 
                    alt="Espacios" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Link>
              <div className="choice-info">
                <h3>Una colección curada de más de 400 espacios singulares</h3>
                <p>Desde auditorios vanguardistas hasta palacetes históricos. Encontramos el escenario perfecto para cada visión corporativa.</p>
                <Link to="/espacios" className="click-here">EXPLORAR SELECCIÓN <ArrowRight size={16} /></Link>
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
                <h3>Excelencia gastronómica para el sector corporativo</h3>
                <p>Propuestas a medida que combinan vanguardia y tradición, garantizando una experiencia memorable para tus asistentes.</p>
                <Link to="/catering" className="click-here">VER CATÁLOGO <ArrowRight size={16} /></Link>
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
                <img 
                  src={brand.src} 
                  alt={brand.name} 
                  referrerPolicy="no-referrer"
                  className="brand-logo-img"
                />
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
                <p>NUESTRO COMPROMISO:</p>
                <ul>
                  <li><strong>Comparativas Detalladas:</strong> Recibe opciones curadas que encajan perfectamente con tu briefing.</li>
                  <li><strong>Agilidad Corporativa:</strong> Entendemos tus tiempos. Propuestas precisas en tiempo récord.</li>
                  <li><strong>Gastronomía de Garantía:</strong> Proveedores seleccionados con los más altos estándares.</li>
                  <li><strong>Acompañamiento Experto:</strong> Te asesoramos y gestionamos cada paso de la reserva.</li>
                  <li><strong>Soporte Integral:</strong> Asistencia continua durante todo el proceso de contratación.</li>
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
