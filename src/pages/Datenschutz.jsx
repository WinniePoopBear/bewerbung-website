import { Link } from 'react-router-dom'

import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Datenschutz() {
  const { language } = useLanguage()
  const t = translations[language].legal.privacyPage

  return (
    <main className="legal-page legal-page-alternate">
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
            <h2>{t.controllerTitle}</h2>

            <address>
              Lars Winterling
              <br />
              Meisenweg 3
              <br />
              51149 Köln
              <br />
              {t.country}
            </address>

            <p>
              {t.emailLabel}:{' '}
              <a href="mailto:DEINE-EMAIL@BEISPIEL.DE">
                larswinterling2004@gmail.com
              </a>
            </p>
          </section>

          <section className="legal-content-block">
            <h2>{t.hostingTitle}</h2>

            <p>{t.hostingTextOne}</p>

            <p>{t.hostingTextTwo}</p>

            <p>
              <strong>{t.hostingProviderLabel}:</strong>{' '}
              Lars Winterling | Meisenweg 3, 51149 Köln
            </p>
          </section>

          <section className="legal-content-block">
            <h2>{t.emailContactTitle}</h2>

            <p>{t.emailContactTextOne}</p>

            <p>{t.emailContactTextTwo}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.cookiesTitle}</h2>

            <p>{t.cookiesText}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.externalContentTitle}</h2>

            <p>{t.externalContentText}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.storageTitle}</h2>

            <p>{t.storageText}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.rightsTitle}</h2>

            <p>{t.rightsIntro}</p>

            <ul className="legal-list">
              {t.rights.map((right) => (
                <li key={right}>{right}</li>
              ))}
            </ul>
          </section>

          <section className="legal-content-block">
            <h2>{t.objectionTitle}</h2>

            <p>{t.objectionText}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.complaintTitle}</h2>

            <p>{t.complaintText}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.securityTitle}</h2>

            <p>{t.securityText}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.changesTitle}</h2>

            <p>{t.changesText}</p>
          </section>

          <section className="legal-content-block">
            <h2>{t.versionTitle}</h2>

            <p>{t.versionText}</p>
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
          <Link to="/impressum">
            {t.imprintLink}
            <span aria-hidden="true"> →</span>
          </Link>
        </nav>
      </div>
    </main>
  )
}

export default Datenschutz