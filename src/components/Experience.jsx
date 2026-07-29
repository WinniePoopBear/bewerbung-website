import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience

  return (
    <section className="section" id="erfahrung">
      <p className="section-label">{t.label}</p>
      <h2>{t.title}</h2>

      <article className="timeline-card">
        <div className="timeline-header">
          <div>
            <p className="timeline-date">{t.date}</p>
            <h3>{t.position}</h3>
          </div>

          <span className="status-badge">{t.status}</span>
        </div>

        <ul className="experience-list">
          {t.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default Experience