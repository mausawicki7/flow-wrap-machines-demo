# D.T. Flow Wrap Machines — Rediseño (Demo para propuesta Upwork)

## Contexto del proyecto

Este es un **demo especulativo** para aplicar a una propuesta de Upwork. El cliente real (D.T. Flow Wrap Machines, flow-wrap-machines.com) tiene un sitio WordPress/Elementor desactualizado y pide un rediseño completo + traducción al francés, manteniéndose en WordPress/Elementor como plataforma final.

**Este proyecto NO es el entregable final.** Es una maqueta funcional en Astro para mostrar en la propuesta: dirección de diseño, estructura de contenido y approach de i18n. Si el cliente contrata, la implementación real se hace en WordPress/Elementor (o se negocia migrar a Astro si el cliente lo prefiere al verlo). Por eso:
- No hace falta backend real, formulario funcional, ni CMS.
- Sí tiene que verse e navegarse como un sitio productivo real, con contenido verídico de la empresa (no lorem ipsum).
- Tiene que ser rápido de construir (estamos priorizando 1-2 páginas fuertes bien hechas por sobre 6 páginas mediocres).

## Objetivo del sitio

Modernizar la imagen de una empresa industrial B2B de maquinaria de empaquetado (flow-wrap horizontal, VFFS) con base en Ontario y Québec, mostrando:
1. Que puede vender a nivel B2B/industrial (No se ve amateur/WordPress-template-default)
2. Rango completo de productos actual (no solo 3 máquinas viejas del sitio actual)
3. Testimonios reales con peso (9+ testimonios ya existentes)
4. Contenido en video (canal de YouTube activo)
5. Bilingüe EN/FR desde el día uno (mercado de Québec)

## Stack técnico

- **Astro** (SSG, output estático) — liviano, rápido, ideal para demo y para portfolio
- **Tailwind CSS** para estilos
- **Astro Content Collections** para productos, testimonios y videos (facilita mostrarle al cliente que el contenido está estructurado y es fácil de expandir/traducir)
- Sin backend, sin base de datos. Formulario de cotización es solo UI (no submitea a ningún lado en el demo)
- Imágenes: usar las URLs reales del sitio actual como placeholder (están linkeadas abajo) mientras no tengamos assets de mayor resolución del cliente

## Identidad de la empresa (contenido real — usar tal cual, no inventar)

**Nombre:** D.T. Flow Wrap Machines
**Sitio actual:** https://flow-wrap-machines.com/
**Fundada:** 2020
**Qué hacen:** Especialistas en maquinaria de empaquetado horizontal (flow-wrap/HFFS) y vertical (VFFS). Importan máquinas de proveedores selectos en Asia y las mejoran con tecnología norteamericana y alemana en su propia planta. Más de 50 modelos, certificación CE, 100,000 sq ft de instalaciones, 3 talleres.

**Ubicaciones:**
- Ontario (HQ): 72 Stonechurch Rd. W. Unit #66, Hamilton, Ontario L9B 2H8 — Tel: 647 372-0005
- Québec: 392 Dorval Ave. Suite #154, Dorval, QC H9S 3H7 — Tel: 514 703-3542
- USA: 11320 U.S. 9 #102511, Champlain, NY 12919

**Contacto:** info@flow-wrap-machines.com

**Redes:**
- YouTube: youtube.com/@flowwrapmachines
- Instagram: instagram.com/flow_wrap_machines
- TikTok: @dtflowwrap

**Logo actual (placeholder):** https://flow-wrap-machines.com/wp-content/uploads/2025/09/Logo_DT-1536x412.jpg

## Dirección de diseño

El sitio actual es genérico-Elementor: fuente por defecto, layout de columnas 50/50 repetitivo, sin jerarquía visual fuerte, testimonios en carrusel básico. La propuesta de rediseño:

