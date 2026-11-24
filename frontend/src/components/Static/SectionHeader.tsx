import { type JSX } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  link?: { href: string; label: string };
}

export default function SectionHeader({
  title,
  subtitle,
  link,
}: SectionHeaderProps): JSX.Element {
  return (
    <div className='section-header'>
      <div>
        <h2 className='section-title'>{title}</h2>
        {subtitle && <p className='section-subtitle'>{subtitle}</p>}
      </div>
      {link && (
        <a href={link.href} className='section-link'>
          {link.label} →
        </a>
      )}
    </div>
  );
}
