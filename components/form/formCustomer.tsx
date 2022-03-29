import { Formik } from 'formik';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputCheckcondition from './inputCheckcondition';
import { createContact } from '../../domain/useContact';
import Conditions from './conditions';
import { getLocale } from '../../public/locales/getLocale';
import Sucesfull from './succesfull';
import { servicesAnimations } from '../animations/animations';

export default function FormCustomer() {
  const [shouldShowActions] = useState(false);
  const [sendSuccesfull, setSuccesfull] = useState<boolean>(false);
  const translate = getLocale();
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueMessage = FORMVALUES.MESSAGE;
  const check = FORMVALUES.CONDITIONS;

  const initialValues = {
    [FORMVALUES.FIRSTNAME]: '',
    [FORMVALUES.LASTNAME]: '',
    [FORMVALUES.PHONE]: '',
    [FORMVALUES.EMAIL]: '',
    [FORMVALUES.COMPANY]: '',
    [FORMVALUES.MESSAGE]: '',
    [FORMVALUES.CONDITIONS]: false,
  };
  const { mutate } = createContact();
  const handleSumitCustomer = (values: any, action: any) => {
    const data = {
      [FORMVALUES.FIRSTNAME]: values.firstname,
      [FORMVALUES.LASTNAME]: values.lastname,
      [FORMVALUES.PHONE]: values.mobile,
      [FORMVALUES.EMAIL]: values.email,
      [FORMVALUES.COMPANY]: values.company,
      [FORMVALUES.MESSAGE]: values.message,
      [FORMVALUES.CONDITIONS]: values.conditionsAccepted,
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
          onSubmit={handleSumitCustomer}
          initialValues={initialValues}
          validateOnMount>
          {({ touched, errors, setFieldValue, handleSubmit }) => (
            <>
              <Styles.Form onSubmit={handleSubmit}>
                <Styles.BlockInputsCenter>
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formName}
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
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formLastName}
                      type="text"
                      name={FORMVALUES.LASTNAME}
                    />
                    {touched.valueLastName && errors.valueLastName && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueLastName, '')}
                      />
                    )}
                  </Styles.BlockInput>
                  {touched.valueLastName && errors.valueLastName && (
                    <Styles.Error>{errors.valueLastName}</Styles.Error>
                  )}
                </Styles.BlockInputsCenter>
                <Styles.BlockInputsCenter>
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formEmail}
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
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formPhone}
                      type="number"
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
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formMessage}
                      type="textarea"
                      name={FORMVALUES.MESSAGE}
                    />
                    {touched.valueMessage && errors.valueMessage && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueMessage, '')}
                      />
                    )}
                  </Styles.BlockInputOnly>
                  {touched.valueMessage && errors.valueMessage && (
                    <Styles.Error>{errors.valueMessage}</Styles.Error>
                  )}
                </Styles.BlockInputEnd>
                <InputCheckcondition
                  color="text-primary text-xs pt-6"
                  value={FORMVALUES.CONDITIONS}
                  onClick={(e: any) => setFieldValue(check, e)}>
                  <Conditions />
                </InputCheckcondition>
                {touched.check && errors.check && (
                  <Styles.Error>{errors.check}</Styles.Error>
                )}

                <Styles.BlockSendButton>
                  <Styles.BtnSend type="submit">
                    {translate.formSend}
                  </Styles.BtnSend>
                </Styles.BlockSendButton>
              </Styles.Form>
            </>
          )}
        </Formik>
      ) : (
        <motion.div
          animate={shouldShowActions}
          variants={servicesAnimations}
          className="actions"
          transition={{
            type: 'magic',
            stiffness: 100,
            duration: 0.5,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: '50%' }}>
          <Sucesfull>Datos enviados correctamente</Sucesfull>
        </motion.div>
      )}
    </>
  );
}
