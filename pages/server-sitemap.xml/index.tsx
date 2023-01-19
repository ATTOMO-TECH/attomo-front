import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  /**
   * 1. Hacer el fetch al server de todos los casos de éxito
   * 2. guardarlos en una variable
   * 3. Crear una variable de tipo ISitemapField[] que genere cada una de las URL dinámicas
   * 4. Repetir los pasos 1 a 3 para todas las URL dinámicas
   * 5. Crear una nueva variable de tipo ISitemapField[] que sea un concat de todas las variables
   *      de los puntos 3
   * 6. Devolver la variable del punto 5 en el return.
   */

  const fields: ISitemapField[] = [];

  return getServerSideSitemap(ctx, fields);
};

export default function Site(): void {
  console.log('Site-map');
}
