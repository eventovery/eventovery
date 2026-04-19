import { Link } from 'react-router-dom'

const caterings = [
  { name: "Life Gourmet", image: "https://eventovery.com/wp-content/uploads/2022/03/life-gourmet-logo.png" },
  { name: "Alemauro Catering", image: "https://eventovery.com/wp-content/uploads/2022/03/alemauro-catering.png" },
  { name: "Tatín Catering", image: "https://eventovery.com/wp-content/uploads/2023/11/LOGO-TATIN-CIRCULAR-CMYK-pequeno.jpg" },
  { name: "Puchero de Plata", image: "https://eventovery.com/wp-content/uploads/2022/03/el-puchero-de-plata-catering.png" },
  { name: "Mice Catering", image: "https://eventovery.com/wp-content/uploads/2022/03/mice-catering-logo-1.png" },
  { name: "Eneldo Catering", image: "https://eventovery.com/wp-content/uploads/2022/03/eneldo-catering-1.png" },
  { name: "Cobos Catering", image: "https://eventovery.com/wp-content/uploads/2022/05/cobos-catering-logo-new-1.png" },
  { name: "Cátalo Catering", image: "https://eventovery.com/wp-content/uploads/2022/03/catalo-catering.jpg" },
  { name: "Artigot Catering", image: "https://eventovery.com/wp-content/uploads/2022/03/artigot-catering-3.png" },
  { name: "Goa Catering", image: "https://eventovery.com/wp-content/uploads/2022/03/goa-catering-1.png" },
  { name: "The Cook Catering", image: "https://eventovery.com/wp-content/uploads/2022/03/the-cook-catering-1.png" },
  { name: "El Valle de Cubas", image: "https://eventovery.com/wp-content/uploads/2022/03/el-valle-de-cubas-catering.png" },
  { name: "Sugaro Catering", image: "https://eventovery.com/wp-content/uploads/2022/03/sugaro-catering.jpg" },
  { name: "Tiene Miga", image: "https://eventovery.com/wp-content/uploads/2022/03/tiene-miga-catering-1.png" },
  { name: "Vilaplana Catering", image: "https://eventovery.com/wp-content/uploads/2022/03/vilaplana-catering.png" },
  { name: "Aga Catering", image: "https://eventovery.com/wp-content/uploads/2022/05/AGA-catering-Logo.png" }
]

function Catering() {
  return (
    <div className="catering-page">
      <section className="catering-hero">
        <div className="editorial-container">
          <h1>Catering</h1>
          <p className="subtitle">Compara más catering o déjate asesorar</p>
        </div>
      </section>

      <section className="catering-grid-section">
        <div className="editorial-container">
          <div className="directory-grid">
            {caterings.map((cat, i) => (
              <div key={i} className="card catering-card">
                <div className="card-image-wrap">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x800?text=Catering'; }} 
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{cat.name}</h3>
                  <Link to="/contacto" className="btn-secondary">Click aquí</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catering
