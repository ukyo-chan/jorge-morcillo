import type { LibroEntry } from './content';
import { site } from './site';

export type StructuredData = Record<string, unknown>;

export function absoluteUrl(path = '/'): string {
  return new URL(path, `${site.url}/`).toString();
}

export function websiteStructuredData(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    url: absoluteUrl('/'),
    name: site.name,
    description: site.descriptor,
    inLanguage: site.language,
    publisher: {
      '@id': `${absoluteUrl('/autor/')}#person`
    }
  };
}

export function personStructuredData(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${absoluteUrl('/autor/')}#person`,
    name: site.name,
    url: absoluteUrl('/autor/'),
    image: absoluteUrl(site.defaultSocialImage),
    jobTitle: 'Escritor, profesor de Lengua Castellana y Literatura y periodista',
    description:
      'Escritor valenciano, profesor de Lengua Castellana y Literatura y periodista, nacido en València y criado en Alboraya.',
    sameAs: [site.instagramUrl]
  };
}

export function breadcrumbStructuredData(
  items: Array<{ name: string; path: string }>
): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function bookStructuredData(book: LibroEntry): StructuredData {
  const url = absoluteUrl(`/libros/${book.id}/`);

  const data: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${url}#book`,
    name: book.data.titulo,
    url,
    description: book.data.resumen,
    inLanguage: site.language,
    datePublished: String(book.data.anio),
    author: {
      '@id': `${absoluteUrl('/autor/')}#person`,
      '@type': 'Person',
      name: site.name,
      url: absoluteUrl('/autor/')
    },
    publisher: {
      '@type': 'Organization',
      name: book.data.editorial
    },
    mainEntityOfPage: url
  };

  if (book.data.isbn) {
    data.isbn = book.data.isbn;
  }

  if (book.data.paginas) {
    data.numberOfPages = book.data.paginas;
  }

  if (book.data.imagenPrincipal) {
    data.image = absoluteUrl(book.data.imagenPrincipal.src);
  }

  if (book.data.ilustradores.length > 0) {
    data.illustrator = book.data.ilustradores.map((name) => ({
      '@type': 'Person',
      name
    }));
  }

  if (book.data.claves.length > 0) {
    data.keywords = book.data.claves.join(', ');
  }

  return data;
}
