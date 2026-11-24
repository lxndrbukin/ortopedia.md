import { type JSX } from 'react';
import SectionHeader from './SectionHeader';

const SIZE_RANGES = [
  { range: '18–21', query: '18-21', label: 'Primii pași', meta: 'Ghete, pantofi, sandale' },
  { range: '22–25', query: '22-25', label: 'Copii mici', meta: 'Toate categoriile' },
  { range: '26–30', query: '26-30', label: 'Preșcolari', meta: 'Toate categoriile' },
];

export default function SizeShop(): JSX.Element {
  return (
    <section id='marime' className='container size-shop'>
      <SectionHeader
        title='Alege după mărimea copilului'
        subtitle='Toate modelele sunt grupate pe intervale de mărimi, ca să găsiți rapid ce se potrivește.'
      />
      <div className='size-grid'>
        {SIZE_RANGES.map((size) => (
          <a
            key={size.query}
            href={`/catalog?marimi=${size.query}`}
            className='card-link size-card'
          >
            <span className='size-card-range'>{size.range}</span>
            <span className='size-card-label'>{size.label}</span>
            <span className='size-card-meta'>{size.meta}</span>
            <span className='size-card-cta'>Vezi modelele →</span>
          </a>
        ))}
        <a href='#' className='card-link size-card size-card-help'>
          <i className='fa-solid fa-ruler size-card-icon' aria-hidden='true'></i>
          <span className='size-card-label'>Nu știți mărimea?</span>
          <span className='size-card-meta'>
            Ghid pas cu pas: cum măsurați piciorul copilului acasă.
          </span>
          <span className='size-card-cta'>Deschide ghidul →</span>
        </a>
      </div>
    </section>
  );
}
