import type { APIRoute } from 'astro';
import { getPublishedBooks } from '../lib/content';
import { absoluteUrl } from '../lib/seo';

const staticRoutes = ['/', '/libros/', '/autor/', '/talleres/', '/prensa/', '/contacto/'];

export const GET: APIRoute = async () => {
  const books = await getPublishedBooks();
  const routes = [
    ...staticRoutes,
    ...books.map((book) => `/libros/${book.id}/`)
  ];

  const urls = [...new Set(routes)]
    .map((route) => `  <url>\n    <loc>${absoluteUrl(route)}</loc>\n  </url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
