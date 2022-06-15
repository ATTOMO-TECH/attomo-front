import { handlersFuntion } from '../../hook/longPress';
import { Blogstyles } from '../blog/style';

interface Props {
  data: any;
  handleAddBlog: any;
  translate: any;
}

export default function ShowMore({ data, handleAddBlog, translate }: Props) {
  return (
    <>
      {data &&
        (data.meta.pagination.page !== data.meta.pagination.pageCount &&
        data.meta.pagination.pageCount !== 0 ? (
          <Blogstyles.SectionMore>
            <Blogstyles.BlockMore
              onClick={() => handleAddBlog(data.meta.pagination.page + 1)}
              {...handlersFuntion(() =>
                handleAddBlog(data.meta.pagination.page + 1),
              )}>
              {translate.seeMoreTrends}
            </Blogstyles.BlockMore>
          </Blogstyles.SectionMore>
        ) : null)}
    </>
  );
}
