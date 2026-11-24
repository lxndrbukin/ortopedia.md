import type { Category, Guide, Product } from '../types';

// Placeholder content from the design mockup.
// Replace with data fetched from the backend (/api/v1) once endpoints exist.

export const PLACEHOLDER_CATEGORIES: Category[] = [
  { slug: 'ghete', name: 'Ghete' },
  { slug: 'pantofi', name: 'Pantofi' },
  { slug: 'adidasi', name: 'Adidași' },
  { slug: 'sandale', name: 'Sandale' },
  { slug: 'mocasini', name: 'Mocasini' },
  { slug: 'ghete-de-iarna', name: 'Ghete de iarnă' },
];

export const PLACEHOLDER_PRODUCTS: Product[] = [
  { id: '88', code: '88', brand: 'ORTOPEDIA', name: 'Ghete', sizes: '21–25', season: 'Primăvară', price: null },
  { id: '154', code: '154', brand: 'ORTOPEDIA', name: 'Ghete', sizes: '18–21', season: 'Nou', price: null },
  { id: '76', code: '76', brand: 'ORTOPEDIA', name: 'Adidași', sizes: '18–21', season: 'Nou', price: null },
  { id: '34', code: '34', brand: 'ORTOPEDIA', name: 'Pantofi', sizes: '26–30', season: 'Nou', price: null },
];

export const PLACEHOLDER_GUIDES: Guide[] = [
  { slug: 'cum-alegem-incaltamintea', tag: 'Ghid', title: 'Cum alegem corect încălțămintea pentru copil' },
  { slug: 'ce-este-incaltamintea-ortopedica', tag: 'Ortopedie', title: 'Ce este încălțămintea ortopedică și cum o alegem' },
  { slug: 'ingrijirea-incaltamintei', tag: 'Îngrijire', title: 'Reguli simple de îngrijire a încălțămintei' },
];
