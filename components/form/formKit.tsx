import { Formik } from 'formik';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputCheckcondition from './inputCheckcondition';
import { createKit } from '../../domain/useContact';
import { getLocale } from '../../public/locales/getLocale';
import { servicesAnimations } from '../animations/animations';
import Title from '../Text/title';
import { validationSchemaKit } from './validations';
import { handleFocus } from '../../hook/eventListener';

export default function FormKit() {
  const [shouldShowActions] = useState(false);
  const [sendSuccesfull, setSuccesfull] = useState<boolean>(false);
  const translate = getLocale();
  const valueName = FORMVALUES.NAME;
  const valuePhone = FORMVALUES.PHONE2;
  const valueEmail = FORMVALUES.EMAIL;
  const valueMessage = FORMVALUES.MESSAGE;

  const initialValues = {
    [FORMVALUES.NAME]: '',
    [FORMVALUES.PHONE2]: '',
    [FORMVALUES.EMAIL]: '',
    [FORMVALUES.MESSAGE]: '',
    [FORMVALUES.CONDITIONS]: false,
  };
  const { mutate } = createKit();

  const handleSumitCustomer = (values: any) => {
    const data = {
      [FORMVALUES.NAME]: values.name,
      [FORMVALUES.PHONE2]: values.phone,
      [FORMVALUES.EMAIL]: values.email,
      [FORMVALUES.MESSAGE]: values.message,
    };

    mutate(
      { data },
      {
        onSuccess: () => {
          setSuccesfull(true);
        },
        onError: () => {
          setSuccesfull(false);
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
          validationSchema={validationSchemaKit}
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
              <Styles.FormKit onSubmit={handleSubmit}>
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formName}
                      type="text"
                      id={FORMVALUES.NAME}
                      onTouchStart={() => handleFocus(FORMVALUES.NAME)}
                      name={FORMVALUES.NAME}
                    />
                    {touched.name && errors.name && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueName, '')}
                        onTouchStart={() => setFieldValue(valueName, '')}
                      />
                    )}
                    {touched.name && errors.name && (
                      <Styles.Error>{errors.name}</Styles.Error>
                    )}
                  </Styles.BlockInputOnly>
                </Styles.BlockInputEnd>
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formEmail}
                      type="email"
                      name={FORMVALUES.EMAIL}
                      id={FORMVALUES.EMAIL}
                      onTouchStart={() => handleFocus(FORMVALUES.EMAIL)}
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
                  </Styles.BlockInputOnly>
                </Styles.BlockInputEnd>
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly>
                    <Styles.Input
                      id={FORMVALUES.PHONE2}
                      onTouchStart={() => handleFocus(FORMVALUES.PHONE2)}
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formPhone}
                      type="tel"
                      maxLength={9}
                      pattern="[0-9]{10}"
                      name={FORMVALUES.PHONE2}
                    />
                    {touched.phone && errors.phone && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valuePhone, '')}
                        onTouchStart={() => setFieldValue(valuePhone, '')}
                      />
                    )}
                    {touched.phone && errors.phone && (
                      <Styles.Error>{errors.phone}</Styles.Error>
                    )}
                  </Styles.BlockInputOnly>
                </Styles.BlockInputEnd>
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formMessage}
                      type="textarea"
                      name={FORMVALUES.MESSAGE}
                      id={FORMVALUES.MESSAGE}
                      onTouchStart={() => handleFocus(FORMVALUES.MESSAGE)}
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
                  onClick={(e: any) => setFieldValue(FORMVALUES.CONDITIONS, e)}
                  onTouched={(e: any) =>
                    setFieldValue(FORMVALUES.CONDITIONS, e)
                  }
                />
                {touched.conditionsAccepted && errors.conditionsAccepted && (
                  <Styles.Error>{errors.conditionsAccepted}</Styles.Error>
                )}
                <Styles.BlockSendButton>
                  <Styles.BtnSend
                    onTouchStart={handleSubmit}
                    onClick={handleSubmit}
                    ismode={
                      !(isValid && dirty) ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF
                    }>
                    {translate.formSend}
                  </Styles.BtnSend>
                </Styles.BlockSendButton>
              </Styles.FormKit>
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
            ¡Gracias por elegirnos como agentes digitalizadores! Nos pondremos
            en contacto contigo lo antes posible
          </Title>
        </motion.div>
      )}
    </>
  );
}
