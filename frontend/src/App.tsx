import { type JSX } from 'react';
import { PLACEHOLDER_CATEGORIES } from './data/placeholder';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

export default function App(): JSX.Element {
  const categories = PLACEHOLDER_CATEGORIES;

  return (
    <div className='app'>
      <Header categories={categories} />
      <main>
        <Home categories={categories} />
      </main>
      <Footer categories={categories} />
    </div>
  );
}
