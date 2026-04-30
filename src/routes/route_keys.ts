export const routeKeys = ['home', 'about', 'projects', 'blog', 'contact'] as const;

export type RouteKey = (typeof routeKeys)[number];
