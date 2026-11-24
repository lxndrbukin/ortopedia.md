import 'i18next';
import type ro from './locales/ro.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof ro;
    };
  }
}
