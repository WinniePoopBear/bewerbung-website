import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Skills() {
  const { language } = useLanguage()
  const t = translations[language].skills

  return (
    <section className="section-band skills-band" id="kenntnisse">
      <div className="section section-band-content">
        <p className="section-label">{t.label}</p>
        <h2>{t.title}</h2>

        <div className="skills-grid">
          {t.groups.map((group) => (
            <article className="card" key={group.title}>
              <h3>{group.title}</h3>

              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills