import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Estructura pensada para i18n desde el día uno.

  Cada colección barre `<coleccion>/<locale>/*.md`, así que el `id` de cada entrada
  queda como "en/horizontal-flow-wrap" — el locale es el primer segmento de la ruta.
  Agregar francés es copiar el archivo a fr/ y traducirlo: no hay que tocar ni el
  schema ni las páginas. Eso es exactamente lo que hay que poder mostrarle al cliente.
*/

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum([
      'horizontal',
      'vertical',
      'roll-film',
      'stand-up-bag',
      'box-carton',
      'carry-card',
    ]),
    image: z.string().optional(),
    videoUrl: z.string().url().optional(),
    // true = el sitio actual no tiene contenido para esto; es propuesta, no dato real.
    contentNeeded: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    company: z.string(),
    city: z.string(),
    // Ontario / Québec / estado de USA — refuerza la presencia regional.
    province: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string(),
    url: z.string().url(),
    machineModel: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { products, testimonials, videos };
