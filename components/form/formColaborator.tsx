import { Formik } from 'formik';

import { Styles } from './style';
import IconAnimate from '../button/icon';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import Subtext from '../Text/subText';
import InputRadio from './inputRadio';
import {
  CONDITIONFORM,
  DEPARTMENT,
  DEPARTMENTS,
  FORMPARTOF,
} from '../../const/constGlobal';
import InputCheck from './inputCheck';
import InputCheckcondition from './inputCheckcondition';
import { validationSchemaColaborator } from './validations';
import { createContactColaborator } from '../../domain/useContact';
import Conditions from './conditions';

export default function FormColaborator() {
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueLink = FORMVALUES.LINK;
  const valueCompany = FORMVALUES.COMPANY;
  const valuepartOf = FORMVALUES.PARTOF;
  const valueSpeciality = FORMVALUES.SPECIALITY;
  const valueMessage = FORMVALUES.MESSAGE;
  const check = FORMVALUES.CONDITIONS;

  const initialValues = {
    [valueName]: '',
    [valueLastName]: '',
    [valueLink]: '',
    [valuePhone]: '',
    [valueEmail]: '',
    [valueCompany]: '',
    [valueMessage]: '',
    [valuepartOf]: '',
    [valueSpeciality]: [],
    check: false,
  };

  const { mutate } = createContactColaborator();
  const handleSubmitContact = (action: any) => {
    const contact = {
      [FORMVALUES.FIRSTNAME]: valueName,
      [FORMVALUES.LASTNAME]: valueLastName,
      [FORMVALUES.PHONE]: valuePhone,
      [FORMVALUES.EMAIL]: valueEmail,
      [FORMVALUES.COMPANY]: valueCompany,
      [FORMVALUES.MESSAGE]: valueMessage,
      [FORMVALUES.COMPANY]: valueCompany,
      [FORMVALUES.PARTOF]: valuepartOf,
      [FORMVALUES.SPECIALITY]: [valueSpeciality],
      check,
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
        {({ touched, errors, handleSubmit, values, setFieldValue }) => (
          <>
            <Styles.Form onSubmit={handleSubmit}>
              <Subtext size="lg:text-sm w-full pb-10 font-PrimarySerif">
                ¿Quieres formar parte de nuestro equipo o colaborar como
                partner? *
              </Subtext>
              <Styles.BlockSelect>
                {FORMPARTOF.map((valuesCheck) => (
                  <Styles.AlingSelect
                    key={`Radio${values.value}`}
                    onClick={() => setFieldValue(valueSpeciality, '')}>
                    <InputRadio
                      text={valuesCheck.text}
                      value={valuesCheck.value}
                      onChange={(e: any) => setFieldValue(valuepartOf, e)}
                    />
                  </Styles.AlingSelect>
                ))}
              </Styles.BlockSelect>
              <Subtext size="lg:text-sm w-full pb-10 font-PrimarySerif pt-10">
                ¿Cuál es tu especialidad? *
              </Subtext>
              {values[valuepartOf] === CONDITIONFORM.TEAM ? (
                <Styles.BlockSelectSecond>
                  {DEPARTMENT.map((valuesCheck) => (
                    <Styles.AlingSelectSecond key={`check${valuesCheck.value}`}>
                      <InputCheck
                        text={valuesCheck.label}
                        value={FORMVALUES.SPECIALITY}
                        onChange={(e: any) => setFieldValue(valueSpeciality, e)}
                      />
                    </Styles.AlingSelectSecond>
                  ))}
                </Styles.BlockSelectSecond>
              ) : (
                <Styles.BlockSelectSecond>
                  {DEPARTMENTS.map((valueRadio) => (
                    <Styles.AlingSelectSecond key={`check${valueRadio.value}`}>
                      <InputCheck
                        text={valueRadio.label}
                        value={FORMVALUES.SPECIALITY}
                        onChange={(e: any) => setFieldValue(valueSpeciality, e)}
                      />
                    </Styles.AlingSelectSecond>
                  ))}
                </Styles.BlockSelectSecond>
              )}

              <Styles.SectionInput>
                <Styles.BlockSections>
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
                    <Styles.Error>{errors.valueName}</Styles.Error>
                  )}
                </Styles.BlockSections>

                <Styles.SubBlock>
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
                    <Styles.Error>{errors.valueName}</Styles.Error>
                  )}
                </Styles.SubBlock>
              </Styles.SectionInput>
              <Styles.SectionInput>
                <Styles.BlockSectionMargin>
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
                    <Styles.Error>{errors.valueEmail}</Styles.Error>
                  )}
                </Styles.BlockSectionMargin>

                <Styles.BlockSectionMarginTop>
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
                    <Styles.Error>{errors.valuePhone}</Styles.Error>
                  )}
                </Styles.BlockSectionMarginTop>
              </Styles.SectionInput>
              <Styles.SingleInput>
                {values[valuepartOf] === CONDITIONFORM.TEAM ? (
                  <Styles.BlockSectionMarginTop>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder="Enlace al portfolio o perfil de LinkedIn"
                      type="text"
                      name={FORMVALUES.COMPANY}
                    />
                  </Styles.BlockSectionMarginTop>
                ) : (
                  <Styles.BlockSectionMarginTop>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder="Empresa/Organización"
                      type="text"
                      name={FORMVALUES.COMPANY}
                    />
                  </Styles.BlockSectionMarginTop>
                )}
              </Styles.SingleInput>
              <Styles.SingleInput>
                <Styles.BlockSectionMarginTop>
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
                    <Styles.Error>{errors.valueMessage}</Styles.Error>
                  )}
                </Styles.BlockSectionMarginTop>
              </Styles.SingleInput>

              <InputCheckcondition
                color="text-primary text-xs pt-6"
                value={FORMVALUES.CONDITIONS}
                onChange={(e: any) => setFieldValue(check, e)}>
                <Conditions />
              </InputCheckcondition>
              {touched.check && errors.check && (
                <Styles.Error>{errors.check}</Styles.Error>
              )}
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
