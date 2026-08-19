// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Nombre del repo en GitHub Pages. Se usa para el base y para el redirect de la raíz.
const BASE = '/flow-wrap-machines-demo/';

// https://astro.build/config
export default defineConfig({
  /*
    GitHub Pages sirve el proyecto bajo /<repo>/, así que el sitio vive en un
    subdirectorio. Todo link interno tiene que pasar por los helpers de i18n/ui.ts
    (localeUrl / withBase), nunca escribirse como '/en/...' a mano.
  */
  site: 'https://mausawicki7.github.io',
  base: BASE,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: {
      // Ambos idiomas llevan prefijo explícito: /en/ y /fr/.
      // Es lo que queremos mostrarle al cliente — URLs limpias y simétricas por idioma,
      // que es la base del hreflang y del SEO por idioma que pide la propuesta.
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    // El target NO recibe el base automáticamente, hay que escribirlo completo.
    '/': `${BASE}en/`,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
