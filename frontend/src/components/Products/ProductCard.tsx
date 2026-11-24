import { type JSX } from 'react';
import type { Product } from '../../types';
import ImagePlaceholder from '../Static/ImagePlaceholder';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps): JSX.Element {
  return (
    <a href={`/produs/${product.id}`} className='card-link product-card'>
      <ImagePlaceholder
        className='product-card-image'
        iconSize={72}
        label='Foto produs'
      >
        <span className='product-card-badge'>{product.season}</span>
      </ImagePlaceholder>
      <span className='product-card-meta'>
        {product.brand} · cod {product.code}
      </span>
      <span className='product-card-name'>{product.name}</span>
      <span className='product-card-footer'>
        <span className='product-card-sizes'>Mărimi {product.sizes}</span>
        <span className='product-card-price'>
          {product.price ?? '[PREȚ]'} lei
        </span>
      </span>
    </a>
  );
}
