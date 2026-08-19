export const languages = {
  en: 'EN',
  fr: 'FR',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/*
  Strings de chrome (nav, footer, CTAs). El contenido largo vive en las content
  collections, no acá — esta tabla es solo para lo que se repite en todo el sitio.
  Para el demo el FR de las páginas Servicios/Testimonios/Videos queda sin traducir
  a nivel contenido, pero el chrome sí está completo en ambos idiomas.
*/
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.videos': 'Videos',
    'nav.quote': 'Get a Quote',
    'nav.menu': 'Menu',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'nav.callUs': 'Call us',
    'nav.skip': 'Skip to content',
    'nav.language': 'Language',
    'footer.locations': 'Locations',
    'footer.hq': 'Ontario — Head office',
    'footer.qc': 'Québec',
    'footer.usa': 'United States',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow',
    'footer.tagline': 'Pack anything beautifully',
    'footer.rights': 'All rights reserved.',
    'footer.demo': 'Redesign concept — demonstration site, not affiliated content.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.services': 'Services',
    'nav.testimonials': 'Témoignages',
    'nav.videos': 'Vidéos',
    'nav.quote': 'Demander une soumission',
    'nav.menu': 'Menu',
    'nav.open': 'Ouvrir le menu',
    'nav.close': 'Fermer le menu',
    'nav.callUs': 'Appelez-nous',
    'nav.skip': 'Aller au contenu',
    'nav.language': 'Langue',
    'footer.locations': 'Emplacements',
    'footer.hq': 'Ontario — Siège social',
    'footer.qc': 'Québec',
    'footer.usa': 'États-Unis',
    'footer.contact': 'Contact',
    'footer.follow': 'Suivez-nous',
    'footer.tagline': 'Emballez tout, avec élégance',
    'footer.rights': 'Tous droits réservés.',
    'footer.demo': 'Concept de refonte — site de démonstration.',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

/*
  El sitio se despliega bajo un subdirectorio en GitHub Pages (/<repo>/), así que
  BASE_URL puede ser '/' o '/flow-wrap-machines-demo/'. Estos helpers son la única
  forma correcta de armar un link interno: escribir '/en/products/' a mano funciona
  en local y rompe en producción.
*/

/** Prefija BASE_URL a una ruta interna. */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\/+/, '')}`;
}

/** Quita BASE_URL de un pathname para poder razonar sobre la ruta lógica. */
function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && pathname.startsWith(base)) {
    return pathname.slice(base.length) || '/';
  }
  return pathname;
}

/** URL de una página, con locale y base ya aplicados. localeUrl('en','products') */
export function localeUrl(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return withBase(`${lang}/${clean ? `${clean}/` : ''}`);
}

/** Extrae el locale de una URL tipo /base/en/products/ */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = stripBase(url.pathname).split('/');
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

/** Misma ruta, otro idioma — para el selector EN/FR y para el hreflang. */
export function switchLocalePath(url: URL, target: Lang): string {
  const segments = stripBase(url.pathname).split('/').filter(Boolean);
  segments[0] = target;
  return withBase(`${segments.join('/')}/`);
}

/** Filtra entradas de una colección por locale (el id es `<locale>/<slug>`). */
export function byLocale<T extends { id: string }>(entries: T[], lang: Lang): T[] {
  return entries.filter((e) => e.id.startsWith(`${lang}/`));
}
