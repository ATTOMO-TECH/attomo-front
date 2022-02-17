import { Formik } from 'formik';
import Link from 'next/link';
import { Styles } from './style';
import IconAnimate from '../button/icon';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputSelect from './select';
import { OPTIONDISPONIBILITY } from '../../const/constGlobal';
import InputCheckcondition from './inputCheckcondition';
import { createContact } from '../../domain/useContact';
import { validationSchemaBooking } from './validations';

export default function FormReserver() {
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueCompany = FORMVALUES.COMPANY;
  const valueMessage = FORMVALUES.MESSAGE;
  const check = false;

  const initialValues = {
    [valueName]: '',
    [valueLastName]: '',
    [valueCompany]: '',
    [valuePhone]: '',
    [valueEmail]: '',
    check: false,
  };

  const { mutate } = createContact();
  const handleSubmitReserve = (data: any, action: any) => {
    const contact = {
      [FORMVALUES.FIRSTNAME]: valueName,
      [FORMVALUES.LASTNAME]: valueLastName,
      [FORMVALUES.PHONE]: valuePhone,
      [FORMVALUES.EMAIL]: data.size,
      [FORMVALUES.COMPANY]: data.notes,
      [FORMVALUES.MESSAGE]: data.stops,
    };
    mutate(contact, {
      onSuccess: () => {
        action.resetForm();
      },
      onError: () => {
        action.resetForm();
      },
    });
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmitReserve}
        initialValues={initialValues}
        validationSchema={validationSchemaBooking}
        validateOnMount>
        {({ touched, errors, handleSubmit }) => (
          <>
            <Styles.Form onSubmit={handleSubmit}>
              <Styles.SingleInput>
                <Styles.SectionInput>
                  <Styles.InputDate
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder="Fecha"
                    type="date"
                    name={valueName}
                  />

                  <div className="lg:w-full lg:mr-6  ">
                    <InputSelect
                      options={OPTIONDISPONIBILITY}
                      valueLabel="Tiempo"
                    />
                  </div>
                </Styles.SectionInput>
              </Styles.SingleInput>
              <Styles.SectionInput>
                <div className="w-full lg:pr-7 pt-5">
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder="Nombre *"
                    type="text"
                    name={valueName}
                  />
                  {touched.valueName && errors.valueName && (
                    <div>{errors.valueName}</div>
                  )}
                </div>
                <div className="w-full lg:pr-5 pt-5">
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder="Apellidos *"
                    type="text"
                    name={valueLastName}
                  />
                  {touched.valueName && errors.valueName && (
                    <div>{errors.valueName}</div>
                  )}
                </div>
              </Styles.SectionInput>
              <Styles.SingleInput>
                <Styles.SectionInput>
                  <div className="w-full lg:pr-5">
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder="Email *"
                      type="email"
                      name={valueEmail}
                    />
                    {touched.valueName && errors.valueName && (
                      <div>{errors.valueName}</div>
                    )}
                  </div>
                  <div className="w-full lg:pr-5">
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder="Móvil *"
                      type="tel"
                      name={valuePhone}
                    />
                    {touched.valueName && errors.valueName && (
                      <div>{errors.valueName}</div>
                    )}
                  </div>
                </Styles.SectionInput>
              </Styles.SingleInput>
              <Styles.SingleInput>
                <div className="w-full lg:pr-5">
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.OFF}
                    placeholder="Empresa/Organización *"
                    type="text"
                    name={valueMessage}
                  />
                </div>
              </Styles.SingleInput>

              <InputCheckcondition
                data-val="true"
                color="text-primary text-xs"
                text={
                  <div className="flex flex-wrap">
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
                  </div>
                }
                value={check}
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
