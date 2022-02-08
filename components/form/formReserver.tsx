import { Formik } from 'formik';
import Link from 'next/link';
import { Styles } from './style';
import IconAnimate from '../button/icon';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputSelect from './select';
import { OPTIONDISPONIBILITY, OPTIONSTIME } from '../../const/constGlobal';
import InputCheckcondition from './inputCheckcondition';
import { createContact } from '../../domain/useContact';
import { validationSchema } from './validations';

export default function FormReserver() {
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueCompany = FORMVALUES.COMPANY;
  const valueMessage = FORMVALUES.MESSAGE;
  const conditions = FORMVALUES.CONDITIONS;

  const initialValues = {
    [valueName]: '',
    [valueLastName]: '',
    [valueCompany]: '',
    [valuePhone]: '',
    [valueEmail]: '',
    [conditions]: false,
  };

  const { mutate: createContacts } = createContact();

  return (
    <>
      <Formik
        onSubmit={(values) => {
          createContacts({ ...values });
        }}
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount>
        {({ touched, errors }) => (
          <>
            <Styles.Form
              onSubmit={(values) => {
                createContacts({ ...values });
              }}>
              <Styles.SingleInput>
                <Styles.SectionInput>
                  <div className="lg:w-2/6">
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder="Fecha"
                      type="date"
                      name={valueName}
                    />
                    {touched.valueName && errors.valueName && (
                      <div>{errors.valueName}</div>
                    )}
                  </div>
                  <div className="lg:w-2/6 ">
                    <InputSelect
                      options={OPTIONSTIME}
                      valueLabel="Hora de inicio"
                    />
                  </div>
                  <div className="lg:w-2/6 ">
                    <InputSelect
                      options={OPTIONDISPONIBILITY}
                      valueLabel="Tiempo"
                    />
                  </div>
                </Styles.SectionInput>
              </Styles.SingleInput>
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
                  name={valueMessage}
                />
              </Styles.SingleInput>

              <InputCheckcondition
                data-val="true"
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
                    <Link href="/terminos">
                      <p className="ml-1 underline cursor-pointer">
                        Política de Privacidad
                      </p>
                    </Link>
                  </>
                }
                value={conditions}
              />

              <div>{errors.conditions}</div>

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
