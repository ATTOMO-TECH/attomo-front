import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import {
  STATIC_SITEMAP,
  VALUESNAV_ESP,
  VALUESNAV_ENG,
} from '../../const/constGlobal';
import { getAllPost } from '../../domain/useBlogDetails';
import { getAllCases } from '../../domain/useCasesDetails';
import { getAllServices } from '../../domain/useServices';
import { queryObjectAllCases } from '../../lib/queryServer';

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
  const QUERY_PARAMS_BLOG = {
    ALL_POST: 'pagination[page]=1&pagination[pageSize]=3&populate=coverImage',
  };
  // 1. Pido la información
  const casesDataES: any = await getAllCases(queryObjectAllCases('es'));
  const casesDataEN: any = await getAllCases(queryObjectAllCases('en'));
  const blogDataES = await getAllPost(
    `${QUERY_PARAMS_BLOG.ALL_POST}&locale=es`,
  );
  const blogDataEN = await getAllPost(
    `${QUERY_PARAMS_BLOG.ALL_POST}&locale=en`,
  );
  const servicesDataES = await getAllServices('es');
  const servicesDataEN = await getAllServices('en');

  //   console.log('Datos Servicios ES:',servicesDataES.data)
  //   console.log('Datos Servicios ES:',servicesDataEN.data)
  //   console.log('Datos Servicios ES:',servicesDataES.data.length)
  //   console.log('Datos Servicios ES:',servicesDataEN.data.length)
  //   console.log('Datos Blog ES:',blogDataES.data)
  //   console.log('Datos Blog ES:',blogDataEN.data)
  //   console.log('Datos blog ES:',blogDataES.data.length)
  //   console.log('Datos blog ES:',blogDataEN.data.length)
  //   console.log('datos sitemap',casesDataEN.data)
  //   console.log('datos sitemap',casesDataES.data)
  //   console.log('datos sitemap ES:',casesDataES.data.length)
  //   console.log('datos sitemap EN:',casesDataEN.data.length)

  // Creo el sitemap stático
  const staticSitemap: ISitemapField[] = STATIC_SITEMAP;
  // 2. y 3. Guardo los datos del sitemap en una variable para cada item
  const casesRoutesES: ISitemapField[] = casesDataES.data.map((data: any) => ({
    loc: `https://www.attomo.digital${VALUESNAV_ESP[1].Url}/${data.attributes.URLSlug}-${data.id}`,
    // lastmod: new Date().toISOString(),
  }));
  const casesRoutesEN: ISitemapField[] = casesDataEN.data.map((data: any) => ({
    loc: `https://www.attomo.digital/en${VALUESNAV_ENG[1].Url}/${data.attributes.URLSlug}-${data.id}`,
    // lastmod: new Date().toISOString(),
  }));
  const blogRoutesES: ISitemapField[] = blogDataES.data.map((data: any) => ({
    loc: `https://www.attomo.digital${VALUESNAV_ESP[3].Url}/${data.attributes.URLSlug}-${data.id}`,
    // lastmod: new Date().toISOString(),
  }));
  const blogRoutesEN: ISitemapField[] = blogDataEN.data.map((data: any) => ({
    loc: `https://www.attomo.digital/en${VALUESNAV_ENG[3].Url}/${data.attributes.URLSlug}-${data.id}`,
    // lastmod: new Date().toISOString(),
  }));
  const servicesRoutesES: ISitemapField[] = [];
  servicesDataES.data.forEach((data: any) =>
    data.attributes.subservices.data.map((subservice: any) =>
      servicesRoutesES.push({
        loc: `https://www.attomo.digital${VALUESNAV_ESP[0].Url}/${subservice.attributes.URLSlug}`,
        // lastmod: new Date().toISOString(),
      }),
    ),
  );
  const servicesRoutesEN: ISitemapField[] = [];
  servicesDataEN.data.forEach((data: any) =>
    data.attributes.subservices.data.map((subservice: any) =>
      servicesRoutesEN.push({
        loc: `https://www.attomo.digital/en${VALUESNAV_ENG[0].Url}/${subservice.attributes.URLSlug}`,
        // lastmod: new Date().toISOString(),
      }),
    ),
  );
  // 5. Creo una nueva variable para cada ruta padre
  const allCasesRoutes = casesRoutesES.concat(casesRoutesEN);
  const allBlogRoutes = blogRoutesES.concat(blogRoutesEN);
  const allServicesRoutes = servicesRoutesES.concat(servicesRoutesEN);

  // console.log('subservicios ES',allServicesRoutes)
  // console.log('subservicios ES',allServicesRoutes.length)

  // 6.Junto todo en una variable fields y la devuelvo
  const fields: ISitemapField[] = staticSitemap
    .concat(allCasesRoutes)
    .concat(allBlogRoutes)
    .concat(allServicesRoutes);

  //  console.log('Total de rutas dinámicas:',fields.length)

  return getServerSideSitemap(ctx, fields);
};

export default function Site(): void {
  console.log('Site-map');
}
