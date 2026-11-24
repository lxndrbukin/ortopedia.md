import { type JSX } from 'react';
import type { Product } from '../../types';
import SectionHeader from '../Static/SectionHeader';
import ProductCard from './ProductCard';

interface NewArrivalsProps {
  products: Product[];
}

export default function NewArrivals({ products }: NewArrivalsProps): JSX.Element {
  return (
    <section className='container new-arrivals'>
      <SectionHeader
        title='Noutăți'
        link={{ href: '/catalog', label: 'Toate produsele' }}
      />
      <div className='products-grid'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
