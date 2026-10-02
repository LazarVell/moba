import { useTranslation } from 'react-i18next';

export default function Plan() {
  const { t } = useTranslation();
  const phases = t('plan.phases', { returnObjects: true });

  return (
    <section id="plan" className="section">
      <div className="container">
        <p className="label">{t('plan.label')}</p>
        <h2 className="section__title">{t('plan.title')}</h2>
        <p className="muted section__intro">{t('plan.intro')}</p>

        <ol className="phases">
          {phases.map((phase, i) => (
            <li key={phase.tag} className={`phase${i === 1 ? ' phase--dark' : ''}`}>
              {i === 1 && (
                <p className="phase__bridge">
                  <span aria-hidden="true">→</span> {t('plan.bridge')}
                </p>
              )}
              <p className="phase__tag">{phase.tag}</p>
              <h3 className="phase__title">{phase.title}</h3>
              <p className="phase__subtitle">{phase.subtitle}</p>
              <p className="phase__text">{phase.text}</p>
              <p className="phase__benefits-label">{t('plan.benefitsLabel')}</p>
              <ul className="phase__benefits">
                {phase.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
