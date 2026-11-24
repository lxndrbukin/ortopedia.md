import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

const FEATURE_KEYS = ['shockPoint', 'materials', 'leather', 'fitting'] as const;

export default function WhyOrtopedia(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className='why'>
      <div className='container why-inner'>
        <div className='why-intro'>
          <span className='why-eyebrow'>{t('why.eyebrow')}</span>
          <h2 className='why-title'>{t('why.title')}</h2>
          <p className='why-text'>{t('why.text')}</p>
          <a href='#' className='why-link'>
            {t('why.link')} →
          </a>
        </div>
        <ol className='why-grid'>
          {FEATURE_KEYS.map((key, index) => (
            <li key={key} className='feature-card'>
              <span className='feature-card-number' aria-hidden='true'>
                {index + 1}
              </span>
              <span className='feature-card-title'>
                {t(`why.features.${key}.title`)}
              </span>
              <span className='feature-card-text'>
                {t(`why.features.${key}.text`)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
