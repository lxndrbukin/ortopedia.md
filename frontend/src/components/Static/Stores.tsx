import { type JSX } from 'react';
import { CONTACT, STORES } from '../../data/site';
import ImagePlaceholder from './ImagePlaceholder';

export default function Stores(): JSX.Element {
  return (
    <section id='magazine' className='container stores'>
      <div className='stores-intro'>
        <h2 className='section-title'>Veniți la probă</h2>
        <p className='stores-text'>
          Mărimea potrivită se alege cel mai bine pe piciorul copilului. Toate
          magazinele sunt deschise 7 zile din 7.
        </p>
        <div className='contact-card'>
          <span className='contact-card-label'>
            Telefon pentru toate magazinele
          </span>
          <a href={CONTACT.phoneHref} className='contact-card-phone'>
            {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className='contact-card-email'>
            {CONTACT.email}
          </a>
        </div>
      </div>
      <div className='stores-grid'>
        {STORES.map((store) => (
          <div key={store.name} className='store-card'>
            <ImagePlaceholder
              className='store-card-image'
              label='Hartă / foto magazin'
            />
            <h3 className='store-card-name'>{store.name}</h3>
            <span className='store-card-detail'>{store.place}</span>
            <span className='store-card-detail'>{store.address}</span>
            <span className='store-card-hours'>Zilnic, {store.hours}</span>
            <a
              href={store.mapUrl}
              className='button button-primary button-small store-card-button'
            >
              Cum ajung
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
