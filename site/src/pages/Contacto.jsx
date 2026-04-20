import { Link } from 'react-router-dom'

function Contacto() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="editorial-container">
          <h1 className="page-title">Contacto</h1>
          <p className="subtitle italic">Cuéntanos sobre tu evento y te ayudaremos a encontrar el lugar ideal.</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="editorial-container">
          <div className="contact-grid">
            <div className="contact-info-panel text-center">
              <h2 className="section-title-small">¿Hablamos?</h2>
              <p className="highlight-text-small">
                Estamos aquí para ayudarte a encontrar el espacio perfecto para tu próximo evento corporativo.
              </p>
              
              <div className="contact-details-large">
                <div className="detail-item">
                  <span className="label">Llámanos</span>
                  <a href="tel:+34659790678" className="value">(34) 659 79 06 78</a>
                </div>
                <div className="detail-item">
                  <span className="label">Email</span>
                  <a href="mailto:chiara@eventovery.com" className="value">chiara@eventovery.com</a>
                </div>
              </div>

              <div className="contact-quote-box">
                <p className="contact-quote-text">
                  "Nuestra misión es simplificar la búsqueda de espacios exclusivos para empresas, aportando un toque editorial y premium a cada evento."
                </p>
              </div>
            </div>

            <div className="contact-form-wrapper w-full" style={{ maxWidth: '600px' }}>
              <div className="contact-form-container">
                <a 
                  href="https://wa.me/34639662303?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20un%20espacio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button shadow-premium"
                >
                  <svg className="whatsapp-icon" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                   </svg>
                   ABRIR WHATSAPP DIRECTO
                </a>
                
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfwlYXsJNMvhyYHDQNlwPr9-sKrq3yYFnF32gomRSbeDH6Yow/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shadow-premium text-center"
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  RELLENAR FORMULARIO DETALLADO
                </a>
                
                <p className="contact-secondary-text">
                  Elige la opción que prefieras para que podamos empezar a trabajar en tu propuesta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
