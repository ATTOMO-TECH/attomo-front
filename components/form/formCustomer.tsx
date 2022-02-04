import * as Yup from 'yup';
import { Formik } from 'formik';
import Link from 'next/link';
import { Styles } from './style';
import IconAnimate from '../button/icon';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputCheck from './inputCheck';

const registerSchema = Yup.object().shape({
  newsletter: Yup.string()
    .email('Email no valido')
    .required('Email es requerido'),
});
export default function FormCustomer() {
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueCompany = FORMVALUES.COMPANY;
  const valueMessage = FORMVALUES.MESSAGE;

  const initialValues = {
    [valueName]: '',
    [valueLastName]: '',
    [valueCompany]: '',
    [valuePhone]: '',
    [valueEmail]: '',
    [valueMessage]: '',
  };

  return (
    <>
      <Formik
        onSubmit={(values: any) => values}
        initialValues={initialValues}
        validationSchema={registerSchema}
        validateOnMount>
        {({ touched, errors }) => (
          <>
            <Styles.Form>
              <Styles.SectionInput>
                <Styles.Input
                  ismode={BUTTON_ACTIVE.ON}
                  placeholder="Nombre *"
                  type="text"
                  name={valueName}
                />
                {touched.valueName && errors.valueName && (
                  <div>{errors.valueName}</div>
                )}
                <Styles.Input
                  ismode={BUTTON_ACTIVE.ON}
                  placeholder="Apellidos *"
                  type="text"
                  name={valueLastName}
                />
              </Styles.SectionInput>
              <Styles.SingleInput>
                <Styles.SectionInput>
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder="Email *"
                    type="email"
                    name={valueEmail}
                  />
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder="Móvil *"
                    type="tel"
                    name={valuePhone}
                  />
                </Styles.SectionInput>
              </Styles.SingleInput>
              <Styles.SingleInput>
                <Styles.Input
                  ismode={BUTTON_ACTIVE.OFF}
                  placeholder="Empresa/Organización *"
                  type="text"
                  name={valueCompany}
                />
              </Styles.SingleInput>
              <Styles.SingleInput>
                <Styles.Input
                  ismode={BUTTON_ACTIVE.OFF}
                  placeholder="Tu mensaje *"
                  type="textarea"
                  name={valueMessage}
                />
              </Styles.SingleInput>
              <InputCheck
                color="text-primary text-xs"
                text={
                  <>
                    <p>Acepto las</p>
                    <Link href="/terminos">
                      <p className="ml-1 underline cursor-pointer">
                        condiciones generales{' '}
                      </p>
                    </Link>
                  </>
                }
                value="condiciones"
              />
              <Styles.BlockBtn type="submit">
                <IconAnimate text="Enviar" mode />
              </Styles.BlockBtn>
            </Styles.Form>
          </>
        )}
      </Formik>
    </>
  );
}
