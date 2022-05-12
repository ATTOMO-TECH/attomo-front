import Link from 'next/link';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import IconAnimate from '../../button/icon';
import { Container, Details } from './style';
import {
  useEventListener,
  handleExternalTouch,
} from '../../../hook/eventListener';

interface Props {
  data: any;
  translate: any;
}
export default function DetailsCases({ data, translate }: Props) {
  useEventListener('Link-Details', 'touchstart', () =>
    handleExternalTouch(data.attributes.projectUrl),
  );

  return (
    <>
      <Details.Section>
        <Details.BlockItems>
          <Details.BlockSpeciality>
            <Details.TitleSpeciality>
              {translate.Disciplines}
            </Details.TitleSpeciality>
            {data.attributes.disciplines.data.map((disciplines: any) => (
              <Details.SubTextSpeciality key={disciplines.attributes.name}>
                {disciplines.attributes.name}
              </Details.SubTextSpeciality>
            ))}
          </Details.BlockSpeciality>
          <Details.BlockSecond>
            <Details.TitleSpeciality>
              {translate.Deliverables}
            </Details.TitleSpeciality>
            {data.attributes.deliverables.data.map((disciplines: any) => (
              <Details.SubTextSpeciality key={disciplines.attributes.name}>
                {disciplines.attributes.name}
              </Details.SubTextSpeciality>
            ))}
          </Details.BlockSecond>
        </Details.BlockItems>
        <Details.SectionContainer>
          <Container remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]}>
            {data.attributes.workDescription}
          </Container>
          {data.attributes.projectUrl !== '' && (
            <div className="w-48">
              <Link href={data.attributes.projectUrl || '/'} passHref>
                <a
                  id="Link-Details"
                  href={data.attributes.projectUrl}
                  target="_blank"
                  rel="noreferrer">
                  <IconAnimate text={translate.seeOnline} mode={false} />
                </a>
              </Link>
            </div>
          )}
        </Details.SectionContainer>
        <Details.SectionText>
          <Container remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]}>
            {data.attributes.content}
          </Container>
        </Details.SectionText>
      </Details.Section>
    </>
  );
}
