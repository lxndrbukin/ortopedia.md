import { type JSX } from 'react';
import { STORES } from '../../data/site';
import ImagePlaceholder from './ImagePlaceholder';

const PERKS = ['Sistem Shock Point', 'Deschis 7 zile din 7', 'Probă în magazin'];

export default function Hero(): JSX.Element {
  return (
    <section className='hero'>
      <div className='container hero-inner'>
        <div className='hero-content'>
          <span className='hero-badge'>
            Mărimile 18–30 · ORTOPEDIA, Dr. Mymi, Perlina
          </span>
          <h1 className='hero-title'>Pași sănătoși de la primul pantof.</h1>
          <p className='hero-text'>
            Încălțăminte ortopedică pentru copii, gândită pentru creșterea
            sănătoasă a piciorului. Alegeți modelul online, apoi veniți la probă
            în unul din cele {STORES.length} magazine.
          </p>
          <div className='hero-actions'>
            <a href='/catalog' className='button button-primary'>
              Vezi catalogul
            </a>
            <a href='/#marime' className='button button-outline'>
              Alege după mărime
            </a>
          </div>
          <ul className='hero-perks'>
            {PERKS.map((perk) => (
              <li key={perk} className='hero-perk'>
                <i className='fa-solid fa-check' aria-hidden='true'></i>
                {perk}
              </li>
            ))}
          </ul>
        </div>
        <div className='hero-media'>
          <ImagePlaceholder
            className='hero-image'
            iconSize={120}
            label='Fotografie: copil purtând ghete ORTOPEDIA'
          />
          <a href='/catalog?categorie=ghete-de-iarna' className='hero-card'>
            <span className='hero-card-icon'>
              <i className='fa-solid fa-snowflake' aria-hidden='true'></i>
            </span>
            <span className='hero-card-text'>
              <span className='hero-card-eyebrow'>Sezonul rece</span>
              <span className='hero-card-title'>Ghete de iarnă →</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
