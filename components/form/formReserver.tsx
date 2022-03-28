import { Formik } from 'formik';
import { useState } from 'react';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputSelect from './select';
import { OPTIONDISPONIBILITY } from '../../const/constGlobal';
import InputCheckcondition from './inputCheckcondition';
import { createReserve } from '../../domain/useContact';
import Conditions from './conditions';
import { getLocale } from '../../public/locales/getLocale';
import CalendarPickerInput from '../calendar/input/calendar';
import { validationSchemaBooking } from './validations';
import Sucesfull from './succesfull';

export default function FormReserver() {
  const translate = getLocale();
  const [selected, setSelected] = useState('');
  const [sendSuccesfull, setSuccesfull] = useState<boolean>(false);
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
  const check = FORMVALUES.CONDITIONS;

  const initialValues = {
    [valueName]: '',
    [valueLastName]: '',
    [valueCompany]: '',
    [valuePhone]: '',
    [valueEmail]: '',
    [valueDate]: '',
    [valueTime]: selected,
    [FORMVALUES.CONDITIONS]: false,
  };

  const { mutate } = createReserve();

  const handleSubmitReserve = (dataValues: any, action: any) => {
    const data = {
      [FORMVALUES.FIRSTNAME]: dataValues.firstname,
      [FORMVALUES.LASTNAME]: dataValues.lastname,
      [FORMVALUES.PHONE]: dataValues.mobile,
      [FORMVALUES.EMAIL]: dataValues.email,
      [FORMVALUES.COMPANY]: dataValues.company,
      [FORMVALUES.CONDITIONS]: dataValues.conditionsAccepted,
      [FORMVALUES.DATE]: dataValues.date,
      [FORMVALUES.TIME]: selected,
    };

    mutate(
      { data },
      {
        onSuccess: () => {
          action.resetForm();
          setSuccesfull(true);
        },
        onError: () => {
          action.resetForm();
        },
      },
    );
  };

  return (
    <>
      {!sendSuccesfull ? (
        <Formik
          onSubmit={handleSubmitReserve}
          initialValues={initialValues}
          validationSchema={validationSchemaBooking}
          validateOnMount>
          {({ touched, errors, handleSubmit, setFieldValue }) => (
            <>
              <Styles.Form onSubmit={handleSubmit}>
                <Styles.SectionInputs>
                  <Styles.BlockInput>
                    <Styles.MessageError>
                      <CalendarPickerInput
                        handleValue={(e: any) => {
                          setFieldValue(FORMVALUES.DATE, e);
                        }}
                      />
                    </Styles.MessageError>
                  </Styles.BlockInput>
                  <Styles.BlockInput>
                    <InputSelect
                      selected={selected}
                      options={OPTIONDISPONIBILITY}
                      valueLabel={translate.formTime}
                      name={FORMVALUES.TIME}
                      onChange={onChange}
                    />
                  </Styles.BlockInput>
                </Styles.SectionInputs>
                <Styles.BlockInputsCenter>
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formName}
                      type="text"
                      name={FORMVALUES.FIRSTNAME}
                    />
                    {touched.firstname && errors.firstname && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueName, '')}
                      />
                    )}
                    {touched.firstname && errors.firstname && (
                      <Styles.Error>{errors.firstname}</Styles.Error>
                    )}
                  </Styles.BlockInput>
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formLastName}
                      type="text"
                      name={FORMVALUES.LASTNAME}
                    />
                    {touched.lastname && errors.lastname && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueLastName, '')}
                      />
                    )}
                    {touched.lastname && errors.lastname && (
                      <Styles.Error>{errors.lastname}</Styles.Error>
                    )}
                  </Styles.BlockInput>
                </Styles.BlockInputsCenter>
                <Styles.BlockInputsCenter>
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formEmail}
                      type="email"
                      name={FORMVALUES.EMAIL}
                    />
                    {touched.email && errors.email && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueEmail, '')}
                      />
                    )}
                    {touched.email && errors.email && (
                      <Styles.Error>{errors.email}</Styles.Error>
                    )}
                  </Styles.BlockInput>

                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formPhone}
                      type="number"
                      name={FORMVALUES.PHONE}
                    />
                    {touched.mobile && errors.mobile && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valuePhone, '')}
                      />
                    )}
                    {touched.mobile && errors.mobile && (
                      <Styles.Error>{errors.mobile}</Styles.Error>
                    )}
                  </Styles.BlockInput>
                </Styles.BlockInputsCenter>
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formCompany}
                      type="text"
                      name={FORMVALUES.COMPANY}
                    />
                  </Styles.BlockInputOnly>
                </Styles.BlockInputEnd>
                <InputCheckcondition
                  color="text-primary text-xs pt-6"
                  value={FORMVALUES.CONDITIONS}
                  onClick={(e: any) => setFieldValue(check, e)}>
                  <Conditions />
                </InputCheckcondition>
                <span className="absolute w-2/6">
                  {touched.conditionsAccepted && errors.conditionsAccepted && (
                    <Styles.Error>{errors.conditionsAccepted}</Styles.Error>
                  )}
                </span>

                <Styles.BlockSendButton>
                  <Styles.BtnSend type="submit">
                    {translate.formRent}
                  </Styles.BtnSend>
                </Styles.BlockSendButton>
              </Styles.Form>
            </>
          )}
        </Formik>
      ) : (
        <Sucesfull />
      )}
    </>
  );
}
