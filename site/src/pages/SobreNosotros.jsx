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
              <p className="member-tagline">Eficacia, rapidez y empatía</p>
              <div className="member-desc">
                <p>Mi nombre es <strong>Chiara</strong> y soy la cara visible de <strong>Eventovery</strong>.</p>
                <p>Llevo más de 20 años dedicada totalmente al mundo de los eventos.</p>
                <p>Los últimos 10 años me especialicé en Espacios y Catering en Madrid, mi ciudad adoptiva.</p>
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
                <p>asesor</p>
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
