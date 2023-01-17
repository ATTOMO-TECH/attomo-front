import { Blogstyles } from '../blog/style';

interface Props {
  hasNextPage: boolean | undefined;
  handleAddBlog: any;
  translate: any;
}

export default function ShowMore({
  hasNextPage,
  handleAddBlog,
  translate,
}: Props) {
  return (
    <>
      {hasNextPage ? (
        <Blogstyles.SectionMore>
          <Blogstyles.BlockMore onClick={() => handleAddBlog()}>
            {translate.seeMoreTrends}
          </Blogstyles.BlockMore>
        </Blogstyles.SectionMore>
      ) : null}
    </>
  );
}
