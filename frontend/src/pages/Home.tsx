import { type JSX } from 'react';
import type { Category } from '../types';
import { PLACEHOLDER_GUIDES, PLACEHOLDER_PRODUCTS } from '../data/placeholder';
import Hero from '../components/Static/Hero';
import SizeShop from '../components/Static/SizeShop';
import WhyOrtopedia from '../components/Static/WhyOrtopedia';
import Brands from '../components/Static/Brands';
import Stores from '../components/Static/Stores';
import Categories from '../components/Categories/Categories';
import NewArrivals from '../components/Products/NewArrivals';
import Guides from '../components/Guides/Guides';

interface HomeProps {
  categories: Category[];
}

export default function Home({ categories }: HomeProps): JSX.Element {
  return (
    <>
      <Hero />
      <SizeShop />
      <Categories categories={categories} />
      <WhyOrtopedia />
      <NewArrivals products={PLACEHOLDER_PRODUCTS} />
      <Brands />
      <Guides guides={PLACEHOLDER_GUIDES} />
      <Stores />
    </>
  );
}
