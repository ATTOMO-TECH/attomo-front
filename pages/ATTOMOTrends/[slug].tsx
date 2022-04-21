import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from '../../components/footer/footerWhite';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/navWhite';
import { BUTTON_ACTIVE } from '../../const/const';
import { darkTheme, lightTheme, Styles } from '../../styles/styles';
import HeaderCases from '../../components/section/cases/header';
import Back from '../../components/button/back';
import BodyCases from '../../components/section/cases/bodyCase';
import BlockSection from '../../components/block/block';
import { useAPost } from '../../domain/useBlogDetails';
import RenderLoading from '../../components/loading/loading';
import { getLocale } from '../../public/locales/getLocale';
import { servicesAnimations } from '../../components/animations/animations';

interface Props {
  mode: boolean;
}

function New({ mode }: Props) {
  const SliderSSR = dynamic(
    () =>
      import('../../components/slider/article/sliderInvert').then(
        (module: any) => module.default,
      ),
    { ssr: false },
  );
  const translate = getLocale();
  const [shouldShowActions] = useState(false);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { slug } = router.query;
  const { data, isLoading } = useAPost(Number(slug));
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>#ATTOMOtrends - {data?.data?.attributes.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={data?.data?.attributes.title} />
        <meta
          property="og:image"
          content={data?.data.attributes.coverImage.data.attributes?.url}
        />
        <meta
          property="og:description"
          content={data?.data?.attributes.metadata}
        />
        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
      </Head>
      <Styles.Body
        mode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} bgFull isOpen={isOpen} />
        </Styles.Margin>
        <Back>{translate.backToNews}</Back>
        <Styles.Center>
          <Styles.AlingCasesNoP>
            <HeaderCases
              category={data?.data.attributes.blog_tags.data[0].attributes.name}
              title={data?.data.attributes.title}
              paragraph=""
              image={data?.data.attributes.coverImage.data.attributes?.url}
            />
            <BodyCases data={data} />
          </Styles.AlingCasesNoP>
        </Styles.Center>
        <Styles.Center>
          <Styles.TextSubSection>{translate.interested}</Styles.TextSubSection>
        </Styles.Center>
        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <SliderSSR>
              {data?.data.attributes.blog_tags.data[0].attributes.name}
            </SliderSSR>
          </Styles.AlingBlock>
        </Styles.FlexEnd>
        <motion.div
          animate={shouldShowActions}
          variants={servicesAnimations}
          className="actions "
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 50,
            duration: 2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: '50%' }}>
          <Styles.Center>
            {translate.contact.map((values) => (
              <BlockSection
                key={values.Link}
                text={values.Text}
                button={values.Link}
                text2=""
                button2=""
                mode={false}
                link="/contacto"
              />
            ))}
          </Styles.Center>
        </motion.div>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default New;
