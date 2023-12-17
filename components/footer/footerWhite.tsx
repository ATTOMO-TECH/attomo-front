import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICONNAV, VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';
import SubFooter from './subfooter';
import { Navegation } from './style';
import InputNew from '../input/inputNews';
import { getLocale } from '../../public/locales/getLocale';

interface Props {
  subFooter: boolean;
}
export default function Footer({ subFooter }: Props) {
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale('es'));
  let { locale } = router;

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  if (locale === '/') {
    locale = 'es';
  }

  return (
    <>
      <Navegation.SectionFooterW>
        <Navegation.BlockFooter>
          <Navegation.BlockLogo>
            <Navegation.NavFooter>
              <Navegation.TitleNav>ATTOMO</Navegation.TitleNav>
              {translate.menu.map((values) => (
                <Navegation.ItemsMenu
                  key={`footer${values.Value}`}
                  id={values.Value}>
                  <Link href={values.Url} passHref>
                    {values.Value}
                  </Link>
                </Navegation.ItemsMenu>
              ))}
            </Navegation.NavFooter>
          </Navegation.BlockLogo>
          <Navegation.BlockNavMed className="order-1 lg:order-none lg:pt-0">
            <Navegation.TitleNav>{translate.followFooter}</Navegation.TitleNav>
            <Navegation.NavFooterFlex>
              {ICONNAV.map((values) => (
                <Navegation.ListIcon key={`footer${values.Name}`}>
                  <Link href={values.Url}>
                    <a target="_blank" href={values.Url} rel="noreferrer">
                      <Image
                        src={values.Pic2}
                        width={25}
                        height={25}
                        alt={values.Name}
                        className="shadow-lg shadow-cyan-500/50 hover:opacity-60 transition-all duration-150"
                      />
                    </a>
                  </Link>
                </Navegation.ListIcon>
              ))}
            </Navegation.NavFooterFlex>
          </Navegation.BlockNavMed>
          <Navegation.BlockNav className="order-last lg:order-none">
            <Navegation.TitleNavResponsive>
              NEWSLETTER
            </Navegation.TitleNavResponsive>
            <InputNew idInput="#InputFooterWhite" />
          </Navegation.BlockNav>
        </Navegation.BlockFooter>
        {subFooter ? <SubFooter /> : ''}
        <Navegation.BlockSubText>
          <Link
            href={
              locale === 'en' ? VALUESNAV_ENG[8].Url : VALUESNAV_ESP[8].Url
            }>
            <a
              id="privacy"
              href={
                locale === 'en' ? VALUESNAV_ENG[8].Url : VALUESNAV_ESP[8].Url
              }>
              <Navegation.SubText>{translate.privacy}</Navegation.SubText>
            </a>
          </Link>
          <Link
            href={locale === 'en' ? VALUESNAV_ENG[9].Url : VALUESNAV_ESP[9].Url}
            passHref>
            <a
              href={
                locale === 'en' ? VALUESNAV_ENG[9].Url : VALUESNAV_ESP[9].Url
              }>
              <Navegation.SubText>{translate.rightReserve}</Navegation.SubText>
            </a>
          </Link>
        </Navegation.BlockSubText>
      </Navegation.SectionFooterW>
    </>
  );
}
