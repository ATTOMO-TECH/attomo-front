import { Formik } from 'formik';
import { useState } from 'react';
import { Styles } from './style';
import IconAnimate from '../button/icon';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputSelect from './select';
import { OPTIONDISPONIBILITY } from '../../const/constGlobal';
import InputCheckcondition from './inputCheckcondition';
import { createContact } from '../../domain/useContact';
import Conditions from './conditions';
import { getLocale } from '../../public/locales/getLocale';

export default function FormReserver() {
  const translate = getLocale();
  const [selected, setSelected] = useState('');
  const onChange = (e: any) => {
    setSelected(e.value);
  };

  const valueDate = FORMVALUES.DATE;
  const valueTime = FORMVALUES.TIME;
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueCompany = FORMVALUES.COMPANY;
  const valueMessage = FORMVALUES.MESSAGE;
  const check = FORMVALUES.CONDITIONS;

  const initialValues = {
    [valueName]: '',
    [valueLastName]: '',
    [valueCompany]: '',
    [valuePhone]: '',
    [valueEmail]: '',
    [valueDate]: '',
    [valueTime]: selected,
    [valueMessage]: '',
    [FORMVALUES.CONDITIONS]: false,
  };

  const { mutate } = createContact();
  const handleSubmitReserve = (data: any, action: any) => {
    const contact = {
      [FORMVALUES.FIRSTNAME]: data.valueName,
      [FORMVALUES.LASTNAME]: data.valueLastName,
      [FORMVALUES.PHONE]: data.valuePhone,
      [FORMVALUES.EMAIL]: data.valueEmail,
      [FORMVALUES.COMPANY]: data.valueCompany,
      [FORMVALUES.MESSAGE]: data.valueMessage,
      [FORMVALUES.CONDITIONS]: data.conditions,
      [FORMVALUES.DATE]: data.date,
      [FORMVALUES.TIME]: selected,
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
        // validationSchema={validationSchemaBooking}
        validateOnMount>
        {({ touched, errors, handleSubmit, setFieldValue }) => (
          <>
            <Styles.Form onSubmit={handleSubmit}>
              <Styles.SingleInput>
                <Styles.SectionInput>
                  <Styles.InputDate
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder="Fecha"
                    type="date"
                    name={FORMVALUES.DATE}
                  />

                  <div className="lg:w-full lg:mr-6">
                    <InputSelect
                      selected={selected}
                      options={OPTIONDISPONIBILITY}
                      valueLabel={translate.formTime}
                      name={FORMVALUES.TIME}
                      onChange={onChange}
                    />
                  </div>
                </Styles.SectionInput>
              </Styles.SingleInput>
              <Styles.SectionInput>
                <div className="w-full lg:pr-7 pt-5">
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder={translate.formName}
                    type="text"
                    name={FORMVALUES.FIRSTNAME}
                  />
                  {touched.valueName && errors.valueName && (
                    <div>{errors.valueName}</div>
                  )}
                </div>
                <div className="w-full lg:pr-5 lg:pt-5">
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder={translate.formLastName}
                    type="text"
                    name={FORMVALUES.LASTNAME}
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
                      placeholder={translate.formEmail}
                      type="email"
                      name={FORMVALUES.EMAIL}
                    />
                    {touched.valueName && errors.valueName && (
                      <div>{errors.valueName}</div>
                    )}
                  </div>
                  <div className="w-full lg:pr-5">
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formPhone}
                      type="tel"
                      name={FORMVALUES.PHONE}
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
                    placeholder={translate.formCompany}
                    type="text"
                    name={FORMVALUES.COMPANY}
                  />
                </div>
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
                <IconAnimate text={translate.formRent} mode />
              </Styles.BlockBtn>
            </Styles.Form>
          </>
        )}
      </Formik>
    </>
  );
}
