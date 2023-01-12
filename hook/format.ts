export const handleFilter = (data: any, slug: any) =>
  data.flatMap((tab: any) => {
    const some = tab.attributes?.subservices?.data?.filter(
      ({ attributes: { URLSlug } }: any) => {
        const nameParse = URLSlug;
        return nameParse === slug;
      },
    );
    return some;
  });
