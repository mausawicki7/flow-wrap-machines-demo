# Design tokens — D.T. Flow Wrap Machines

Fuente de verdad para el rediseño. Deriva del **logo real** (verificado en alta res),
no de `branding.json` (que es un scrape del sitio Elementor actual y está roto).

## Qué se descarta de branding.json y por qué

| Campo scrapeado | Decisión | Motivo |
|---|---|---|
| `fonts: Roboto / Raleway / Poppins` | Descartar | Tres fuentes sin jerarquía, una con rol `unknown`. Defaults de Elementor. |
| `fontSizes: h1 14px, h2 54px` | Descartar | Scrape defectuoso: h1 más chico que el body. No es una escala. |
| `link: #69727D` | Descartar | Gris default de Elementor. |
| `textPrimary: #000000` | Ajustar | Negro puro. Se reemplaza por rampa grafito. |
| `primary/accent: #BC2559` | **Conservar** | Equity real: es el moño del logo y el tagline. |
| `borderRadius: 2-3px` | Conservar | Esquinas casi rectas, coherente con lo industrial. |

## Logo (ground truth)

Disco grafito con monograma "D", aro magenta que se resuelve en un **moño de regalo**.
Tagline: *"Pack anything beautifully"*.

Dos consecuencias de diseño:
1. El grafito del disco ya coincide con la base #1E2530/#2D3542 propuesta en CLAUDE.md.
2. El moño + el tagline posicionan el empaque como **presentación**, no solo throughput.
   Usar arcos/curvas magenta finas como motivo de sección — nunca iconos genéricos.

## Paleta

```
--ink-900   #1E2530   base grafito (matchea el disco del logo)
--ink-800   #2D3542   superficie elevada sobre oscuro
--ink-600   #4A5566   texto secundario sobre claro
--accent    #BC2559   magenta de marca — CTAs, detalles
--accent-hi #CC3366   hover / estado activo
--accent-on-dark #F2669A  ver nota de contraste
--surface   #FFFFFF
--surface-2 #F8F8F8
```

### Nota de contraste (importante)

- `#BC2559` sobre blanco = **5.94:1** → AA para texto normal. OK.
- `#BC2559` sobre `#1E2530` = **2.59:1** → **falla**. En secciones oscuras el magenta
  sirve solo como relleno gráfico o display grande, nunca para texto chico.
- `#F2669A` sobre `#1E2530` = **5.25:1** → AA. Es el token de acento para fondo oscuro.

El hero es oscuro, así que esta distinción se aplica desde la primera sección.

## Tipografía

- Headings: **Archivo** — sans técnico/industrial, según dirección de CLAUDE.md.
- Body: **Inter**.
- Se descartan las tres fuentes del scrape.

## Geometría

Radio 2-4px (casi recto). Unidad base de espaciado: 4px.
