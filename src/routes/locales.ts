export const locales = ['fr-fr', 'en-us'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr-fr';
