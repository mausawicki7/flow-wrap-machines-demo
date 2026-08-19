# D.T. Flow Wrap Machines — concepto de rediseño

Maqueta en Astro para una propuesta de rediseño del sitio de
[D.T. Flow Wrap Machines](https://flow-wrap-machines.com/), empresa de maquinaria de
empaquetado horizontal (flow-wrap/HFFS) y vertical (VFFS) con base en Ontario y Québec.

**Esto es un demo especulativo, no un sitio oficial ni un producto terminado.** No está
afiliado a la empresa. El contenido de la empresa que aparece acá (testimonios,
ubicaciones, videos) es público y proviene de su sitio actual; se usa únicamente para
ilustrar la propuesta de diseño.

🔗 **Demo:** https://mausawicki7.github.io/flow-wrap-machines-demo/

## Qué muestra

- Dirección de diseño alternativa al template de Elementor del sitio actual
- Estructura de contenido en Astro Content Collections, lista para escalar
- Enfoque de i18n EN/FR con el router nativo de Astro, incluyendo hreflang por idioma

## Estado

| Página       | Estado                                                    |
| ------------ | --------------------------------------------------------- |
| Home         | Completa (EN)                                              |
| Products     | Completa (EN) — 6 categorías con índice lateral            |
| Services     | Stub                                                       |
| Testimonials | Completa (EN) — los 9 testimonios en grilla               |
| Videos       | Stub — los 3 videos reales ya cargados                     |
| Get a Quote  | Stub                                                       |
| Francés      | Chrome traducido; contenido de páginas pendiente           |

Cuatro de las seis categorías de producto (Roll Film, Stand-up Bag, Box/Carton,
Carry Card) no tienen contenido en el sitio actual. Están marcadas con
`contentNeeded: true` y comentarios `<!-- CONTENT NEEDED FROM CLIENT -->`: el copy es
propuesta de cómo se leería la sección, no información verificada de la empresa.

## Stack

Astro (SSG) · Tailwind CSS v4 · Content Collections · sin backend ni CMS

El formulario de cotización es solo UI y no envía a ningún lado.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # salida estática en dist/
```

### Notas para quien toque el código

- **Los tokens de diseño salen de [`DESIGN.md`](./DESIGN.md), no de `branding.json`.**
  Ese JSON es un scrape del sitio Elementor actual y su tipografía está rota
  (`h1: 14px` con `h2: 54px`). Solo se conservó de ahí el magenta de marca `#BC2559`,
  que es real: es el moño del logo y el tagline.
- **El acento magenta no es intercambiable entre fondos.** Sobre blanco da 5.94:1 (AA),
  pero sobre el grafito `ink-900` da 2.59:1 y falla. Para fondo oscuro existe
  `accent-on-dark` (#F2669A, 5.25:1).
- **Los links internos van por `localeUrl()` / `withBase()`** de `src/i18n/ui.ts`.
  El sitio se sirve bajo un subdirectorio en GitHub Pages, así que escribir
  `/en/products/` a mano funciona en local y rompe en producción.
- **No apliques clases de Tailwind desde JavaScript.** Tailwind v4 escanea el markup
  para generar el CSS y no ve los nombres de clase que solo existen dentro de un
  `<script>`: la clase entra al `classList` pero la regla nunca se emite.

## Licencia

Código bajo MIT. Las marcas, logo y contenido de D.T. Flow Wrap Machines pertenecen a
sus dueños y no están cubiertos por esa licencia.
