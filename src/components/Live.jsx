import { useTranslation } from 'react-i18next';

// Channels have no links yet; add an `href` per channel once they exist.
export default function Live() {
  const { t } = useTranslation();
  const channels = t('live.channels', { returnObjects: true });

  return (
    <section id="live" className="section section--tint">
      <div className="container">
        <p className="label">{t('live.label')}</p>
        <h2 className="section__title">{t('live.title')}</h2>
        <p className="muted section__intro">{t('live.intro')}</p>
        <div className="cards cards--2">
          {channels.map((channel) => (
            <article key={channel.name} className="card card--line channel">
              <h3>{channel.name}</h3>
              <p>{channel.text}</p>
              <span className="badge">{t('live.soon')}</span>
            </article>
          ))}
        </div>
        <a className="btn btn--ghost back-to-top" href="#top">
          ↑ {t('live.backToTop')}
        </a>
      </div>
    </section>
  );
}
