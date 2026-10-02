import { useTranslation } from 'react-i18next';

export default function Name() {
  const { t } = useTranslation();

  return (
    <section id="moba" className="section section--tint">
      <div className="container">
        <p className="label">{t('name.label')}</p>
        <p className="term__definition">{t('name.definition')}</p>
        <p className="term__why">{t('name.why')}</p>
        <p className="term__principle">{t('name.principle')}</p>
        <p className="term__principle term__principle--next">{t('name.support')}</p>
        <figure className="term__quote">
          <blockquote>{t('name.quote')}</blockquote>
          <figcaption>{t('name.quoteSource')}</figcaption>
        </figure>
      </div>
    </section>
  );
}
