export const getENLangLink = (url: string): string => {
  let alternativeUrl = '';
  if (url === 'agente-digitalizador-madrid')
    alternativeUrl = 'digitizing-agent-madrid';
  else if (url === 'estudio-fotografia-madrid')
    alternativeUrl = 'photography-studio-space-madrid';
  else if (url === 'contacto') alternativeUrl = 'contact';
  else if (url === 'ofertas-trabajo') alternativeUrl = 'careers';
  else if (url === 'tendencias') alternativeUrl = 'trends';
  else if (url === 'quienes-somos') alternativeUrl = 'about-us';
  else if (url === 'casos-exito-digitalizacion')
    alternativeUrl = 'digitization-success-stories';
  else if (url === 'consultora-transformacion-digital')
    alternativeUrl = 'technology-consulting-firm';

  return alternativeUrl;
};

export const getESLangLink = (url: string): string => {
  let alternativeUrl = '';
  if (url === 'digitizing-agent-madrid')
    alternativeUrl = 'agente-digitalizador-madrid';
  else if (url === 'photography-studio-space-madrid')
    alternativeUrl = 'estudio-fotografia-madrid';
  else if (url === 'contact') alternativeUrl = 'contacto';
  else if (url === 'careers') alternativeUrl = 'ofertas-trabajo';
  else if (url === 'trends') alternativeUrl = 'tendencias';
  else if (url === 'about-us') alternativeUrl = 'quienes-somos';
  else if (url === 'digitization-success-stories')
    alternativeUrl = 'casos-exito-digitalizacion';
  else if (url === 'technology-consulting-firm')
    alternativeUrl = 'consultora-transformacion-digital';

  return alternativeUrl;
};
