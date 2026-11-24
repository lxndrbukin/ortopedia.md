import { type JSX } from 'react';
import type { Category } from '../../types';
import { CONTACT, STORES } from '../../data/site';
import Logo from '../Static/Logo';
import LanguageSwitch from './LanguageSwitch';

const NAV_LINKS = [
  { href: '/catalog', label: 'Catalog' },
  { href: '/#marime', label: 'Ghid de mărimi' },
  { href: '/#sfaturi', label: 'Sfaturi' },
  { href: '/#magazine', label: 'Magazine' },
];

interface HeaderProps {
  categories: Category[];
}

export default function Header({ categories }: HeaderProps): JSX.Element {
  const storeNames = STORES.map((store) => store.name).join(', ');

  return (
    <>
      <div className='utility-bar'>
        <div className='container utility-bar-inner'>
          <span>
            Deschis zilnic · {STORES.length} magazine: {storeNames}
          </span>
          <div className='utility-bar-actions'>
            <a href={CONTACT.phoneHref} className='utility-bar-phone'>
              {CONTACT.phone}
            </a>
            <LanguageSwitch />
          </div>
        </div>
      </div>

      <header className='header'>
        <div className='container header-main'>
          <a href='/' className='header-logo'>
            <Logo />
            <span className='header-logo-tagline'>
              încălțăminte ortopedică pentru copii
            </span>
          </a>

          <nav className='header-nav' aria-label='Principal'>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className='header-nav-link'>
                {link.label}
              </a>
            ))}
          </nav>

          <form className='search' role='search' action='/catalog' method='get'>
            <label htmlFor='search-query' className='sr-only'>
              Caută
            </label>
            <input
              id='search-query'
              name='q'
              type='search'
              className='search-input'
              placeholder='Caută după model sau cod'
            />
            <button type='submit' className='search-button' aria-label='Caută'>
              <i className='fa-solid fa-magnifying-glass' aria-hidden='true'></i>
            </button>
          </form>
        </div>

        <nav className='container header-chips' aria-label='Categorii'>
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/catalog?categorie=${category.slug}`}
              className='chip'
            >
              {category.name}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
