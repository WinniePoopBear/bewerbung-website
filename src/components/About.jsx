import { useLanguage } from '../context/LanguageContext.jsx'
import translations from '../data/translations.js'

function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section className="section" id="ueber-mich">
      <p className="section-label">{t.label}</p>
      <h2>{t.title}</h2>
      <p>{t.text}</p>
    </section>
  )
}

export default About