import { Link } from 'react-router-dom'

import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Lars Winterling</p>

        <nav
          className="footer-links"
          aria-label="Legal information"
        >
          <Link to="/impressum">{t.imprint}</Link>

          <span className="footer-divider" aria-hidden="true">
            |
          </span>

          <Link to="/datenschutz">{t.privacy}</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer