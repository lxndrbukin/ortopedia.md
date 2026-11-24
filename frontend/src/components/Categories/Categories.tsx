import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type { Category } from '../../types';
import SectionHeader from '../Static/SectionHeader';
import ImagePlaceholder from '../Static/ImagePlaceholder';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className='container categories'>
      <SectionHeader title={t('categories.title')} />
      <div className='categories-grid'>
        {categories.map((category) => (
          <a
            key={category.slug}
            href={`/catalog?categorie=${category.slug}`}
            className='card-link category-card'
          >
            <ImagePlaceholder
              className='category-card-image'
              iconSize={56}
              label={t('categories.imagePlaceholder')}
            />
            <span className='category-card-name'>{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
