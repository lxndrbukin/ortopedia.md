import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../i18n';

export default function LanguageSwitch(): JSX.Element {
  const { t, i18n } = useTranslation();

  return (
    <div
      className='language-switch'
      role='group'
      aria-label={t('header.languageSwitchLabel')}
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          type='button'
          lang={lang}
          className='language-switch-option'
          aria-pressed={i18n.resolvedLanguage === lang}
          onClick={() => i18n.changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
