# Jorge Morcillo Jareño — web profesional

Sitio web profesional y editorial de **Jorge Morcillo Jareño**, escritor valenciano, profesor de Lengua Castellana y Literatura y periodista.

La web está concebida principalmente como **sitio de autor**: presenta su obra publicada, trayectoria, apariciones en medios, talleres y vías de contacto. La docencia, el periodismo y la comunicación aportan contexto a una identidad pública cuyo eje principal es la literatura.

**Dominio canónico:** https://jorgemorcillo.com

---

## Objetivos del proyecto

- Presentar de forma clara y editorial la obra publicada de Jorge Morcillo.
- Facilitar la compra y descubrimiento de sus libros.
- Reunir cobertura de prensa, entrevistas y referencias editoriales verificadas.
- Ofrecer talleres, encuentros con lectores y actividades para centros educativos, bibliotecas y entidades culturales.
- Mantener una biografía profesional actualizada y bien estructurada.
- Favorecer el posicionamiento orgánico de la web sin recurrir a textos artificiales ni *keyword stuffing*.
- Servir como fuente pública y estable sobre la trayectoria y publicaciones del autor.

---

## Stack

- **Astro 7**
- **TypeScript / ESM**
- **Astro Content Collections**
- **Zod** para validación de contenido
- **HTML semántico**
- **CSS propio**, sin framework visual
- JavaScript cliente únicamente cuando aporta funcionalidad real
- **npm**
- **Node 24** en CI
- **GitHub Actions**
- **GitHub Pages**

El sitio se genera de forma estática.

---

## Puesta en marcha

### Requisitos

- Node.js compatible con el proyecto
- npm

Instalación:

```bash
npm install
```

Desarrollo local:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

Previsualización del build:

```bash
npm run preview
```

### Windows / PowerShell

Si la política de ejecución de PowerShell bloquea `npm.ps1`, pueden utilizarse directamente los ejecutables `.cmd`:

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run preview
```

---

## Arquitectura pública

La Home funciona como puerta de entrada editorial y concentra los contenidos principales. Las secciones con mayor profundidad disponen de ruta propia.

```text
/                 Inicio
/libros/           Libros
/libros/[id]/      Ficha individual de cada libro
/autor/            Biografía ampliada
/talleres/         Talleres y contratación
/prensa/           Prensa y referencias editoriales
/contacto/         Contacto profesional
/sitemap.xml       Sitemap generado
/robots.txt        Directivas para buscadores
```

La navegación principal combina anclas de la Home con páginas independientes.

---

## Secciones principales

### Libros

Actualmente se publican las fichas de:

- **Cuentos valencianos para compartir** — Erizo Blanco, 2024.
- **Mi padre es un Millennial** — Erizo Blanco, 2026.

Las fichas incluyen información editorial, sinopsis ampliada, contexto temático, enlaces de compra, metadatos SEO y galería de imágenes interiores.

Las portadas son clicables y permiten acceder a la galería. Las imágenes interiores se muestran inicialmente como miniaturas y pueden ampliarse mediante un *lightbox* accesible.

### Autor

`/autor/` presenta una biografía editorial que conecta cuatro ámbitos de la trayectoria de Jorge:

- escritura;
- docencia;
- periodismo;
- comunicación y cultura.

La literatura tiene prioridad narrativa sobre el resto del recorrido profesional.

### Talleres

`/talleres/` está orientada a contratación por parte de centros educativos, bibliotecas, librerías, clubes de lectura y entidades culturales.

Incluye actualmente:

- encuentro con el autor;
- taller de lectura y mural basado en *Cuentos valencianos para compartir*;
- taller sobre cultura millennial y tecnología vintage basado en *Mi padre es un Millennial*;
- taller de periodismo para Secundaria.

Cada propuesta especifica **duración, desarrollo y objetivo** y dispone de una llamada a la acción para solicitarla por correo electrónico.

### Prensa

`/prensa/` diferencia dos tipos de referencias:

1. **Prensa, entrevistas y cobertura cultural**.
2. **Editoriales, librerías, plataformas y recepción de lectores**.

Las entradas enlazan siempre a la fuente original cuando existe una URL verificable.

### Contacto

La página de contacto centraliza los canales profesionales publicados actualmente:

- correo electrónico: `jorge.morcillo@tomasmorcillo.com`;
- Instagram: `@bomt1986`.

Estos datos se mantienen centralizados en `src/lib/site.ts`.

---

## Modelo de contenido

El contenido estructurado vive en Astro Content Collections.

### `libros`

Contiene la obra publicada y sus datos editoriales, imágenes, enlaces externos, temas, metadatos SEO y galería.

### `prensa`

Contiene apariciones en medios, entrevistas, perfiles, fichas editoriales y referencias de recepción.

La colección diferencia la cobertura periodística de las plataformas editoriales para evitar mezclar categorías con finalidades distintas.

### `eventos`

Está preparada para presentaciones, firmas, encuentros, charlas, talleres, ferias y otras actividades publicables.

Las colecciones se validan durante el build mediante Zod.

---

## Estructura del proyecto

```text
.
├── public/
│   ├── assets/
│   │   └── img/
│   │       ├── autor/
│   │       ├── brand/
│   │       ├── contacto/
│   │       ├── libros/
│   │       ├── prensa/
│   │       └── talleres/
│   ├── CNAME
│   └── robots.txt
├── src/
│   ├── components/
│   ├── content/
│   │   ├── eventos/
│   │   ├── libros/
│   │   └── prensa/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── content.config.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Configuración global

