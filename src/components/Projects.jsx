import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const stages = t('projects.stages', { returnObjects: true });

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="label">{t('projects.label')}</p>
        <h2 className="section__title">{t('projects.title')}</h2>
        <p className="muted section__intro">{t('projects.intro')}</p>

        <ol className="path">
          {stages.map((stage, i) => (
            <li key={i} className="path__stage">
              <span className="path__num">{i + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
