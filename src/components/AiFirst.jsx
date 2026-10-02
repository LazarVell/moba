import { useTranslation } from 'react-i18next';

export default function AiFirst() {
  const { t } = useTranslation();
  const items = t('ai.items', { returnObjects: true });

  return (
    <section id="ai" className="section section--tint">
      <div className="container rules">
        <div>
          <p className="label">{t('ai.label')}</p>
          <h2 className="section__title">{t('ai.title')}</h2>
          <p className="muted section__intro">{t('ai.intro')}</p>
        </div>
        <ol className="rules__list">
          {items.map((item, i) => (
            <li key={i}>
              <span className="rules__num">{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
