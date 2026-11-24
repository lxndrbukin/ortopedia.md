import type { SocialLink, Store } from '../types';

// Business info shared by the header, stores section and footer.

export const CONTACT = {
  phone: '(+373) 69 050 522',
  phoneHref: 'tel:+37369050522',
  email: 'ortopediamoldova@gmail.com',
};

export const STORES: Store[] = [
  {
    name: 'Elat',
    place: 'Etajul 4, butic 40',
    address: '[Adresa centrului comercial]',
    hours: '9:00–21:00',
    mapUrl: '#',
  },
  {
    name: 'Ius-Com',
    place: 'Etajul 2, butic 6',
    address: '[Adresa centrului comercial]',
    hours: '9:00–20:00',
    mapUrl: '#',
  },
  {
    name: 'Sun City',
    place: 'Etajul 4, butic 418',
    address: '[Adresa centrului comercial]',
    hours: '9:00–21:00',
    mapUrl: '#',
  },
];

export const SOCIALS: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/ortopediamoldova' },
  { label: 'OK', href: 'http://ok.ru/profile/566055639785' },
  { label: 'VK', href: 'https://vk.com/id259566450' },
];
