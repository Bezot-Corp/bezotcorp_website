import type { Locale } from './locales';
import type { RouteKey } from './route_keys';

export const routeRegistry: Record<RouteKey, Record<Locale, string>> = {
  home: {
    'fr-fr': '/fr-fr/',
    'en-us': '/en-us/',
  },
  about: {
    'fr-fr': '/fr-fr/a-propos',
    'en-us': '/en-us/about',
  },
  projects: {
    'fr-fr': '/fr-fr/projets',
    'en-us': '/en-us/projects',
  },
  blog: {
    'fr-fr': '/fr-fr/blog',
    'en-us': '/en-us/blog',
  },
  contact: {
    'fr-fr': '/fr-fr/contact',
    'en-us': '/en-us/contact',
  },
};

export function route(routeKey: RouteKey, locale: Locale): string {
  return routeRegistry[routeKey][locale];
}
