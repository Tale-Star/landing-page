# Tale Star Landing Page

Landing page pública de Tale Star construida con Vue 3, TypeScript, Vite y `<script setup lang="ts">`. Presenta la propuesta de valor a padres, cuidadores y docentes, y lleva a cada segmento a la Web App o a la app móvil (US91–US96). Está separada de la Web App (CT04) y comparte con ella los tokens visuales de `src/styles/tokens.css`.

Diseño de referencia: [Figma — Tale Star Landing Page](https://www.figma.com/design/9N8xyYoj4Enr7pB6jDBMAW/Tale-Star-%E2%80%94-Landing-Page) y sección 6.3 del informe en [Tale-Star/docs](https://github.com/Tale-Star/docs).

## Instalación

Requiere Node.js 22 o compatible con Vite 6.

```sh
npm install
```

Los destinos públicos son opcionales hasta que la Web App y la aplicación móvil tengan una URL publicada. Configura `VITE_WEB_APP_URL` con la URL base de [Tale Star Web](https://github.com/Tale-Star/frontend-web), sin `/` final; los botones de acceso añaden `/login` o `/register`. Configura `VITE_MOBILE_APP_URL` con el enlace oficial de descarga cuando exista una versión móvil. En desarrollo, la Web App usa `http://127.0.0.1:5173` por defecto. En producción, las URLs ausentes o locales no generan enlaces: los CTA correspondientes se muestran como *Próximamente*.

## Desarrollo local

```sh
npm run dev
```

Vite sirve la landing en `http://127.0.0.1:5174`. El puerto 5173 queda libre para la Web App.

## Secciones

| Componente | Contenido | Historia |
|---|---|---|
| `LandingNavbar` | Logo, anclas a las secciones, *Iniciar sesión* y *Crear cuenta*. Menú hamburguesa en mobile | US95 |
| `HeroSection` | Propuesta de valor y un CTA por segmento | US91 |
| `ProblemsSection` | Problemas que resuelve el producto | US91 |
| `SegmentsSection` | Padres y cuidadores / Docentes, cada uno con su CTA | US92, US93 |
| `FeaturesSection` | Imágenes, Cuentos, Música, Biblioteca y Cuentos en AR | US94 |
| `StepsSection` | Configura, Genera, Revisa y ajusta, Guarda y reutiliza | US94 |
| `MobileAppSection` | Lectura de cuentos y AR en la app móvil | US96 |
| `FinalCtaSection` | *Usar la app web* / *Descargar la app móvil* | US95, US96 |
| `LandingFooter` | Enlaces de producto, segmentos y cuenta | — |

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que valida con ESLint, compila y publica `dist/` en GitHub Pages. Requiere activar **Settings → Pages → Source: GitHub Actions** una sola vez.

Para habilitar los destinos de los CTA en producción sin tocar código, define `VITE_WEB_APP_URL` y `VITE_MOBILE_APP_URL` con sus URLs públicas en **Settings → Secrets and variables → Actions → Variables** y vuelve a ejecutar el workflow. La configuración ignora URLs locales en el build de producción.

## Comprobaciones

```sh
npm run lint
npm run build
```
