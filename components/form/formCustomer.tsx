import { Formik } from 'formik';
import Link from 'next/link';
import { Styles } from './style';
import IconAnimate from '../button/icon';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputCheckcondition from './inputCheckcondition';
import { validationSchema } from './validations';

export default function FormCustomer() {
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueCompany = FORMVALUES.COMPANY;
  const valueMessage = FORMVALUES.MESSAGE;

  const initialValues = {
    [FORMVALUES.FIRSTNAME]: '',
    [FORMVALUES.LASTNAME]: '',
    [FORMVALUES.PHONE]: '',
    [FORMVALUES.EMAIL]: '',
    [FORMVALUES.COMPANY]: '',
    [FORMVALUES.MESSAGE]: '',
  };

  return (
    <>
      <Formik
        onSubmit={(values: any) => values}
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount>
        {({ touched, errors, setFieldValue }) => (
          <>
            <Styles.Form>
              <Styles.SectionInput>
                <div className="w-full relative pr-5">
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder="Nombre *"
                      type="text"
                      name={FORMVALUES.FIRSTNAME}
                    />
                    {touched.valueName && errors.valueName && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueName, '')}
                      />
                    )}
                  </Styles.BlockInput>
                  {touched.valueName && errors.valueName && (
                    <div className="text-red-500 absolute text-PrimarySerif text-sm ">
                      {errors.valueName}
                    </div>
                  )}
                </div>

                <div className="w-full relative">
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder="Apellidos *"
                      type="text"
                      name={FORMVALUES.LASTNAME}
                    />
                    {touched.valueLastName && errors.valueLastName && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueLastName, '')}
                      />
                    )}
                  </Styles.BlockInput>
                  {touched.valueName && errors.valueName && (
                    <div className="text-red-500 absolute text-PrimarySerif text-sm ">
                      {errors.valueName}
                    </div>
                  )}
                </div>
              </Styles.SectionInput>
              <Styles.SectionInput>
                <div className="w-full relative pt-5 pr-5">
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder="Email *"
                      type="email"
                      name={FORMVALUES.EMAIL}
                    />
                    {touched.valueEmail && errors.valueEmail && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueEmail, '')}
                      />
                    )}
                  </Styles.BlockInput>
                  {touched.valueEmail && errors.valueEmail && (
                    <div className="text-red-500 absolute text-PrimarySerif text-sm ">
                      {errors.valueEmail}
                    </div>
                  )}
                </div>

                <div className="w-full relative pt-5">
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder="Móvil *"
                      type="phone"
                      name={FORMVALUES.PHONE}
                    />
                    {touched.valuePhone && errors.valuePhone && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valuePhone, '')}
                      />
                    )}
                  </Styles.BlockInput>
                  {touched.valuePhone && errors.valuePhone && (
                    <div className="text-red-500 absolute text-PrimarySerif text-sm ">
                      {errors.valuePhone}
                    </div>
                  )}
                </div>
              </Styles.SectionInput>
              <Styles.SingleInput>
                <div className="w-full relative pt-5">
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.OFF}
                    placeholder="Empresa/Organización *"
                    type="text"
                    name={FORMVALUES.COMPANY}
                  />
                  {touched.valueCompany && errors.valueCompany && (
                    <Styles.BlockClose
                      onClick={() => setFieldValue(valueCompany, '')}
                    />
                  )}
                  {touched.valueCompany && errors.valueCompany && (
                    <div className="text-red-500 absolute text-PrimarySerif text-sm ">
                      {errors.valueCompany}
                    </div>
                  )}
                </div>
              </Styles.SingleInput>
              <Styles.SingleInput>
                <div className="w-full relative pt-5">
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.OFF}
                    placeholder="Tu mensaje *"
                    type="textarea"
                    name={FORMVALUES.MESSAGE}
                  />
                  {touched.valueMessage && errors.valueMessage && (
                    <Styles.BlockClose
                      onClick={() => setFieldValue(valueMessage, '')}
                    />
                  )}
                  {touched.valueMessage && errors.valueMessage && (
                    <div className="text-red-500 absolute text-PrimarySerif text-sm ">
                      {errors.valueMessage}
                    </div>
                  )}
                </div>
              </Styles.SingleInput>

              <InputCheckcondition
                color="text-primary text-xs"
                text={
                  <>
                    <p>He leído y acepto los </p>
                    <Link href="/terminos">
                      <p className="mx-1 underline cursor-pointer">
                        Términos y condiciones
                      </p>
                    </Link>
                    y la
                    <Link href="/privacidad">
                      <p className="ml-1 underline cursor-pointer">
                        Política de Privacidad
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
