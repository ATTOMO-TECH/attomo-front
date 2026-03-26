import { BreadStyles } from './style';

interface Props {
  Author: string;
  Date: string;
}

export default function BreadCrumbs({ Author, Date }: Props) {
  return (
    <>
      <BreadStyles.BlockBread>
        {Author === null ? (
          <BreadStyles.TextBread>Author</BreadStyles.TextBread>
        ) : (
          <BreadStyles.TextBread>{Author}</BreadStyles.TextBread>
        )}

        <BreadStyles.Circle />
        <BreadStyles.TextBread>{Date}</BreadStyles.TextBread>
      </BreadStyles.BlockBread>
    </>
  );
}
