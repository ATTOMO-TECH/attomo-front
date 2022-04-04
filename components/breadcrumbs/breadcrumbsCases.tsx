import { BreadStyles } from './style';

interface Props {
  customer: string;
  sumary: string;
}

export default function BreadCrumbsCases({ customer, sumary }: Props) {
  return (
    <>
      <BreadStyles.BlockBread>
        <BreadStyles.TextBread>{customer}</BreadStyles.TextBread>

        <BreadStyles.Circle />
        <BreadStyles.TextBread>{sumary}</BreadStyles.TextBread>
      </BreadStyles.BlockBread>
    </>
  );
}
