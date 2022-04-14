import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import Background from '../components/animations/background';
import ButtonShare from '../components/button/BtnShare';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import HeroFooter from '../components/hero/heroFooter';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Work from '../components/section/work';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { useUseAllCareer } from '../domain/useCareers';
import { useUseAllQuote } from '../domain/useQuotes';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';
import { servicesAnimations } from '../components/animations/animations';

function Carrers() {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const [shouldShowActions] = useState(false);
  const randomQuote = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const [random] = useState<any>(randomQuote(1, 2));
  const { data: Quote, isLoading: QuoteIsLoading } = useUseAllQuote(
    random,
    locale || 'es',
  );

  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const { data, isLoading } = useUseAllCareer(locale || 'es');
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const translate = getLocale();
  if (isLoading || QuoteIsLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Careers ATTOMO: Trabaja con nosotros</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Background />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.CenterUs>
          <Styles.ScreenWS>
            {translate.workUs.map((value) => (
              <Styles.BlockDiv>
                <Title size="lg:text-5xl md:text-3xl text-2xl lg:pr-0 lg:pb-4 md:pb-12 pb-6 w-4/6 lg:w-3/6  ">
                  {value.Text}
                </Title>
                <Styles.FlexEnd>
                  <Subtext size="lg:w-3/6 lg:text-left pt-3 md:pt-0  pb-24 ">
                    {value.Subtext}
                  </Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.CenterUs>
        <Styles.Center>
          <Title size="text-xl  pb-8">{translate.offerWork}</Title>
          <Work works={data?.data} />
        </Styles.Center>
        {translate.contactUsWork.map((value) => (
          <Styles.CenterMargin>
            <Title size="lg:text-xl w-4/6 lg:w-3/6  ">{value.Text}</Title>
            <Subtext size=" text-2xl font-Primary"> </Subtext>
            <Subtext size=" text-sm lg:w-3/6 font-PrimarySerif py-5">
              {value.Subtext}
            </Subtext>
            <Link href="/">
              <div className="lg:w-2/6">
                <IconAnimate text={value.Button} mode />
              </div>
            </Link>
          </Styles.CenterMargin>
        ))}
        <motion.div
          animate={shouldShowActions}
          variants={servicesAnimations}
          className="actions"
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 50,
            duration: 2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: '50%' }}>
          <Styles.CenterFull>
            <HeroFooter text={Quote.data.attributes.text} />
          </Styles.CenterFull>
        </motion.div>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Carrers;
