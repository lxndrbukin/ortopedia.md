import { type JSX } from 'react';

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='header-top'>
        <span className='header-top-text'>
          Deschis zilnic · 2 magazine: Elat, Baby Hall
        </span>
        <div className='header-top-language'>
          <span className='header-top-language-text'>RO</span>
          <span className='header-top-language-text'>RU</span>
        </div>
      </div>
      <div className='header-bottom'>
        <div className='header-bottom-logo'>
          <span className='header-bottom-logo-text'>
            ORTOPEDIA<span>.MD</span>
          </span>
          <span className='header-bottom-logo-text-small'>
            încălțăminte ortopedică pentru copii
          </span>
        </div>
        <ul className='header-bottom-menu'>
          <li className='header-bottom-menu-item'>
            <a href='#'>Catalog</a>
          </li>
          <li className='header-bottom-menu-item'>
            <a href='#'>Ghid de mărimi</a>
          </li>
          <li className='header-bottom-menu-item'>
            <a href='#'>Magazine</a>
          </li>
        </ul>
        <form className='header-bottom-search'>
          <input
            type='text'
            className='header-bottom-search-input'
            placeholder='Caută produs'
          />
          <button type='submit' className='header-bottom-search-button'>
            <span className='header-bottom-search-button-text'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </span>
          </button>
        </form>
      </div>
    </header>
  );
}
