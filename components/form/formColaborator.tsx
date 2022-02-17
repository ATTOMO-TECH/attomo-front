import { Formik } from 'formik';
import Link from 'next/link';
import { Styles } from './style';
import IconAnimate from '../button/icon';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import Subtext from '../Text/subText';
import InputRadio from './inputRadio';
import { DEPARTMENT, FORMPARTOF } from '../../const/constGlobal';
import InputCheck from './inputCheck';
import InputCheckcondition from './inputCheckcondition';
import { validationSchemaColaborator } from './validations';
import { createContact } from '../../domain/useContact';

export default function FormColaborator() {
  const valuepartOf = FORMVALUES.PARTOF;
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueLink = FORMVALUES.LINK;
  const valueMessage = FORMVALUES.MESSAGE;
  const check = false;

  const initialValues = {
    [valueName]: '',
    [valueLastName]: '',
    [valueLink]: '',
    [valuePhone]: '',
    [valueEmail]: '',
    [valueMessage]: '',
    [valuepartOf]: '',
  };

  const { mutate } = createContact();
  const handleSubmitContact = (data: any, action: any) => {
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
        onSubmit={handleSubmitContact}
        initialValues={initialValues}
        validationSchema={validationSchemaColaborator}
        validateOnMount>
        {({ touched, errors, handleSubmit }) => (
          <>
            <Styles.Form onSubmit={handleSubmit}>
              <Subtext size="lg:text-sm w-full pb-10 font-PrimarySerif">
                ¿Quieres formar parte de nuestro equipo o colaborar como
                partner? *
              </Subtext>
              <div className="w-full flex flex-wrap pt-5 text-white font-PrimarySerif font-thin text-sm">
                {FORMPARTOF.map((values) => (
                  <div className="w-3/6" key={`Radio${values.value}`}>
                    <InputRadio text={values.text} value={values.value} />
                  </div>
                ))}
                {touched.valueName && errors.valueName && (
                  <div className="text-red-500 absolute text-PrimarySerif text-sm ">
                    {errors.valueName}
                  </div>
                )}
              </div>
              <Subtext size="lg:text-sm w-full pb-10 font-PrimarySerif pt-10">
                ¿Cuál es tu especialidad? *
              </Subtext>
              <div className="w-full flex flex-wrap pt-5 text-white font-PrimarySerif font-thin text-sm pb-10">
                {DEPARTMENT.map((values) => (
                  <div className="w-2/6" key={`check${values.value}`}>
                    <InputCheck text={values.label} value={values.value} />
                  </div>
                ))}
              </div>
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
                  placeholder="Enlace al portfolio o al perfil de LinkedIn *"
                  type="text"
                  name={valueLink}
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
                value={check}
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
