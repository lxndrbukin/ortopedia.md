import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type { Category } from '../../types';
import { CONTACT, SOCIALS } from '../../data/site';
import Logo from '../Static/Logo';

const INFO_LINKS = [
  { href: '/#marime', labelKey: 'footer.links.sizeGuide' },
  { href: '/#sfaturi', labelKey: 'footer.links.parentTips' },
  { href: '/#magazine', labelKey: 'footer.links.storesAndHours' },
  { href: '#', labelKey: 'footer.links.about' },
] as const;

interface FooterProps {
  categories: Category[];
}

export default function Footer({ categories }: FooterProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <footer className='footer'>
      <div className='container footer-inner'>
        <div className='footer-column footer-brand'>
          <Logo className='footer-logo' />
          <span>{t('footer.tagline')}</span>
        </div>

        <nav className='footer-column' aria-label={t('footer.headings.catalog')}>
          <span className='footer-heading'>{t('footer.headings.catalog')}</span>
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/catalog?categorie=${category.slug}`}
              className='footer-link'
            >
              {category.name}
            </a>
          ))}
        </nav>

        <nav className='footer-column' aria-label={t('footer.headings.info')}>
          <span className='footer-heading'>{t('footer.headings.info')}</span>
          {INFO_LINKS.map((link) => (
            <a key={link.labelKey} href={link.href} className='footer-link'>
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div className='footer-column'>
          <span className='footer-heading'>{t('footer.headings.contact')}</span>
          <a href={CONTACT.phoneHref} className='footer-link footer-phone'>
            {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className='footer-link'>
            {CONTACT.email}
          </a>
          <div className='footer-socials'>
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className='footer-social'
                target='_blank'
                rel='noopener noreferrer'
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='container footer-bottom'>
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
