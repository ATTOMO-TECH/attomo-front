import Link from 'next/link';
import { useRouter } from 'next/router';
import { ICONNAV } from '../../const/constGlobal';
import SubFooter from './subfooter';
import { Navegation } from './style';
import InputNew from '../input/inputNews';
import { getLocale } from '../../public/locales/getLocale';

interface Props {
  subFooter: boolean;
}
export default function Footer({ subFooter }: Props) {
  const translate = getLocale();
  const router = useRouter();

  return (
    <>
      <Navegation.SectionFooterW>
        <Navegation.BlockFooter>
          <Navegation.BlockLogo>
            <Navegation.NavFooter>
              <Navegation.TitleNav>ATTOMO</Navegation.TitleNav>
              {translate.menu.map((values) => (
                <Navegation.ItemsMenu
                  id={values.Value}
                  onTouchStart={() => router.push(values.Url)}>
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
                    <a
                      target="_blank"
                      href={values.Url}
                      rel="noreferrer"
                      onTouchStart={() => router.push(values.Url)}>
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
        {subFooter ? <SubFooter /> : ''}
        <Navegation.BlockSubText>
          <Link href="/privacidad">
            <a
              id="privacy"
              href="/privacidad"
              onTouchStart={() => router.push('/privacidad')}>
              <Navegation.SubText>{translate.privacy}</Navegation.SubText>
            </a>
          </Link>
          <Link href="/terminos" passHref>
            <a href="/terminos" onTouchStart={() => router.push('/terminos')}>
              <Navegation.SubText>{translate.rightReserve}</Navegation.SubText>
            </a>
          </Link>
        </Navegation.BlockSubText>
      </Navegation.SectionFooterW>
    </>
  );
}
