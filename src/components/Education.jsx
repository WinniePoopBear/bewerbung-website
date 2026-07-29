import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Education() {
  const { language } = useLanguage()
  const t = translations[language].education

  return (
    <section className="section-band education-band" id="ausbildung">
      <div className="section section-band-content">
        <p className="section-label">{t.label}</p>
        <h2>{t.title}</h2>

        <div className="education-list">
          {t.items.map((item) => (
            <article className="education-item" key={item.title}>
              <p className="timeline-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education