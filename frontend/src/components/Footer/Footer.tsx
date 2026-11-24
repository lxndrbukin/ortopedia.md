import { type JSX } from 'react';
import type { Category } from '../../types';
import { CONTACT, SOCIALS } from '../../data/site';
import Logo from '../Static/Logo';

const INFO_LINKS = [
  { href: '/#marime', label: 'Ghid de mărimi' },
  { href: '/#sfaturi', label: 'Sfaturi pentru părinți' },
  { href: '/#magazine', label: 'Magazine și program' },
  { href: '#', label: 'Despre noi' },
];

interface FooterProps {
  categories: Category[];
}

export default function Footer({ categories }: FooterProps): JSX.Element {
  return (
    <footer className='footer'>
      <div className='container footer-inner'>
        <div className='footer-column footer-brand'>
          <Logo className='footer-logo' />
          <span>
            Încălțăminte ortopedică pentru copii. ORTOPEDIA, Dr. Mymi, Perlina.
          </span>
        </div>

        <nav className='footer-column' aria-label='Catalog'>
          <span className='footer-heading'>Catalog</span>
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

        <nav className='footer-column' aria-label='Informații'>
          <span className='footer-heading'>Informații</span>
          {INFO_LINKS.map((link) => (
            <a key={link.label} href={link.href} className='footer-link'>
              {link.label}
            </a>
          ))}
        </nav>

        <div className='footer-column'>
          <span className='footer-heading'>Contact</span>
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
        © {new Date().getFullYear()} Ortopedia SRL. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
