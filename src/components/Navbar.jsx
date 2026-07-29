import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const location = useLocation()

  const t = translations[language].navigation
  const isHomepage = location.pathname === '/'

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const getLink = (section) => {
    return isHomepage ? `#${section}` : `/#${section}`
  }

  return (
    <header className="navbar">
      <Link className="logo" to="/" onClick={closeMenu}>
        Lars Winterling
      </Link>

      <div className="navbar-actions">
        <div className="language-switch" aria-label="Sprache auswählen">
          <button
            type="button"
            className={language === 'de' ? 'active' : ''}
            onClick={() => setLanguage('de')}
            aria-pressed={language === 'de'}
          >
            DE
          </button>

          <span aria-hidden="true">|</span>

          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="main-navigation"
        className={menuOpen ? 'nav-open' : ''}
      >
        <a href={getLink('ueber-mich')} onClick={closeMenu}>
          {t.about}
        </a>

        <a href={getLink('kenntnisse')} onClick={closeMenu}>
          {t.skills}
        </a>

        <a href={getLink('erfahrung')} onClick={closeMenu}>
          {t.experience}
        </a>

        <a href={getLink('ausbildung')} onClick={closeMenu}>
          {t.education}
        </a>

        <a href={getLink('projekte')} onClick={closeMenu}>
          {t.projects}
        </a>

        <a href={getLink('kontakt')} onClick={closeMenu}>
          {t.contact}
        </a>
      </nav>
    </header>
  )
}

export default Navbar