export interface Category {
  slug: string;
  name: string;
}

export interface Product {
  id: string;
  code: string;
  brand: string;
  name: string;
  sizes: string;
  season: string;
  price: number | null;
}

export interface Guide {
  slug: string;
  tag: string;
  title: string;
}

export interface Store {
  name: string;
  place: string;
  address: string;
  hours: string;
  mapUrl: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
