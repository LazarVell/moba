import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const lines = t('hero.demo.lines', { returnObjects: true });

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="hero__title">
            {t('hero.titleLead')} <span className="accent">{t('hero.titleAccent')}</span>
          </h1>
          <p className="hero__lead">{t('hero.lead')}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#pillars">
              {t('hero.ctaPrimary')}
            </a>
            <a className="btn btn--ghost" href="#problem">
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>

        <figure className="demo">
          <div className="demo__bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="demo__body">
            {lines.map((line, i) => (
              <div key={i} className={`demo__line${line.tone === 'ok' ? ' demo__line--ok' : ''}`}>
                <span className={`demo__who${line.who === 'ai' ? ' demo__who--ai' : ''}`}>
                  {t(`hero.demo.${line.who}`)}
                </span>
                <div className="demo__msg">
                  {line.text}
                  {line.code && (
                    <pre>
                      <code>{line.code}</code>
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
          <figcaption>{t('hero.demo.caption')}</figcaption>
        </figure>
      </div>
    </section>
  );
}
