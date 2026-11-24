import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

const SIZE_RANGES = [
  {
    range: '18–21',
    query: '18-21',
    labelKey: 'sizeShop.ranges.firstSteps',
    metaKey: 'sizeShop.meta.bootsShoesSandals',
  },
  {
    range: '22–25',
    query: '22-25',
    labelKey: 'sizeShop.ranges.toddlers',
    metaKey: 'sizeShop.meta.allCategories',
  },
  {
    range: '26–30',
    query: '26-30',
    labelKey: 'sizeShop.ranges.preschoolers',
    metaKey: 'sizeShop.meta.allCategories',
  },
] as const;

export default function SizeShop(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section id='marime' className='container size-shop'>
      <SectionHeader
        title={t('sizeShop.title')}
        subtitle={t('sizeShop.subtitle')}
      />
      <div className='size-grid'>
        {SIZE_RANGES.map((size) => (
          <a
            key={size.query}
            href={`/catalog?marimi=${size.query}`}
            className='card-link size-card'
          >
            <span className='size-card-range'>{size.range}</span>
            <span className='size-card-label'>{t(size.labelKey)}</span>
            <span className='size-card-meta'>{t(size.metaKey)}</span>
            <span className='size-card-cta'>{t('sizeShop.cta')} →</span>
          </a>
        ))}
        <a href='#' className='card-link size-card size-card-help'>
          <i className='fa-solid fa-ruler size-card-icon' aria-hidden='true'></i>
          <span className='size-card-label'>{t('sizeShop.help.title')}</span>
          <span className='size-card-meta'>{t('sizeShop.help.text')}</span>
          <span className='size-card-cta'>{t('sizeShop.help.cta')} →</span>
        </a>
      </div>
    </section>
  );
}
