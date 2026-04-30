import { routeRegistry } from './route_registry';
import type { RouteKey } from './route_keys';
import type { Locale } from './locales';

export const hreflangByLocale = {
  'fr-fr': 'fr-FR',
  'en-us': 'en-US',
} as const;

export function getCanonical(routeKey: RouteKey, locale: Locale) {
  return `https://bezotcorp.com${routeRegistry[routeKey][locale]}`;
}

export function getAlternateLinks(routeKey: RouteKey, availableLocales: Locale[]) {
  return availableLocales.map((locale) => ({
    hreflang: hreflangByLocale[locale],
    url: `https://bezotcorp.com${routeRegistry[routeKey][locale]}`,
  }));
}
