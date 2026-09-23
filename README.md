# Jorge Morcillo Jareño — web profesional

Web profesional y editorial de Jorge Morcillo Jareño construida con Astro.

La literatura constituye el eje principal del sitio. La docencia de Lengua Castellana y Literatura, el periodismo y la trayectoria en comunicación aportan contexto a una identidad pública centrada en la escritura.

## Stack

- Astro 7.3.2
- TypeScript / ESM
- Astro Content Collections + Zod
- HTML semántico
- CSS propio
- npm
- Node 24 en CI
- Git + GitHub
- GitHub Actions
- GitHub Pages

## Puesta en marcha

En PowerShell puede usarse `npm.cmd` si la política de ejecución bloquea `npm.ps1`:

```powershell
npm.cmd install
npm.cmd run dev
```

Build y previsualización de producción:

```powershell
npm.cmd run build
npm.cmd run preview
```

## Arquitectura pública actual

S4.3 mantiene una arquitectura compacta y convierte la Home en la pieza principal de navegación.

La navegación visible es:

```text
Inicio        → /
Libros        → /#libros
Sobre Jorge   → /#autor
Prensa        → /prensa/
Contacto      → /contacto/
```

La Home reúne:

1. Hero editorial con retrato.
2. Los dos libros publicados.
3. Presentación biográfica breve.
4. Prensa destacada.
5. Agenda, únicamente cuando existan eventos publicables.
6. Contacto profesional.

Se conservan las rutas `/libros/`, `/autor/`, `/prensa/` y `/contacto/` para ampliar información cuando aporta profundidad.

Las fichas individuales de libros regresan al bloque `/#libros` de la Home. El menú marca `Libros` como sección activa dentro de las rutas `/libros/...`, y mantiene activos `Prensa` y `Contacto` en sus páginas independientes.

## Modelo de contenido

Existen tres colecciones validadas durante el build:

- `libros`: obra publicada.
- `prensa`: cobertura, entrevistas y apariciones sobre Jorge o sus libros.
- `eventos`: encuentros, presentaciones, firmas, charlas, talleres y ferias.

Las colecciones comparten reglas para imágenes locales, enlaces, fuentes y verificación. Los estados disponibles son `externa`, `directa`, `mixta` y `pendiente`.

## Contenido publicado actualmente

### Libros

- `Cuentos valencianos para compartir` (2024).
- `Mi padre es un Millennial` (2026).

Las portadas viven localmente bajo `public/assets/img/libros/`. En listados se muestran mediante un mockup editorial cuyo grosor se calcula a partir del número de páginas; en las fichas se utiliza la portada frontal completa.

### Archivo de prensa

S6 amplía la colección a 19 referencias estructuradas:

- 12 piezas de prensa, entrevistas, perfiles y cobertura cultural.
- 7 fichas editoriales, plataformas y referencias de recepción de lectores.

La Home mantiene como destacados Agencia EFE, Levante-EMV y Europa Press. La página `/prensa/` separa la cobertura periodística de las referencias editoriales y de plataforma.

### Retrato editorial

S4.3 añade un retrato local para la cabecera de la Home bajo `public/assets/img/autor/`.

## Dirección visual actual

La base visual utiliza:

- fondo cálido tipo papel;
- serif editorial para titulares;
- sans del sistema para interfaz y cuerpo;
- márgenes amplios y líneas finas;
- cabecera sticky con navegación híbrida: anclas para Libros/Sobre Jorge y páginas propias para Prensa/Contacto;
- hero con retrato editorial;
- foco visible y soporte para `prefers-reduced-motion`.

La identidad gráfica definitiva y los recursos específicos de cada universo literario se desarrollarán en slices posteriores.


## Página de autor

S5 convierte `/autor/` en una biografía editorial completa. La página presenta primero a Jorge como escritor y conecta esa identidad actual con su docencia, su etapa periodística y su experiencia en comunicación y cultura. El recorrido evita una cronología exhaustiva cuando no existen fechas verificadas y no incorpora referencias a obra todavía no publicada.


## Página de contacto

S7.1 simplifica `/contacto/` a una página directa y publicable. El canal provisional de contacto profesional es `jorge.morcillo@tomasmorcillo.com`, centralizado en `src/lib/site.ts` para poder sustituirlo fácilmente más adelante. La Home enlaza directamente a ese correo y la página de Contacto conserva únicamente una presentación breve, el correo y accesos al resto del sitio.

## Configuración pendiente

Aún no se fijan `site`, `base` ni `CNAME` porque dependen del repositorio y dominio definitivos.

## Estado de implementación

- S0 — Arranque técnico: completado.
- S1 — Arquitectura de información y rutas: completado.
- S2 — Content Collections y modelo de datos: completado.
- S3 — Layout global, SEO y base visual: completado.
- S4 — Libros publicados y páginas de detalle: completado.
- S4.1 — Portadas y mockups editoriales: completado.
- S4.2 — Home editorial y simplificación de arquitectura: completado.
- S4.3 — Cabecera sticky, navegación por bloques y retrato editorial: completado.
- S4.3.1 — Ajuste de proporción y recorte del retrato del hero: completado.
- S4.3.2 — Navegación híbrida y retorno de fichas a Home: completado.
- S5 — Autor / biografía ampliada: completado.
- S6 — Prensa completa y referencias editoriales: completado.
- S7 — Contacto profesional: completado.
- S7.1 — Contacto simplificado con correo provisional: completado.
- S8 — QA visual, responsive y accesibilidad global: completado.

## Estado S6

La colección de prensa distingue ahora entre `prensa` y `plataformas`. `/prensa/` muestra por separado cobertura periodística/entrevistas y fichas editoriales, plataformas y recepción de lectores. La Home continúa usando únicamente las apariciones marcadas como destacadas dentro de la cobertura periodística.

## S8 · QA visual y responsive

S8 unifica el comportamiento visual de Home, Autor, Prensa, Contacto y fichas de libro. Ajusta la cabecera sticky en tablet/móvil, targets táctiles, offsets de anclas y elementos sticky, escalado tipográfico, grids y tarjetas, y añade refinamientos para 920, 820, 680 y 480 px.

Mientras la web siga en prepublicación, `site.indexingEnabled` permanece en `false`: el layout emite `noindex, nofollow` por defecto para evitar indexación accidental. Se activará de forma centralizada al preparar producción.

## Validación por slice

```powershell
npm.cmd run build
npm.cmd run preview
```
