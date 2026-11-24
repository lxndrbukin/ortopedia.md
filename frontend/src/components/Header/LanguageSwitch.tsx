import { type JSX, useState } from 'react';

const LANGUAGES = ['ro', 'ru'] as const;
type Language = (typeof LANGUAGES)[number];

// TODO: wire to i18n once translations exist; for now it only tracks the selection.
export default function LanguageSwitch(): JSX.Element {
  const [language, setLanguage] = useState<Language>('ro');

  return (
    <div className='language-switch' role='group' aria-label='Limbă'>
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          type='button'
          className='language-switch-option'
          aria-pressed={language === lang}
          onClick={() => setLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
