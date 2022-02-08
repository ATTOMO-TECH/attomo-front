import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import { BUTTON_ACTIVE } from '../../const/const';
import { darkTheme, lightTheme, Styles } from '../../styles/styles';
import ArticlesScroll from '../../components/slider/article/slider';
import BlockSection from '../../components/block/block';
import { NEWS } from '../../const/constGlobal';
import DetailsCases from '../../components/section/cases/details';
import { useaCase } from '../../domain/useCasesDetails';
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs';

interface Props {
  mode: boolean;
}

export default function Cases({ mode }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const { data, isLoading } = useaCase(Number(slug));
  if (isLoading) {
    return <>...Cargando</>;
  }

  return (
    <>
      <Styles.Body
        ismode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center className="mt-44">
          <Styles.Center>
            <BreadCrumbs
              Author={data.data.attributes.name}
              Date={data.data.attributes.updatedAt}
            />
            <Styles.TitularText>
              {data.data.attributes.shortDescription}
            </Styles.TitularText>
          </Styles.Center>
        </Styles.Center>

        {data.data?.attributes?.mainPhoto?.data[0].attributes?.url ? (
          <Image
            src={data.data?.attributes?.mainPhoto?.data[0].attributes?.url}
            width={1100}
            height={600}
            alt={data.data.attributes.name}
            objectFit="cover"
          />
        ) : (
          ''
        )}

        <Styles.Center>
          <DetailsCases data={data.data.attributes.workDescription} />
        </Styles.Center>

        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <ArticlesScroll mode={false} array={NEWS} />
          </Styles.AlingBlock>
        </Styles.FlexEnd>
        <Styles.Center>
          <Styles.BreakLine />
          <Styles.CenterFlex>
            <BlockSection
              text="¿Tienes un proyecto?"
              button="Contacta con nosotros"
              text2=""
              button2=""
              mode={false}
              link="/contacto"
            />
          </Styles.CenterFlex>
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
