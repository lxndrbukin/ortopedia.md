import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

// Brand names are proper nouns and stay untranslated.
const BRANDS = [
  { name: 'ORTOPEDIA', textKey: 'brands.ortopedia' },
  { name: 'Dr. Mymi', textKey: 'brands.drMymi' },
  { name: 'Perlina', textKey: 'brands.perlina' },
] as const;

export default function Brands(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className='container brands' aria-label={t('brands.label')}>
      <div className='brands-grid'>
        {BRANDS.map((brand) => (
          <div key={brand.name} className='brand-card'>
            <span className='brand-card-name'>{brand.name}</span>
            <span className='brand-card-text'>{t(brand.textKey)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
