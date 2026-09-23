export const site = {
  name: 'Jorge Morcillo Jareño',
  descriptor: 'Escritor valenciano · Profesor de Lengua Castellana y Literatura · Periodista',
  shortDescriptor: 'Escritor · Profesor · Periodista',
  language: 'es',
  locale: 'es_ES',
  contactEmail: 'jorge.morcillo@tomasmorcillo.com'
} as const;

export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Libros', href: '/#libros' },
  { label: 'Sobre Jorge', href: '/#autor' },
  { label: 'Prensa', href: '/prensa/' },
  { label: 'Contacto', href: '/contacto/' }
] as const;

export type NavigationItem = (typeof navigation)[number];