Los datos comunes del sitio se mantienen en `src/lib/site.ts`.

Entre otros:

- nombre público;
- descriptor profesional;
- dominio canónico;
- correo de contacto;
- Instagram;
- imagen social por defecto;
- logo;
- estado global de indexación.

Cuando un dato global cambie, debe modificarse ahí antes de duplicarlo en páginas o componentes.

---

## SEO

El sitio está preparado para publicarse como web indexable en `https://jorgemorcillo.com`.

Incluye:

- canonical absolutos;
- títulos y metadescripciones por página;
- Open Graph;
- Twitter Cards;
- `robots.txt`;
- sitemap generado;
- URLs estables con *trailing slash* coherente;
- JSON-LD para `WebSite`, `Person`, `Book` y `BreadcrumbList` cuando corresponde;
- imágenes sociales específicas en páginas relevantes;
- enlaces internos entre libros, autor, talleres y prensa.

### Criterio editorial SEO

El posicionamiento se trabaja mediante **contenido útil y semánticamente rico**, no mediante repetición artificial de palabras clave.

Las fichas de libros y talleres deben:

- responder a la intención real de búsqueda;
- explicar con claridad qué ofrece el libro o actividad;
- incorporar términos relevantes de forma natural;
- priorizar legibilidad y capacidad de conversión;
- evitar afirmaciones comerciales no demostrables.

---

## Datos estructurados y prensa externa

Las páginas propias de libros pueden utilizar marcado `Book`.

Las referencias de prensa enlazan artículos publicados en terceros. No deben marcarse como `Article` o `NewsArticle` propios de `jorgemorcillo.com`, porque la web no es la editora de esas piezas.

---

## Reglas editoriales y de verificación

El sitio distingue entre información aportada directamente por el autor y datos procedentes de fuentes externas.

Principios de mantenimiento:

- no inventar fechas, cargos, publicaciones, premios, eventos ni enlaces;
- enlazar la fuente original siempre que sea posible;
- no convertir una inferencia en un hecho publicado;
- conservar con precisión ISBN, títulos, editoriales, años y créditos de ilustración;
- separar prensa real de fichas de venta, plataformas y recepción de lectores;
- evitar copiar literalmente textos promocionales de terceros cuando una redacción propia sea suficiente;
- revisar cualquier dato dudoso antes de publicarlo.

### Obras no publicadas

**No deben añadirse a la web obras futuras o no publicadas sin autorización expresa.**

