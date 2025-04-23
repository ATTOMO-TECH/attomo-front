import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { Styles } from '../../styles/styles';
import Background from '../../components/animations/background';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import shopifyLogo from '../../public/shopify-logo.png';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import BlockSectionExternal from '../../components/block/blockExternal';

type Props = {
  locale?: string;
};

export default function ShopifyPartners({ locale }: Props) {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => SetIsOpen(!isOpen);
  const translate = getLocale(locale);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('position');
    }
  }, []);

  return (
    <>
      <Head>
        <title>{translate.shopifyPartnersPage.title} | ATTOMO</title>
        <meta
          name="description"
          content={translate.shopifyPartnersPage.description}
        />
      </Head>
      <Background />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.ShopifyPageHeroContainer>
            <div>
              <h1 className="text-4xl font-light text-white pb-6">
                {translate.shopifyPartnersPage.title}
              </h1>
              <a
                href="https://www.shopify.com"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src={shopifyLogo}
                  alt="Shopify Logo"
                  width={300}
                  height={90}
                  className="w-full h-auto cursor-pointer"
                />
              </a>
            </div>
            <p className="text-white font-light text-lg leading-relaxed max-w-2xl">
              {translate.shopifyPartnersPage.description}
            </p>
          </Styles.ShopifyPageHeroContainer>
        </Styles.Center>

        <Styles.Center>
          <Styles.ShopifyServicesContainer className="grid py-12 pb-24 gap-20 md:gap-32 lg:grid-cols-3 grid-cols-1 text-white">
            {translate.shopifyPartnersPage.blocks.map((block, i) => (
              <div
                className="flex flex-col items-center lg:items-start"
                key={`block-${i + 1}`}>
                <h2 className="w-full md:w-auto text-xl font-semibold mb-2">
                  {block.title}
                </h2>
                <p className="font-light text-left md:text-center lg:text-left">
                  {block.text}
                </p>
              </div>
            ))}
          </Styles.ShopifyServicesContainer>
        </Styles.Center>

        <Styles.Center>
          <BlockSectionExternal
            key={translate.shopifyPartnersPage.buttonText}
            text=" "
            button={translate.shopifyPartnersPage.buttonText}
            text2=""
            button2=""
            mode
            link="https://www.shopify.com/"
          />
        </Styles.Center>

        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}

// 👇 Si estás usando getStaticProps para obtener locale
export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      locale: locale ?? 'es',
    },
  };
};
