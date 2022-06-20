import Link from 'next/link';
import { ICONNAV } from '../../const/constGlobal';
import SubFooter from './subfooter';
import { Navegation } from './style';
import InputNew from '../input/inputNews';
import { getLocale } from '../../public/locales/getLocale';
import { handlers, handlersExternal } from '../../hook/longPress';

interface Props {
  subFooter: boolean;
}
export default function Footer({ subFooter }: Props) {
  const translate = getLocale();

  return (
    <>
      <Navegation.SectionFooter>
        {/* <Navegation.Footer /> */}
        <Navegation.BlockFooter>
          <Navegation.BlockLogo>
            <Navegation.NavFooter>
              <Navegation.TitleNav>ATTOMO</Navegation.TitleNav>
              {translate.menu.map((values) => (
                <Navegation.ItemsMenu key={`${values.Value}+${values.Url}`}>
                  <Link href={values.Url} passHref>
                    <a href={values.Url} {...handlers(values.Url)}>
                      {values.Value}
                    </a>
                  </Link>
                </Navegation.ItemsMenu>
              ))}
            </Navegation.NavFooter>
          </Navegation.BlockLogo>
          <Navegation.BlockNavMed className="order-1 lg:order-none lg:pt-0">
            <Navegation.TitleNav>{translate.followFooter}</Navegation.TitleNav>
            <Navegation.NavFooterFlex>
              {ICONNAV.map((values) => (
                <Navegation.ListIcon key={`${values.Name}+${values.Url}`}>
                  <Link href={values.Url} passHref>
                    <a
                      target="_blank"
                      href={values.Url}
                      id={values.Name}
                      rel="noreferrer"
                      {...handlersExternal(values.Url)}>
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
          <Link href="/privacidad" passHref>
            <a href="/privacidad" {...handlers('/privacidad')}>
              <Navegation.SubText>{translate.privacy}</Navegation.SubText>
            </a>
          </Link>
          <Link href="/terminos" passHref>
            <a href="/terminos" {...handlers('/terminos')}>
              <Navegation.SubText>{translate.rightReserve}</Navegation.SubText>
            </a>
          </Link>
        </Navegation.BlockSubText>
      </Navegation.SectionFooter>
    </>
  );
}
