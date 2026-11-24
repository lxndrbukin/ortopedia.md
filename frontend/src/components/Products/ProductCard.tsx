import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type { Product } from '../../types';
import ImagePlaceholder from '../Static/ImagePlaceholder';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <a href={`/produs/${product.id}`} className='card-link product-card'>
      <ImagePlaceholder
        className='product-card-image'
        iconSize={72}
        label={t('product.imagePlaceholder')}
      >
        <span className='product-card-badge'>{product.season}</span>
      </ImagePlaceholder>
      <span className='product-card-meta'>
        {product.brand} · {t('product.code', { code: product.code })}
      </span>
      <span className='product-card-name'>{product.name}</span>
      <span className='product-card-footer'>
        <span className='product-card-sizes'>
          {t('product.sizes', { sizes: product.sizes })}
        </span>
        <span className='product-card-price'>
          {t('product.price', { price: product.price ?? '[PREȚ]' })}
        </span>
      </span>
    </a>
  );
}
