import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  const email = 'larswinterling2004@gmail.com'

  return (
    <section className="section contact" id="kontakt">
      <p className="section-label">{t.label}</p>

      <h2>{t.title}</h2>

      <p>{t.text}</p>

      <div className="contact-details">
        <span>{t.emailLabel}</span>

        <a href={`mailto:${email}`}>
          {email}
        </a>

        <span>{t.locationLabel}</span>

        <strong>{t.location}</strong>
      </div>

      <a className="button primary" href={`mailto:${email}`}>
        {t.button}
        <span aria-hidden="true">→</span>
      </a>
    </section>
  )
}

export default Contact