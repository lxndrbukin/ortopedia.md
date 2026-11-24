import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type { Guide } from '../../types';
import SectionHeader from '../Static/SectionHeader';
import ImagePlaceholder from '../Static/ImagePlaceholder';

interface GuidesProps {
  guides: Guide[];
}

export default function Guides({ guides }: GuidesProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <section id='sfaturi' className='guides'>
      <div className='container guides-inner'>
        <SectionHeader
          title={t('guides.title')}
          subtitle={t('guides.subtitle')}
          link={{ href: '#', label: t('guides.viewAll') }}
        />
        <div className='guides-grid'>
          {guides.map((guide) => (
            <a
              key={guide.slug}
              href={`/sfaturi/${guide.slug}`}
              className='card-link guide-card'
            >
              <ImagePlaceholder
                className='guide-card-image'
                label={t('guides.imagePlaceholder')}
              />
              <div className='guide-card-body'>
                <span className='guide-card-tag'>{guide.tag}</span>
                <span className='guide-card-title'>{guide.title}</span>
                <span className='guide-card-cta'>{t('guides.read')} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