Esto incluye:

- páginas;
- teasers;
- placeholders;
- referencias indirectas;
- metadatos;
- sitemap;
- JSON-LD;
- imágenes promocionales.

La web pública debe reflejar únicamente material autorizado para publicación.

---

## Imágenes y recursos gráficos

Los recursos visuales se almacenan localmente bajo `public/assets/img/`.

Criterios generales:

- utilizar formatos optimizados para web cuando sea posible;
- emplear WebP en fotografías e imágenes pesadas cuando resulte adecuado;
- mantener texto alternativo útil en imágenes con contenido informativo;
- usar `alt=""` en elementos puramente decorativos;
- evitar dependencias de imágenes remotas para piezas esenciales del sitio;
- conservar las imágenes originales fuera del flujo público si no son necesarias para producción.

La identidad visual utiliza una estética editorial cálida, fondo tipo papel, serif para titulares y una paleta sobria vinculada al territorio, la literatura y el aula.

---

## Accesibilidad y responsive

La interfaz está diseñada para funcionar desde móvil hasta escritorio y contempla:

- HTML semántico;
- enlace de salto al contenido;
- foco visible;
- objetivos táctiles adecuados;
- navegación responsive;
- control de *overflow* horizontal;
- `prefers-reduced-motion`;
- jerarquía tipográfica adaptable;
- galerías navegables mediante teclado.

Cualquier cambio visual debe comprobarse al menos en móvil, tablet y escritorio.

---

## Despliegue

El proyecto está preparado para desplegarse mediante GitHub Actions y GitHub Pages.

- dominio: `jorgemorcillo.com`;
- `public/CNAME` contiene el dominio personalizado;
- `astro.config.mjs` utiliza el mismo dominio como `site`;
- la indexación global está activada para producción.

El workflow se encuentra en:

```text
.github/workflows/deploy.yml
```

Antes de publicar cambios importantes conviene ejecutar:

```bash
npm run build
npm run preview
```

---

## Checklist antes de publicar

- El build termina sin errores.
- No hay referencias a contenido no autorizado.
- Las URLs externas relevantes responden correctamente.
- Las nuevas imágenes tienen tamaño razonable y `alt` correcto.
- Cada página tiene un único `h1` coherente.
- Título y metadescripción son específicos de la página.
- Los canonical utilizan `https://jorgemorcillo.com`.
- `robots.txt` permite indexación.
- `sitemap.xml` contiene las rutas públicas esperadas.
- No se han añadido secretos, credenciales ni archivos locales al repositorio.
- La navegación y las galerías funcionan con teclado y en móvil.

---

## Flujo recomendado para nuevas publicaciones

Al incorporar un libro, aparición en medios o evento nuevo:

1. Verificar los datos y las fuentes.
2. Añadir el contenido a la colección correspondiente.
3. Añadir y optimizar los recursos gráficos locales.
4. Revisar enlaces internos y externos.
5. Completar metadatos SEO cuando proceda.
6. Ejecutar el build.
7. Revisar la página en `preview` antes de publicar.

El objetivo es que la web pueda crecer principalmente mediante contenido estructurado y no mediante páginas duplicadas o datos incrustados en componentes.

---

## Convenciones de desarrollo

- Mantener contenido y presentación separados.
- Reutilizar componentes antes de duplicar markup.
- Centralizar configuración global.
- Mantener JavaScript cliente al mínimo.
- No añadir una dependencia si la plataforma o CSS resuelven el problema de forma razonable.
- Preferir mejoras pequeñas y verificables frente a refactors amplios sin necesidad.
- El build debe seguir siendo una validación efectiva del contenido.

---

## Licencia y contenido

Este repositorio no declara actualmente una licencia abierta de reutilización.

Los textos, fotografías, ilustraciones, portadas y demás materiales editoriales o gráficos pertenecen a sus respectivos autores y titulares de derechos y no deben considerarse contenido de libre uso por el hecho de estar incluidos en un repositorio público.
