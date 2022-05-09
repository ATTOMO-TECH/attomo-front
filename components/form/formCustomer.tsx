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
import { servicesAnimations } from '../animations/animations';
import Title from '../Text/title';
import { validationSchemaColaborator } from './validations';

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
          validationSchema={validationSchemaColaborator}
          validateOnMount>
          {({
            touched,
            errors,
            setFieldValue,
            handleSubmit,
            isValid,
            dirty,
          }) => (
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
                    {touched.firstname && errors.firstname && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueName, '')}
                        onTouchStart={() => setFieldValue(valueName, '')}
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
                        onTouchStart={() => setFieldValue(valueLastName, '')}
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
                        onTouchStart={() => setFieldValue(valueEmail, '')}
                      />
                    )}
                    {touched.email && errors.email && (
                      <Styles.Error className="-mt-4 lg:mt-0">
                        {errors.email}
                      </Styles.Error>
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
                        onTouchStart={() => setFieldValue(valuePhone, '')}
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
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formMessage}
                      type="textarea"
                      name={FORMVALUES.MESSAGE}
                    />
                    {touched.message && errors.message && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueMessage, '')}
                        onTouchStart={() => setFieldValue(valueMessage, '')}
                      />
                    )}
                    {touched.message && errors.message && (
                      <Styles.Error>{errors.message}</Styles.Error>
                    )}
                  </Styles.BlockInputOnly>
                </Styles.BlockInputEnd>
                <InputCheckcondition
                  color="text-primary text-xs pt-6"
                  value={FORMVALUES.CONDITIONS}
                  onClick={(e: any) => setFieldValue(check, e)}
                  onTouched={(e: any) => setFieldValue(check, e)}>
                  <Conditions />
                </InputCheckcondition>
                {touched.conditionsAccepted && errors.conditionsAccepted && (
                  <Styles.Error>{errors.conditionsAccepted}</Styles.Error>
                )}

                <Styles.BlockSendButton>
                  <Styles.BtnSend
                    type="submit"
                    ismode={
                      !isValid && dirty ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF
                    }>
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
          <Title size=" lg:py-32 w-full text-center pt-10 leading-relaxed lg:pr-10 lg:text-4xl pb-2 text-3xl w-2/6 m-auto">
            Datos enviados correctamente
          </Title>
        </motion.div>
      )}
    </>
  );
}
