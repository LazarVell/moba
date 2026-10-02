import { useTranslation } from 'react-i18next';

export default function Pillars() {
  const { t } = useTranslation();
  const items = t('pillars.items', { returnObjects: true });

  return (
    <section id="pillars" className="section section--tint">
      <div className="container">
        <p className="label">{t('pillars.label')}</p>
        <h2 className="section__title">{t('pillars.title')}</h2>
        <div className="cards cards--3">
          {items.map((item, i) => (
            <article key={i} className="card card--pillar">
              <span className="pillar__num">{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
