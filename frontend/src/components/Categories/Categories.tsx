import { type JSX } from 'react';
import type { Category } from '../../types';
import SectionHeader from '../Static/SectionHeader';
import ImagePlaceholder from '../Static/ImagePlaceholder';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps): JSX.Element {
  return (
    <section className='container categories'>
      <SectionHeader title='Categorii' />
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
              label='Foto categorie'
            />
            <span className='category-card-name'>{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
