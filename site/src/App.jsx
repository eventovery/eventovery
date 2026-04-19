import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Directory from './pages/Directory'
import SpaceDetail from './pages/SpaceDetail'
import Catering from './pages/Catering'
import SobreNosotros from './pages/SobreNosotros'
import Contacto from './pages/Contacto'
import AvisoLegal from './pages/legal/AvisoLegal'
import PoliticaPrivacidad from './pages/legal/PoliticaPrivacidad'
import PoliticaCookies from './pages/legal/PoliticaCookies'
import './App.css'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [spaces, setSpaces] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then(res => res.json())
      .then(data => {
        setSpaces(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to load data:", err)
        setLoading(false)
      })
  }, [])

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app">
        <header className="main-header">
          <div className="editorial-container nav-container">
            <Link to="/" className="logo">EVENTO<span>VERY</span></Link>
            <nav className="main-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/espacios">Espacios</Link></li>
                <li><Link to="/catering">Catering</Link></li>
                <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/espacios" element={<Directory spaces={spaces} loading={loading} title="Espacios" />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/space/:slug" element={<SpaceDetail spaces={spaces} />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
          </Routes>
        </main>

        <footer className="main-footer">
          <div className="editorial-container footer-grid">
            <div className="footer-section">
              <h5>EVENTOVERY</h5>
              <p>Consultoría experta en espacios y<br />catering para eventos corporativos.</p>
            </div>
            <div className="footer-section">
              <h5>CONTACTO</h5>
              <p>(34) 659 79 06 78<br />chiara@eventovery.com</p>
            </div>
            <div className="footer-section">
              <h5>LEGAL</h5>
              <div className="legal-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link to="/aviso-legal">Aviso Legal</Link>
                <Link to="/politica-privacidad">Política de Privacidad</Link>
                <Link to="/politica-cookies">Política de Cookies</Link>
              </div>
            </div>
          </div>
          <div className="editorial-container">
            <div className="footer-bottom" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="social-links" style={{ margin: 0 }}>
                <a href="https://www.facebook.com/eventovery" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/eventovery/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
              <p className="copyright" style={{ margin: 0 }}>© All Rights Reserved 2012 - Eventovery</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
