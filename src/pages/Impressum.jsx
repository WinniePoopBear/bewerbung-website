import { Link } from 'react-router-dom'

import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Impressum() {
  const { language } = useLanguage()
  const t = translations[language].legal.imprintPage

  return (
    <main className="legal-page">
      <div className="legal-page-decoration" />

      <div className="legal-page-container">
        <Link className="legal-back-link" to="/">
          <span aria-hidden="true">←</span>
          {t.back}
        </Link>

        <header className="legal-page-header">
          <p className="section-label">{t.label}</p>

          <h1>{t.title}</h1>

          <p>{t.intro}</p>
        </header>

        <article className="legal-card">
          <section className="legal-content-block">
            <h2>{t.providerTitle}</h2>

            <address>
              Lars Winterling
              <br />
              Meisenweg 3
              <br />
              51149 Köln
              <br />
              {t.country}
            </address>
          </section>

          <section className="legal-content-block">
            <h2>{t.contactTitle}</h2>

            <p>
              {t.emailLabel}:{' '}
              <a href="mailto:DEINE-EMAIL@BEISPIEL.DE">
                larswinterling2004@gmail.com
              </a>
            </p>
          </section>

          <section className="legal-content-block">
            <h2>{t.responsibleTitle}</h2>

            <address>
              Lars Winterling
              <br />
              Meisenweg 3
              <br />
              51149 Köln
              <br />
              {t.country}
            </address>
          </section>

          <section className="legal-content-block">
            <h2>{t.liabilityTitle}</h2>

            <p>{t.liabilityText}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.linksTitle}</h2>

            <p>{t.linksText}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.copyrightTitle}</h2>

            <p>{t.copyrightText}</p>
          </section>

          {language === 'en' && (
            <section className="legal-content-block">
              <h2>{t.translationNoticeTitle}</h2>

              <p>{t.translationNoticeText}</p>
            </section>
          )}
        </article>

        <nav
          className="legal-bottom-navigation"
          aria-label={t.bottomNavigationLabel}
        >
          <Link to="/datenschutz">
            {t.privacyLink}
            <span aria-hidden="true"> →</span>
          </Link>
        </nav>
      </div>
    </main>
  )
}

export default Impressum