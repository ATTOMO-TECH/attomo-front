import { Formik } from 'formik';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputCheckcondition from './inputCheckcondition';
import { createContact } from '../../domain/useContact';
import { getLocale } from '../../public/locales/getLocale';
import { servicesAnimations } from '../animations/animations';
import Title from '../Text/title';
import { validationSchemaContact } from './validations';
import {
  handlersFuntionFocus,
  handlersFuntion,
  useOnClickOutside,
} from '../../hook/longPress';
import { handleBlur } from '../../hook/eventListener';

export default function FormCustomer() {
  const formRef = useRef();
  const [shouldShowActions] = useState(false);
  const [sendSuccesfull, setSuccesfull] = useState<boolean>(false);
  const translate = getLocale();
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueMessage = FORMVALUES.MESSAGE;

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
          setSuccesfull(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        onError: () => {
          action.resetForm();
        },
      },
    );
  };
  useOnClickOutside(formRef, () => {
    handleBlur(FORMVALUES.FIRSTNAME);
    handleBlur(FORMVALUES.LASTNAME);
    handleBlur(FORMVALUES.PHONE);
    handleBlur(FORMVALUES.EMAIL);
    handleBlur(FORMVALUES.COMPANY);
    handleBlur(FORMVALUES.MESSAGE);
    handleBlur(FORMVALUES.CONDITIONS);
  });

  return (
    <>
      {!sendSuccesfull ? (
        <Formik
          onSubmit={handleSumitCustomer}
          initialValues={initialValues}
          validationSchema={validationSchemaContact}
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
              <Styles.Form onSubmit={handleSubmit} ref={formRef}>
                <Styles.BlockInputsCenter>
                  <Styles.BlockInput
                    {...handlersFuntionFocus(FORMVALUES.FIRSTNAME)}>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formName}
                      type="text"
                      id={FORMVALUES.FIRSTNAME}
                      name={FORMVALUES.FIRSTNAME}
                    />
                    {touched.firstname && errors.firstname && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueName, '')}
                        onTouchStart={() => setFieldValue(valueName, '')}
                      />
                    )}
                    {touched.firstname && errors.firstname && (
                      <Styles.Error className="-bottom-4  ">
                        {errors.firstname}
                      </Styles.Error>
                    )}
                  </Styles.BlockInput>
                  <Styles.BlockInput
                    {...handlersFuntionFocus(FORMVALUES.LASTNAME)}>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formLastName}
                      type="text"
                      id={FORMVALUES.LASTNAME}
                      name={FORMVALUES.LASTNAME}
                    />
                    {touched.lastname && errors.lastname && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueLastName, '')}
                        onTouchStart={() => setFieldValue(valueLastName, '')}
                      />
                    )}
                    {touched.lastname && errors.lastname && (
                      <Styles.Error className="-bottom-4  ">
                        {errors.lastname}
                      </Styles.Error>
                    )}
                  </Styles.BlockInput>
                </Styles.BlockInputsCenter>
                <Styles.BlockInputsCenter>
                  <Styles.BlockInput
                    {...handlersFuntionFocus(FORMVALUES.EMAIL)}>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formEmail}
                      type="email"
                      name={FORMVALUES.EMAIL}
                      id={FORMVALUES.EMAIL}
                    />
                    {touched.email && errors.email && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueEmail, '')}
                        onTouchStart={() => setFieldValue(valueEmail, '')}
                      />
                    )}
                    {touched.email && errors.email && (
                      <Styles.Error>{errors.email}</Styles.Error>
                    )}
                  </Styles.BlockInput>
                  <Styles.BlockInput
                    {...handlersFuntionFocus(FORMVALUES.PHONE)}>
                    <Styles.Input
                      id={FORMVALUES.PHONE}
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formPhone}
                      type="tel"
                      maxLength={12}
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
                  <Styles.BlockInputOnly
                    {...handlersFuntionFocus(FORMVALUES.COMPANY)}>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      id={FORMVALUES.COMPANY}
                      placeholder={translate.formCompany}
                      type="text"
                      name={FORMVALUES.COMPANY}
                    />
                  </Styles.BlockInputOnly>
                </Styles.BlockInputEnd>
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly
                    {...handlersFuntionFocus(FORMVALUES.MESSAGE)}>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formMessage}
                      type="textarea"
                      name={FORMVALUES.MESSAGE}
                      id={FORMVALUES.MESSAGE}
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
                <div {...handlersFuntionFocus(FORMVALUES.CONDITIONS)}>
                  <InputCheckcondition
                    color="text-primary text-xs pt-6"
                    value={FORMVALUES.CONDITIONS}
                    onClick={(e: any) =>
                      setFieldValue(FORMVALUES.CONDITIONS, e)
                    }
                  />
                  {touched.conditionsAccepted && errors.conditionsAccepted && (
                    <Styles.Error>{errors.conditionsAccepted}</Styles.Error>
                  )}
                </div>
                <Styles.BlockSendButton>
                  <Styles.BtnSend
                    {...handlersFuntion(handleSubmit)}
                    onClick={handleSubmit}
                    ismode={
                      !(isValid && dirty) ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF
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
          <Title size=" w-full text-center pt-10 leading-relaxed  text-3xl m-auto lg:w-3/6">
            ¡Bienvenido a Attomo, bienvenido al principio de algo muy grande!
          </Title>
        </motion.div>
      )}
    </>
  );
}