- **Paleta:** base gris grafito/acero (#1E2530, #2D3542) + blanco/gris claro para contenido, con un acento en **ámbar/naranja industrial** (#F5A623 o similar) para CTAs y detalles — transmite maquinaria/industria sin caer en "corporativo genérico azul". (Evaluar variación con azul acero #2C5F7C si el ámbar choca con el logo actual, hay que confirmarlo al ver el logo real en alta resolución.)
- **Tipografía:** un sans-serif técnico e industrial para headings (ej. Archivo, Space Grotesk o similar — nada de fuentes redondeadas/friendly) + un sans-serif legible para body (Inter).
- **Tono visual:** confianza técnica, no "granja artesanal". Fotos de máquinas grandes, video del producto funcionando (ya tienen un video hosteado en el home actual), números concretos (50+ modelos, 100,000 sq ft, certificación CE) como proof points visuales tipo stat-bar.
- Evitar el look "template de Elementor" a toda costa: nada de iconos genéricos de flaticon, nada de columnas 50/50 repetidas sección tras sección.

## Estructura de páginas

### 1. Home
- Hero: video de producto (usar el mp4 actual como placeholder: https://flow-wrap-machines.com/wp-content/uploads/2025/02/202502031217.mp4) + headline fuerte + CTA "Get a Quote"
- Stat bar: 50+ modelos / 100,000 sq ft / CE-certified / Ontario & Québec
- Resumen de líneas de producto (grid de 6, ver abajo) con link a página de Productos
- Selección de 3-4 testimonios destacados
- Preview de 2-3 videos de YouTube
- CTA final a Get a Quote

### 2. Productos (expandir el scope actual)
El sitio actual solo muestra 3 máquinas (Horizontal Packing Machine, Muffin Packing Machine, Bars & Cookies Machine). La propuesta pide expandir a 6 categorías — para el demo, armar 6 tarjetas de producto con la info que si tenemos (real) y placeholders razonables donde no:

1. **Horizontal Flow-Wrap Machines** — contenido real disponible (packing de bars, cookies, candies, nuts, chocolate, chewing gum, breadsticks, lollipops, dry baked goods, soap bars, pencils, promotional items)
2. **Vertical (VFFS) Machines** — mencionado en el sitio actual ("including VFFS and large vertical options") pero sin página propia — usar como oportunidad de mostrar cómo se vería expandido
3. **Roll Film Systems** — no hay contenido actual, usar placeholder de texto genérico de industria + marcar `<!-- CONTENT NEEDED FROM CLIENT -->`
4. **Stand-up Bag Machines** — mismo caso, placeholder
5. **Box/Carton Packing** — mismo caso, placeholder
6. **Carry Card Packaging** — mismo caso, placeholder

Para los 3 productos con contenido real, también hay videos de YouTube reales para vincular (ver sección Videos).

### 3. Servicios (página nueva, no existe en el sitio actual)
Instalación, capacitación, soporte post-venta, configuración a medida. No hay contenido real del cliente para esto — usar estructura de 4 tarjetas de servicio con copy genérico de industria pero bien escrito, marcado con comentario de que se debe validar con el cliente.

### 4. Testimonios (página nueva — actualmente es un carrusel en el home)
Usar los 9 testimonios reales, completos, con nombre/empresa/ciudad:

1. "It used to take us 5 times as long to package our maple syrup cookies, now we do it in 45 minutes." — Hughes, Maple Syrup Company, Eastern Townships, Qc.
2. "Our candies are now finally professionally packed and we are taken more serious by our clients, thanks DT." — Craig & Carol, Lollipop company, Brossard, Qc.
3. "Very good machine and service for the money, thanks guys!" — Carlos, Gourmet chocolate Co., Toronto, On.
4. "Good value, easy to use machine, good service." — Robert, Dental supply company, Seattle, WA.
5. "New revenue stream for our bakery business now because of our packaged snacks, reliable easy to use machine." — André, Bakery, Québec City, Qc.
6. "Easy to use machine, good service and support." — Sean, Bread stick company, Toronto, On.
7. "Thank you guys for helping me speed up my packaging, good machine, user friendly, we also pack our product now in printed film!" — Gina, Snack bar Company, Montreal, Qc.
8. "Packaging is actually fun now, we look forward to packing our merchandise, good machine and value, timely service." — Brad, Gourmet Snack company, Anjou, Qc.
9. "Our productivity has increased significantly with the same employees; reliable machine, economical with good service" — Pierre, Industrial Bakery, Laval, Qc.

Diseñar como grid de tarjetas (no carrusel — para B2B es mejor mostrar peso/cantidad de una), con ciudad destacada (refuerza presencia Ontario+Québec).

### 5. Videos (página nueva, jala del canal de YouTube)
Videos reales confirmados en el canal @flowwrapmachines:
- "T-250 2 Mini muffin horizontal packaging machine" — youtu.be/0ARSG3dy8jU
- "T-350 Ciabatta bread packaging machine" — youtube.com/watch?v=378n_XhFVzI
- "T-V600X Horizontal Vegetable Packaging Machine" — youtube.com/watch?v=WYWpOF2Nx6o

Para el demo, embeber estos 3 reales en grid + dejar 2-3 slots más con placeholder "more videos on our YouTube channel" con link al canal.

### 6. Get a Quote (mejorar el form actual)
El form actual (Elementor) pide: Name, Phone, Email, Address, Postal Code, City, Country, "What are you looking to pack?", Item Food/Non Food, Packaging Material, Electric Eye Required, Additional Information. Es un form largo tipo B2B — está bien, pero se puede mejorar UX dividiéndolo en pasos (1. Sobre tu producto, 2. Sobre tu empresa, 3. Contacto) o con mejor jerarquía visual. Para el demo: UI completa, sin submit real (mostrar estado de "Thank you" simulado en el cliente).

## i18n — Enfoque de traducción francesa (esto es parte de lo que hay que mostrar en la propuesta)

Usar el **i18n router nativo de Astro** (`astro:i18n`) como demo del approach técnico, aunque en la implementación final en WordPress se recomendaría Polylang (más liviano que WPML para este tamaño de sitio, mejor relación costo/rendimiento para una empresa que no necesita e-commerce multi-moneda).

- Rutas `/en/` y `/fr/` con contenido separado en Content Collections (`src/content/en/` y `src/content/fr/`)
- Traducir al francés SOLO 1-2 páginas para el demo (Home + Productos) — el resto puede quedar en inglés con nota de "traducción completa incluida en el proyecto final"
- Selector de idioma visible en el header (EN/FR)
- Mencionar en la propuesta: mantener SEO por idioma (hreflang tags, URLs limpias por idioma, meta tags traducidos) — esto es parte de lo que piden en "on-page SEO cleanup"

## Fuera de alcance para este demo

- Backend/CMS real
- Envío funcional del formulario de cotización
- Traducción completa de las 6 páginas (alcanza con Home + Productos en FR para probar el approach)
- Contenido real de Roll Film / Stand-up Bag / Box-Carton / Carry Card (no existe en el sitio actual — usar placeholders marcados claramente)
- Optimización de imágenes de alta resolución (las imágenes actuales del cliente son de 2020, baja calidad — está bien para demo, se resolvería con brand assets reales si se gana el proyecto)

## Notas para Claude Code

- Priorizar Home + Productos + Testimonios — son las páginas donde el contenido real es más fuerte y donde más se nota el salto de calidad vs. el sitio actual.
- Servicios y Videos pueden ser más simples/rápidas de construir.
- Usar comentarios `<!-- PLACEHOLDER: content needed from client -->` en cualquier sección sin contenido real, para que quede claro en el código qué es real y qué es propuesta.
- El objetivo es tener algo deployable (Vercel/Netlify) con un link para incluir en la propuesta de Upwork — no hace falta que esté 100% pulido, pero SÍ tiene que verse profesional en el 90% del recorrido principal (home → producto → testimonios).
