import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects

  return (
    <section className="section" id="projekte">
      <p className="section-label">{t.label}</p>
      <h2>{t.title}</h2>

      <div className="project-grid">
        {t.items.map((project) => (
          <article className="card project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {project.url && (
              <a
                href={project.url}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.button}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects