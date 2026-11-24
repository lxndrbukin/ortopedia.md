import { type JSX } from 'react';

const BRANDS = [
  {
    name: 'ORTOPEDIA',
    text: 'Brandul nostru, cu sistemul Shock Point și materiale testate.',
  },
  {
    name: 'Dr. Mymi',
    text: 'Încălțăminte anatomică pentru copii, produsă din anul 2000.',
  },
  {
    name: 'Perlina',
    text: 'Design italian, fabricată în Turcia, din piele naturală.',
  },
];

export default function Brands(): JSX.Element {
  return (
    <section className='container brands' aria-label='Branduri'>
      <div className='brands-grid'>
        {BRANDS.map((brand) => (
          <div key={brand.name} className='brand-card'>
            <span className='brand-card-name'>{brand.name}</span>
            <span className='brand-card-text'>{brand.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
