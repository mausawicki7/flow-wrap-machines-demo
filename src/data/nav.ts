import { localeUrl, type Lang } from '../i18n/ui';

/*
  Estructura del sitio: la Home concentra todo y el menú son anclas a sus secciones.
  La única excepción es Productos, que tiene página propia — es la sección con más
  contenido y la que más valor tiene como URL indexable por separado.

  Definido acá una sola vez porque Header y Footer tienen que coincidir; si divergen,
  el usuario ve dos menús distintos en la misma página.
*/

export interface NavItem {
  /** Ancla de la Home, o null si es una página aparte. */
  section: string | null;
  href: string;
  label: string;
}

type T = (key: string) => string;

export function getNav(lang: Lang, t: T): NavItem[] {
  const home = localeUrl(lang);
  return [
    { section: null, href: localeUrl(lang, 'products'), label: t('nav.products') },
    { section: 'services', href: `${home}#services`, label: t('nav.services') },
    { section: 'testimonials', href: `${home}#testimonials`, label: t('nav.testimonials') },
    { section: 'videos', href: `${home}#videos`, label: t('nav.videos') },
  ];
}

/** El CTA de cotización, que va aparte del nav principal. */
export function getQuoteHref(lang: Lang): string {
  return `${localeUrl(lang)}#quote`;
}
