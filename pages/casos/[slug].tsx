import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import { BUTTON_ACTIVE } from '../../const/const';
import { darkTheme, lightTheme, Styles } from '../../styles/styles';
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs';
import ArticlesScroll from '../../components/slider/article/slider';
import BlockSection from '../../components/block/block';
import { CASE, NEWS } from '../../const/constGlobal';

import DetailsCases from '../../components/section/cases/details';

interface Props {
  mode: boolean;
}

function Cases({ mode }: Props) {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const router = useRouter();

  const currentCase = CASE.filter(
    (value) => value.Tag === router.query.slug,
  )[0];

  return (
    <>
      <Styles.Body
        ismode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.Center>
            <BreadCrumbs Author={currentCase.Client} Date={currentCase.Topic} />
            <Styles.TitularText>{currentCase.Text}</Styles.TitularText>
          </Styles.Center>
        </Styles.Center>
        <Image src={currentCase.Pic || '/'} width={950} height={500} />
        <Styles.Center>
          <DetailsCases />
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
            />
          </Styles.CenterFlex>
        </Styles.Center>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Cases;
