import { getCollection, type CollectionEntry } from 'astro:content';

export type LibroEntry = CollectionEntry<'libros'>;
export type PrensaEntry = CollectionEntry<'prensa'>;
export type EventoEntry = CollectionEntry<'eventos'>;

export async function getPublishedBooks(): Promise<LibroEntry[]> {
  const entries = await getCollection('libros', ({ data }) => data.publicar);

  return entries.sort((a, b) => {
    if (a.data.anio !== b.data.anio) {
      return b.data.anio - a.data.anio;
    }

    return a.data.titulo.localeCompare(b.data.titulo, 'es');
  });
}

export async function getFeaturedBooks(): Promise<LibroEntry[]> {
  const entries = await getPublishedBooks();
  const featured = entries.filter(({ data }) => data.destacadoHome);

  return featured.length > 0 ? featured : entries.slice(0, 2);
}

export async function getPublishedPress(): Promise<PrensaEntry[]> {
  const entries = await getCollection('prensa', ({ data }) => data.publicar);

  return entries.sort((a, b) => b.data.fechaOrden.localeCompare(a.data.fechaOrden));
}

export async function getPressCoverage(): Promise<PrensaEntry[]> {
  const entries = await getPublishedPress();

  return entries.filter(({ data }) => data.seccion === 'prensa');
}

export async function getEditorialPlatforms(): Promise<PrensaEntry[]> {
  const entries = await getPublishedPress();

  return entries.filter(({ data }) => data.seccion === 'plataformas');
}

export async function getFeaturedPress(): Promise<PrensaEntry[]> {
  const entries = await getPressCoverage();
  const featured = entries.filter(({ data }) => data.destacadoHome);

  return featured.length > 0 ? featured.slice(0, 3) : entries.slice(0, 3);
}

export async function getPublishedEvents(): Promise<EventoEntry[]> {
  const entries = await getCollection('eventos', ({ data }) => data.publicar);

  return entries.sort((a, b) => a.data.fechaInicio.localeCompare(b.data.fechaInicio));
}

export async function getAgendaEvents(): Promise<EventoEntry[]> {
  const entries = await getCollection(
    'eventos',
    ({ data }) => data.publicar && data.mostrarAgenda
  );

  return entries.sort((a, b) => a.data.fechaInicio.localeCompare(b.data.fechaInicio));
}

export async function getAuthorEncounterEvents(): Promise<EventoEntry[]> {
  const entries = await getCollection(
    'eventos',
    ({ data }) => data.publicar && data.mostrarAulasEncuentros
  );

  return entries.sort((a, b) => b.data.fechaInicio.localeCompare(a.data.fechaInicio));
}
