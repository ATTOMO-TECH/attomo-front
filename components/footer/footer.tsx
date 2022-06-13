import Link from 'next/link';
import { useState } from 'react';
import { ICONNAV } from '../../const/constGlobal';
import SubFooter from './subfooter';
import { Navegation } from './style';
import InputNew from '../input/inputNews';
import { getLocale } from '../../public/locales/getLocale';
import { handleClickTouch } from '../../hook/eventListener';
import useTap from '../../hook/longPress';

interface Props {
  subFooter: boolean;
}
export default function Footer({ subFooter }: Props) {
  const [url, setUrl] = useState('');
  const [logo, setLogo] = useState('');
  const translate = getLocale();

  const [handlers] = useTap(`/terminos`);
  const [handlers2] = useTap(`/privacidad`);
  const [handlers3] = useTap('', () => handleClickTouch(url));
  const [handlers4] = useTap('', () => handleClickTouch(logo));

  return (
    <>
      <Navegation.SectionFooter>
        {/* <Navegation.Footer /> */}
        <Navegation.BlockFooter>
          <Navegation.BlockLogo>
            <Navegation.NavFooter>
              <Navegation.TitleNav>ATTOMO</Navegation.TitleNav>
              {translate.menu.map((values) => (
                <Link href={values.Url} passHref>
                  <a href={values.Url} onTouchStart={() => setUrl(values.Url)}>
                    <Navegation.ItemsMenu id={values.Value} {...handlers3()}>
                      {values.Value}
                    </Navegation.ItemsMenu>
                  </a>
                </Link>
              ))}
            </Navegation.NavFooter>
          </Navegation.BlockLogo>
          <Navegation.BlockNavMed className="order-1 lg:order-none lg:pt-0">
            <Navegation.TitleNav>{translate.followFooter}</Navegation.TitleNav>
            <Navegation.NavFooterFlex>
              {ICONNAV.map((values) => (
                <Navegation.ListIcon onTouchStart={() => setLogo(values.Url)}>
                  <Link href={values.Url} passHref>
                    <a
                      target="_blank"
                      href={values.Url}
                      id={values.Name}
                      rel="noreferrer"
                      {...handlers4()}>
                      <img
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
            <InputNew idInput="#InputFooter" />
          </Navegation.BlockNav>
        </Navegation.BlockFooter>
        <div className="relative ">{subFooter && <SubFooter />}</div>
        <Navegation.BlockSubText>
          <Link href="/privacidad">
            <a href="/privacidad" {...handlers2()}>
              <Navegation.SubText>{translate.privacy}</Navegation.SubText>
            </a>
          </Link>
          <Link href="/terminos" passHref>
            <a href="/terminos" {...handlers()}>
              <Navegation.SubText>{translate.rightReserve}</Navegation.SubText>
            </a>
          </Link>
        </Navegation.BlockSubText>
      </Navegation.SectionFooter>
    </>
  );
}
