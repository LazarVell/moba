import { useTranslation } from 'react-i18next';

export default function Curriculum() {
  const { t } = useTranslation();
  const stages = t('program.stages', { returnObjects: true });

  return (
    <section id="program" className="section">
      <div className="container">
        <p className="label">{t('program.label')}</p>
        <h2 className="section__title">{t('program.title')}</h2>
        <p className="muted section__intro">{t('program.intro')}</p>

        <ol className="stages">
          {stages.map((stage, i) => (
            <li key={stage.tag} className="stage">
              <div className="stage__head">
                <span className="stage__num">{i + 1}</span>
                <p className="stage__tag">{stage.tag}</p>
                <h3 className="stage__title">{stage.title}</h3>
                <p className="stage__subtitle">{stage.subtitle}</p>
                <p className="stage__text">{stage.text}</p>
              </div>

              <div className="stage__body">
                <p className="stage__label">{t('program.topicsLabel')}</p>
                <ul className="chips">
                  {stage.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>

                <p className="stage__label">{t('program.projectsLabel')}</p>
                <ul className="stage__projects">
                  {stage.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <p className="stages__outro">
          <span aria-hidden="true">→</span>{' '}
          <a href="#projects">{t('program.outro')}</a>
        </p>
        <p className="stages__note">{t('program.disclaimer')}</p>
      </div>
    </section>
  );
}
