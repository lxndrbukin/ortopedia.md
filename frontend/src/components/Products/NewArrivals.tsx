import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type { Product } from '../../types';
import SectionHeader from '../Static/SectionHeader';
import ProductCard from './ProductCard';

interface NewArrivalsProps {
  products: Product[];
}

export default function NewArrivals({ products }: NewArrivalsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className='container new-arrivals'>
      <SectionHeader
        title={t('newArrivals.title')}
        link={{ href: '/catalog', label: t('newArrivals.viewAll') }}
      />
      <div className='products-grid'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
