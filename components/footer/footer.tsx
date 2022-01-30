import Image from 'next/image';
import Link from 'next/link';
import { ICONNAV, VALUESNAV } from '../../const/constGlobal';
import SubFooter from './subfooter';
import { Navegation } from './style';
import InputNew from '../input/inputNews';

export default function Footer() {
  return (
    <>
      <Navegation.SectionFooter>
        <Navegation.BlockFooter>
          <Navegation.BlockLogo>
            <Image
              src="/icon/attomo.svg"
              width={120}
              height={40}
              alt="Attomo"
            />
          </Navegation.BlockLogo>
          <Navegation.BlockNav className="order-2 lg:order-none">
            <Navegation.TitleNav>Attomo</Navegation.TitleNav>
            <Navegation.NavFooter>
              {VALUESNAV.map((values) => (
                <Navegation.ItemsMenu key={values.Value}>
                  <Link href={values.Url} passHref>
                    {values.Value}
                  </Link>
                </Navegation.ItemsMenu>
              ))}
            </Navegation.NavFooter>
          </Navegation.BlockNav>
          <Navegation.BlockNav className="order-1 lg:order-none pt-10 lg:pt-0">
            <Navegation.TitleNav>Síguenos</Navegation.TitleNav>
            <Navegation.NavFooterFlex>
              {ICONNAV.map((values) => (
                <Navegation.ListIcon>
                  <Link href={values.Url}>
                    <a target="_blank" href={values.Url} rel="noreferrer">
                      <Navegation.Image
                        src={values.Pic2}
                        width={25}
                        height={25}
                        alt={values.Name}
                        className="shadow-lg shadow-cyan-500/50"
                      />
                    </a>
                  </Link>
                </Navegation.ListIcon>
              ))}
            </Navegation.NavFooterFlex>
          </Navegation.BlockNav>
          <Navegation.BlockNav className="order-last lg:order-none">
            <Navegation.TitleNavResponsive>
              Newsletter
            </Navegation.TitleNavResponsive>
            <InputNew />
          </Navegation.BlockNav>
        </Navegation.BlockFooter>
        <SubFooter />
        <Navegation.BlockSubText>
          <Navegation.SubText>
            <Link href="/privacidad">Política de privacidad </Link>
          </Navegation.SubText>
          <Navegation.SubText>
            <Link href="/terminos">Todos los derechos reservados</Link>
          </Navegation.SubText>
        </Navegation.BlockSubText>
      </Navegation.SectionFooter>
    </>
  );
}
