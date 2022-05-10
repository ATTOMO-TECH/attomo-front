import Link from 'next/link';
import { ICONNAV } from '../../const/constGlobal';
import SubFooter from './subfooter';
import { Navegation } from './style';
import InputNew from '../input/inputNews';
import { getLocale } from '../../public/locales/getLocale';
import { handleClickTouch, useEventListener } from '../../hook/eventListener';

interface Props {
  subFooter: boolean;
}
export default function Footer({ subFooter }: Props) {
  const translate = getLocale();

  translate.menu.map((values) =>
    useEventListener(values.Value, 'touchstart', () =>
      handleClickTouch(values.Url),
    ),
  );
  useEventListener('term', 'touchstart', () => handleClickTouch('/privacidad'));
  useEventListener('privacy', 'touchstart', () =>
    handleClickTouch('/terminos'),
  );
  ICONNAV.map((values) =>
    useEventListener(values.Name, 'touchstart', () =>
      handleClickTouch(values.Url),
    ),
  );

  return (
    <>
      <Navegation.SectionFooter>
        <Navegation.Footer />
        <Navegation.BlockFooter>
          <Navegation.BlockLogo>
            <Navegation.NavFooter>
              <Navegation.TitleNav>ATTOMO</Navegation.TitleNav>
              {translate.menu.map((values) => (
                <Link href={values.Url} passHref key={`footer${values.Value}`}>
                  <Navegation.ItemsMenu id={values.Value}>
                    {values.Value}
                  </Navegation.ItemsMenu>
                </Link>
              ))}
            </Navegation.NavFooter>
          </Navegation.BlockLogo>
          <Navegation.BlockNavMed className="order-1 lg:order-none lg:pt-0">
            <Navegation.TitleNav>{translate.followFooter}</Navegation.TitleNav>
            <Navegation.NavFooterFlex>
              {ICONNAV.map((values) => (
                <Navegation.ListIcon key={`footer${values.Name}`}>
                  <Link href={values.Url} passHref>
                    <a
                      target="_blank"
                      href={values.Url}
                      id={values.Name}
                      rel="noreferrer">
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
            <InputNew />
          </Navegation.BlockNav>
        </Navegation.BlockFooter>
        <div className="relative ">{subFooter && <SubFooter />}</div>
        <Navegation.BlockSubText>
          <Link href="/privacidad">
            <div id="privacy">
              <Navegation.SubText>{translate.privacy}</Navegation.SubText>
            </div>
          </Link>
          <Link href="/terminos" passHref>
            <a href="/terminos" id="term">
              <Navegation.SubText>{translate.rightReserve}</Navegation.SubText>
            </a>
          </Link>
        </Navegation.BlockSubText>
      </Navegation.SectionFooter>
    </>
  );
}
