import Image from 'next/image';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import { ICONNAV, VALUESNAV } from '../../const/constGlobal';
import SubFooter from './subfooter';
import { Navegation } from './style';
import { sendNewsletter } from '../../services/attomo.service';
import { BUTTON_ACTIVE } from '../../const/const';

const registerSchema = Yup.object().shape({
  newsletter: Yup.string()
    .email('Email no valido')
    .required('Email es requerido'),
});

export default function Footer() {
  const initialValues = {
    newsletter: '',
  };
  const newsLetter = (data: any) => {
    sendNewsletter(data);
  };

  const [inputMail, setInputMail] = useState('');

  const handleInput = (mail: string) => {
    setInputMail(mail);
  };

  const [isActive, setActive] = useState(false);

  const toggleClass = (value: boolean) => {
    setActive(value);
  };

  return (
    <>
      <Navegation.SectionFooter onClick={() => toggleClass(!isActive)}>
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
                      />
                    </a>
                  </Link>
                </Navegation.ListIcon>
              ))}
            </Navegation.NavFooterFlex>
          </Navegation.BlockNav>

          <Formik
            onSubmit={newsLetter}
            initialValues={initialValues}
            validationSchema={registerSchema}
            validateOnMount>
            {({ touched, errors }) => (
              <Navegation.BlockNav className="order-last lg:order-none">
                <Navegation.TitleNavResponsive>
                  Newsletter
                </Navegation.TitleNavResponsive>
                <Navegation.Form>
                  <Navegation.BlockInput>
                    <Navegation.SectionInput
                      ismode={isActive ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                      onClick={() => toggleClass(isActive)}>
                      <p className="text-primary">{isActive}</p>
                      <Navegation.Input
                        type="text"
                        placeholder="Escribe tu correo electronico"
                        name="newsletter"
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          handleInput(e.currentTarget.value)
                        }
                      />
                      <Navegation.Button
                        ismode={
                          inputMail.length > 0
                            ? BUTTON_ACTIVE.ON
                            : BUTTON_ACTIVE.OFF
                        }
                        type="submit">
                        <Image
                          src="/icon/send_.svg"
                          width={30}
                          height={10}
                          alt="Attomo"
                        />
                      </Navegation.Button>
                    </Navegation.SectionInput>
                    {touched.newsletter && errors.newsletter && (
                      <div className="text-red-500">{errors.newsletter}</div>
                    )}
                  </Navegation.BlockInput>
                </Navegation.Form>
              </Navegation.BlockNav>
            )}
          </Formik>
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
