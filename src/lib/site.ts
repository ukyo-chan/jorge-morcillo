export const site = {
  name: 'Jorge Morcillo Jareño',
  descriptor: 'Escritor valenciano · Profesor de Lengua Castellana y Literatura · Periodista',
  shortDescriptor: 'Escritor · Profesor · Periodista',
  language: 'es',
  locale: 'es_ES',
  url: 'https://jorgemorcillo.com',
  contactEmail: 'jorge.morcillo@tomasmorcillo.com',
  instagramHandle: '@bomt1986',
  instagramUrl: 'https://www.instagram.com/bomt1986/',
  defaultSocialImage: '/assets/img/autor/jorge-morcillo-retrato-home.png',
  indexingEnabled: true
} as const;

export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Libros', href: '/#libros' },
  { label: 'Sobre Jorge', href: '/#autor' },
  { label: 'Talleres', href: '/talleres/' },
  { label: 'Prensa', href: '/prensa/' },
  { label: 'Contacto', href: '/contacto/' }
] as const;

export type NavigationItem = (typeof navigation)[number];
