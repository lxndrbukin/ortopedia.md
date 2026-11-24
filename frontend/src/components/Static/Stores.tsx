import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { CONTACT, STORES } from '../../data/site';
import ImagePlaceholder from './ImagePlaceholder';

export default function Stores(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section id='magazine' className='container stores'>
      <div className='stores-intro'>
        <h2 className='section-title'>{t('stores.title')}</h2>
        <p className='stores-text'>{t('stores.text')}</p>
        <div className='contact-card'>
          <span className='contact-card-label'>{t('stores.phoneLabel')}</span>
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
              label={t('stores.imagePlaceholder')}
            />
            <h3 className='store-card-name'>{store.name}</h3>
            <span className='store-card-detail'>{store.place}</span>
            <span className='store-card-detail'>{store.address}</span>
            <span className='store-card-hours'>
              {t('stores.hours', { hours: store.hours })}
            </span>
            <a
              href={store.mapUrl}
              className='button button-primary button-small store-card-button'
            >
              {t('stores.directions')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
