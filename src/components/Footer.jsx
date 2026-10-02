import { Trans, useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__bottom">
          <p className="footer__credits">
            <Trans
              i18nKey="footer.credits"
              components={{
                odin: <a href="https://www.theodinproject.com/" target="_blank" rel="noreferrer" />,
                license: (
                  <a
                    href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                    target="_blank"
                    rel="noreferrer"
                  />
                ),
              }}
            />
          </p>
          <p className="footer__tagline">
            <Logo size={20} />
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}
