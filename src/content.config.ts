import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localImageSchema = z.object({
  src: z
    .string()
    .startsWith('/assets/img/', 'Las imágenes públicas deben vivir bajo /public/assets/img/.'),
  alt: z.string().trim().min(1, 'Toda imagen necesita un texto alternativo.'),
  pie: z.string().trim().min(1).optional(),
  credito: z.string().trim().min(1).optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional()
});

const externalLinkSchema = z.object({
  texto: z.string().trim().min(1),
  url: z.string().url()
});

const sourceSchema = z.object({
  nombre: z.string().trim().min(1),
  url: z.string().url().optional()
});

const verificationSchema = z.object({
  estado: z.enum(['externa', 'directa', 'mixta', 'pendiente']),
  notas: z.string().trim().min(1).optional(),
  fuentes: z.array(sourceSchema).default([])
});

const seoSchema = z.object({
  title: z.string().trim().min(1).optional(),
  description: z.string().trim().min(1).optional()
});

const sortableDateSchema = z
  .string()
  .regex(/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/, 'Usa YYYY, YYYY-MM o YYYY-MM-DD.');

const libros = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/libros'
  }),
  schema: z.object({
    titulo: z.string().trim().min(1),
    subtitulo: z.string().trim().min(1).optional(),
    anio: z.number().int().min(1900).max(2100),
    editorial: z.string().trim().min(1),
    isbn: z.string().trim().min(1).optional(),
    paginas: z.number().int().positive().optional(),
    estructura: z.string().trim().min(1).optional(),
    ilustradores: z.array(z.string().trim().min(1)).default([]),
    resumen: z.string().trim().min(1),
    claves: z.array(z.string().trim().min(1)).default([]),
    imagenPrincipal: localImageSchema.optional(),
    galeria: z.array(localImageSchema).default([]),
    enlaces: z.array(externalLinkSchema).default([]),
    verificacion: verificationSchema,
    seo: seoSchema.optional(),
    publicar: z.boolean().default(true),
    destacadoHome: z.boolean().default(false)
  })
});

const prensa = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/prensa'
  }),
  schema: z.object({
    titulo: z.string().trim().min(1),
    fechaOrden: sortableDateSchema,
    fechaTexto: z.string().trim().min(1).optional(),
    medio: z.string().trim().min(1),
    programa: z.string().trim().min(1).optional(),
    tipos: z
      .array(
        z.enum([
          'noticia',
          'entrevista',
          'reportaje',
          'perfil',
          'resena',
          'ficha',
          'recepcion',
          'radio',
          'television',
          'podcast',
          'otro'
        ])
      )
      .min(1),
    descripcion: z.string().trim().min(1),
    seccion: z.enum(['prensa', 'plataformas']).default('prensa'),
    url: z.string().url(),
    libroRelacionado: z.string().trim().min(1).optional(),
    imagen: localImageSchema.optional(),
    verificacion: verificationSchema,
    publicar: z.boolean().default(true),
    destacadoHome: z.boolean().default(false)
  })
});

const eventos = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/eventos'
  }),
  schema: z.object({
    titulo: z.string().trim().min(1),
    fechaInicio: sortableDateSchema,
    fechaFin: sortableDateSchema.optional(),
    fechaTexto: z.string().trim().min(1).optional(),
    tipos: z
      .array(
        z.enum(['encuentro', 'presentacion', 'firma', 'charla', 'taller', 'feria', 'otro'])
      )
      .min(1),
    entidad: z.string().trim().min(1).optional(),
    lugar: z.string().trim().min(1).optional(),
    descripcion: z.string().trim().min(1),
    url: z.string().url().optional(),
    libroRelacionado: z.string().trim().min(1).optional(),
    imagen: localImageSchema.optional(),
    verificacion: verificationSchema,
    publicar: z.boolean().default(true),
    mostrarAgenda: z.boolean().default(true),
    mostrarAulasEncuentros: z.boolean().default(true),
    destacadoHome: z.boolean().default(false)
  })
});

export const collections = { libros, prensa, eventos };
