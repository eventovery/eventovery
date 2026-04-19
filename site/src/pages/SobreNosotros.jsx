function SobreNosotros() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="editorial-container">
          <h1 className="page-title">Sobre nosotros</h1>
        </div>
      </section>

      <section className="team-section">
        <div className="editorial-container">
          <div className="team-member">
            <div className="member-info">
              <h2 className="member-name">Chiara Bennicelli</h2>
              <p className="member-tagline">Estrategia, Pasión y Precisión Editorial</p>
              <div className="member-desc">
                <p>Directora y Fundadora de <strong>Eventovery</strong>, Chiara cuenta con una trayectoria de más de 20 años transformando eventos corporativos en experiencias memorables.</p>
                <p>Especializada en el ecosistema de espacios y catering en Madrid, combina un conocimiento profundo del mercado con una visión creativa orientada a resultados.</p>
              </div>

              <div className="quote-box">
                <h3>¿Qué son los eventos para mi?</h3>
                <blockquote>
                  “Los EVENTOS son experiencias importantes para que TU MARCA deje huella entre sus asistentes.»
                </blockquote>
                <p>La localización del ESPACIO y CATERING son dos de los PILARES fundamentales para que TU EVENTO perdure en el tiempo.</p>
              </div>
            </div>
            <div className="member-image">
              {/* Image from original site */}
                <img 
                  src="https://eventovery.com/wp-content/uploads/2023/11/Chiara-Bennicelli.jpg" 
                  alt="Chiara Bennicelli" 
                  referrerPolicy="no-referrer"
                />
            </div>
          </div>

          <div className="team-member reverse">
             <div className="member-info">
              <h2 className="member-name">Lucas Cervera</h2>
              <div className="member-desc">
                <p>Consultor Estratégico & Desarrollo de Negocio</p>
                <p>Experto en optimización de procesos y estrategia digital, Lucas aporta la estructura y visión necesarias para asegurar que cada propuesta de Eventovery cumpla con los estándares de eficiencia que el cliente corporativo exige.</p>
              </div>
            </div>
            <div className="member-image">
                <img 
                  src="https://eventovery.com/wp-content/uploads/2023/11/lucas-eventovery.jpg" 
                  alt="Lucas Cervera" 
                  referrerPolicy="no-referrer"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SobreNosotros
