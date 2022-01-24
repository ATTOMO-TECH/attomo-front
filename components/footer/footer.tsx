import Image from 'next/image';

import { Navegation } from './style';
import SubFooter from './subfooter';
import { ICONNAV, VALUESNAV } from '../../const/constGlobal';

export default function Footer() {
  //   const newsLetter = async () => {
  //     const { data } = await axios.post("");
  //     return data;
  // };

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
                  {values.Value}
                </Navegation.ItemsMenu>
              ))}
            </Navegation.NavFooter>
          </Navegation.BlockNav>
          <Navegation.BlockNav className="order-1 lg:order-none pt-10 lg:pt-0">
            <Navegation.TitleNav>Síguenos</Navegation.TitleNav>
            <Navegation.NavFooterFlex>
              {ICONNAV.map((values) => (
                <li className="w-auto px-1 ">
                  <Image
                    src={values.Pic}
                    width={25}
                    height={25}
                    alt={values.Name}
                    className="fill-primary animate-pulse"
                  />
                </li>
              ))}
            </Navegation.NavFooterFlex>
          </Navegation.BlockNav>

          <Navegation.BlockNav className="order-last lg:order-none">
            <Navegation.TitleNavResponsive>
              Newsletter
            </Navegation.TitleNavResponsive>
            <div className="flex items-baseline">
              <Navegation.BlockInput>
                <div className="flex w-full items-center overflow-hidden relative border-b-2 border-primary focus:outline-none lg:text-xs text-xl font-light transition-colors duration-200 ease-in-out">
                  <Navegation.Input
                    type="text"
                    placeholder="Escribe tu correo electronico "
                    name="newsletter"
                  />

                  <button type="submit">
                    <Image
                      src="/icon/send_.svg"
                      width={20}
                      height={10}
                      alt="Attomo"
                    />
                  </button>
                </div>
              </Navegation.BlockInput>
            </div>
          </Navegation.BlockNav>
        </Navegation.BlockFooter>
        <SubFooter />
        <Navegation.BlockSubText>
          <Navegation.SubText>{'Política de privacidad '} </Navegation.SubText>
          <Navegation.SubText>Todos los derechos reservados</Navegation.SubText>
        </Navegation.BlockSubText>
      </Navegation.SectionFooter>
    </>
  );
}
