import { useTranslation } from 'react-i18next';

export default function Problem() {
  const { t } = useTranslation();
  const items = t('problem.items', { returnObjects: true });

  return (
    <section id="problem" className="section">
      <div className="container">
        <p className="label">{t('problem.label')}</p>
        <h2 className="section__title">{t('problem.title')}</h2>
        <div className="cards cards--3">
          {items.map((item, i) => (
            <article key={i} className="card">
              <span className="card__num">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
