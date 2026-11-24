import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type { Category } from '../../types';
import { CONTACT, STORES } from '../../data/site';
import Logo from '../Static/Logo';
import LanguageSwitch from './LanguageSwitch';

const NAV_LINKS = [
  { href: '/catalog', labelKey: 'header.nav.catalog' },
  { href: '/#marime', labelKey: 'header.nav.sizeGuide' },
  { href: '/#sfaturi', labelKey: 'header.nav.tips' },
  { href: '/#magazine', labelKey: 'header.nav.stores' },
] as const;

interface HeaderProps {
  categories: Category[];
}

export default function Header({ categories }: HeaderProps): JSX.Element {
  const { t } = useTranslation();
  const storeNames = STORES.map((store) => store.name).join(', ');

  return (
    <>
      <div className='utility-bar'>
        <div className='container utility-bar-inner'>
          <span>
            {t('header.openDaily', {
              count: STORES.length,
              stores: storeNames,
            })}
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
              {t('header.logoTagline')}
            </span>
          </a>

          <nav className='header-nav' aria-label={t('header.nav.label')}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className='header-nav-link'>
                {t(link.labelKey)}
              </a>
            ))}
          </nav>

          <form className='search' role='search' action='/catalog' method='get'>
            <label htmlFor='search-query' className='sr-only'>
              {t('header.search.label')}
            </label>
            <input
              id='search-query'
              name='q'
              type='search'
              className='search-input'
              placeholder={t('header.search.placeholder')}
            />
            <button
              type='submit'
              className='search-button'
              aria-label={t('header.search.submit')}
            >
              <i
                className='fa-solid fa-magnifying-glass'
                aria-hidden='true'
              ></i>
            </button>
          </form>
        </div>

        <nav
          className='container header-chips'
          aria-label={t('header.categoriesLabel')}
        >
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
