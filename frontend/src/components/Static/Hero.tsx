import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { STORES } from '../../data/site';
import ImagePlaceholder from './ImagePlaceholder';

const PERK_KEYS = [
  'hero.perks.shockPoint',
  'hero.perks.openDaily',
  'hero.perks.fitting',
] as const;

export default function Hero(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className='hero'>
      <div className='container hero-inner'>
        <div className='hero-content'>
          <span className='hero-badge'>{t('hero.badge')}</span>
          <h1 className='hero-title'>{t('hero.title')}</h1>
          <p className='hero-text'>
            {t('hero.text', { count: STORES.length })}
          </p>
          <div className='hero-actions'>
            <a href='/catalog' className='button button-primary'>
              {t('hero.ctaCatalog')}
            </a>
            <a href='/#marime' className='button button-outline'>
              {t('hero.ctaSize')}
            </a>
          </div>
          <ul className='hero-perks'>
            {PERK_KEYS.map((key) => (
              <li key={key} className='hero-perk'>
                <i className='fa-solid fa-check' aria-hidden='true'></i>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>
        <div className='hero-media'>
          <ImagePlaceholder
            className='hero-image'
            iconSize={120}
            label={t('hero.imagePlaceholder')}
          />
          <a href='/catalog?categorie=ghete-de-iarna' className='hero-card'>
            <span className='hero-card-icon'>
              <i className='fa-solid fa-snowflake' aria-hidden='true'></i>
            </span>
            <span className='hero-card-text'>
              <span className='hero-card-eyebrow'>{t('hero.card.eyebrow')}</span>
              <span className='hero-card-title'>{t('hero.card.title')} →</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
