export const translateHeader = (metadata: any, locale: string | undefined) => {
  const localeStrapi = metadata?.attributes?.locale;
  const title =
    locale === localeStrapi
      ? metadata?.attributes?.screenTitle
      : metadata?.attributes?.localizations?.data[0]?.attributes?.screenTitle;

  const description =
    locale === localeStrapi
      ? metadata?.attributes?.metadata
      : metadata?.attributes?.localizations?.data[0]?.attributes?.metadata;

  const metadataInfo = {
    screenTitle: title,
    metadata: description,
  };
  return metadataInfo;
};
