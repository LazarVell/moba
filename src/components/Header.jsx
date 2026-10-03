import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n';
import Logo from './Logo';

const NAV = ['problem', 'pillars', 'plan', 'program', 'ai', 'projects', 'live'];

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label="Moba">
          <Logo />
          <span>Moba</span>
        </a>

        <nav className="nav" aria-label="Main">
          {NAV.map((id) => (
            <a key={id} href={`#${id}`}>
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="lang" role="group" aria-label={t('nav.language')}>
          {LANGUAGES.map(({ code, label, name }) => (
            <button
              key={code}
              type="button"
              lang={code}
              title={name}
              aria-pressed={i18n.resolvedLanguage === code}
              onClick={() => i18n.changeLanguage(code)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
