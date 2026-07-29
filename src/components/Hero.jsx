import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section className="hero" id="start">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />
      <div className="hero-dot-grid" />

      <div className="hero-content">
        <div className="hero-text-content">
          <p className="eyebrow">{t.eyebrow}</p>

          <h1>
            {t.greeting}
            <span>{t.name}</span>
          </h1>

          <p className="hero-text">{t.text}</p>

          <div className="hero-actions">
            <a className="button primary" href="#projekte">
              {t.projectsButton}
              <span aria-hidden="true">→</span>
            </a>

            <a className="button secondary" href="#kontakt">
              {t.contactButton}
            </a>
          </div>
        </div>

        <div className="hero-image-area">
          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src="/bewerbungsfoto.jpg"
              alt={t.imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero