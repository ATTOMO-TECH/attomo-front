import Image from 'next/image';
import { SubNavegation } from './style';
import { PARTNERS } from '../../const/constGlobal';

export default function SubFooter() {
  return (
    <>
      <SubNavegation.SectionSub>
        <SubNavegation.BlockSub>
          {PARTNERS.map((values) => (
            <SubNavegation.Listsub>
              <Image
                src={values.Pic}
                width={120}
                height={60}
                alt={values.Name}
              />
            </SubNavegation.Listsub>
          ))}
        </SubNavegation.BlockSub>
      </SubNavegation.SectionSub>
    </>
  );
}
