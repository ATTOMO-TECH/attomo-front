import Link from 'next/link';
import IconAnimate from '../../button/icon';
import { Container, Details } from './style';

interface Props {
  data: any;
}
export default function DetailsCases({ data }: Props) {
  return (
    <>
      <Details.Section>
        <Details.BlockItems>
          <Details.BlockSpeciality>
            <Details.TitleSpeciality>Disciplinas</Details.TitleSpeciality>
            {data.attributes.disciplines.data.map((disciplines: any) => (
              <Details.SubTextSpeciality>
                {disciplines.attributes.name}
              </Details.SubTextSpeciality>
            ))}
          </Details.BlockSpeciality>

          <Details.BlockSecond>
            <Details.TitleSpeciality>Entregables</Details.TitleSpeciality>
            {data.attributes.deliverables.data.map((disciplines: any) => (
              <Details.SubTextSpeciality>
                {disciplines.attributes.name}
              </Details.SubTextSpeciality>
            ))}
          </Details.BlockSecond>
        </Details.BlockItems>
        <Details.SectionContainer>
          <Container>{data.attributes.workDescription}</Container>
          <Link href={data.attributes.projectUrl || '/'} passHref>
            <a
              href={data.attributes.projectUrl}
              target="_blank"
              rel="noreferrer">
              <IconAnimate text="Ver online" mode={false} />
            </a>
          </Link>
        </Details.SectionContainer>
        <Details.SectionText>
          <Container>{data.attributes.content}</Container>
        </Details.SectionText>
      </Details.Section>
    </>
  );
}
