import { type JSX } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import { type AppDispatch, setLanguage } from '../../store';

export default function LanguageSwitch(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

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
          onClick={() => dispatch(setLanguage(lang))}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
