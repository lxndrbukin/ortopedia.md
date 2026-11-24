import { type JSX } from 'react';
import type { Guide } from '../../types';
import SectionHeader from '../Static/SectionHeader';
import ImagePlaceholder from '../Static/ImagePlaceholder';

interface GuidesProps {
  guides: Guide[];
}

export default function Guides({ guides }: GuidesProps): JSX.Element {
  return (
    <section id='sfaturi' className='guides'>
      <div className='container guides-inner'>
        <SectionHeader
          title='Sfaturi pentru părinți'
          subtitle='Cum alegeți, măsurați și îngrijiți încălțămintea copilului.'
          link={{ href: '#', label: 'Toate articolele' }}
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
                label='Ilustrație articol'
              />
              <div className='guide-card-body'>
                <span className='guide-card-tag'>{guide.tag}</span>
                <span className='guide-card-title'>{guide.title}</span>
                <span className='guide-card-cta'>Citește →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
