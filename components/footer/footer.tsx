import Link from 'next/link';
import { useRouter } from 'next/router';
import { ICONNAV } from '../../const/constGlobal';
import SubFooter from './subfooter';
import { Navegation } from './style';
import InputNew from '../input/inputNews';
import { getLocale } from '../../public/locales/getLocale';
import { useEventListener } from '../../hook/eventListener';

interface Props {
  subFooter: boolean;
}
export default function Footer({ subFooter }: Props) {
  const router = useRouter();

  const MENUURL: any = {
    itemmenufot0: '/servicios',
    itemmenufot1: '/casosdeexito',
    itemmenufot2: '/nosotros',
    itemmenufot3: '/ATTOMOTrends',
    itemmenufot4: '/careers',
    itemmenufot5: '/contacto',
    itemmenufot6: '/espacio',
  };

  const handleEvent = (url: any) => {
    router.push(MENUURL[url?.target?.id || '']);
  };

  const translate = getLocale();

  useEventListener('itemmenufot0', 'touchstart', handleEvent);
  useEventListener('itemmenufot1', 'touchstart', handleEvent);
  useEventListener('itemmenufot2', 'touchstart', handleEvent);
  useEventListener('itemmenufot3', 'touchstart', handleEvent);
  useEventListener('itemmenufot4', 'touchstart', handleEvent);
  useEventListener('itemmenufot5', 'touchstart', handleEvent);
  useEventListener('itemmenufot6', 'touchstart', handleEvent);
  useEventListener('itemmenufot6', 'touchstart', handleEvent);

  return (
    <>
      <Navegation.SectionFooter>
        <Navegation.Footer />
        <Navegation.BlockFooter>
          <Navegation.BlockLogo>
            <Navegation.NavFooter>
              <Navegation.TitleNav>ATTOMO</Navegation.TitleNav>
              {translate.menu.map((values, i) => (
                <Link href={values.Url} passHref key={`footer${values.Value}`}>
                  <Navegation.ItemsMenu id={`itemmenufot${i}`}>
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
                  <Link href={values.Url}>
                    <a
                      target="_blank"
                      href={values.Url}
                      id="Instagram"
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
            <Navegation.SubText>{translate.privacy}</Navegation.SubText>
          </Link>
          <Link href="/terminos">
            <Navegation.SubText>{translate.rightReserve}</Navegation.SubText>
          </Link>
        </Navegation.BlockSubText>
      </Navegation.SectionFooter>
    </>
  );
}
