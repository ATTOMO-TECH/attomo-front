import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navegation } from './styles';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { FORMVALUES } from '../../hook/types';
import { servicesAnimations } from '../animations/animations';
import Title from '../Text/title';
import { useCreateSubscriber } from '../../domain/useSubscriber';
import { handleFocus } from '../../hook/eventListener';

const registerSchema = Yup.object().shape({
  [FORMVALUES.EMAIL]: Yup.string()
    .email('El formato de email es incorrecto')
    .required('Email es requerido'),
});

export default function InputNew() {
  const [shouldShowActions] = useState(false);
  const [sendSuccesfull, setSuccesfull] = useState<boolean>(false);
  const [inputMail, setInputMail] = useState('');

  const handleInput = (mail: string) => {
    setInputMail(mail);
  };
  const [isActive, setActive] = useState(false);

  const toggleClass = (value: boolean) => {
    setActive(value);
  };
  const translate = getLocale();

  const { mutate } = useCreateSubscriber();
  const sendSubcriber = (values: any, action: any) => {
    const data = {
      [FORMVALUES.EMAIL]: values.email,
    };

    mutate(
      { data },
      {
        onSuccess: () => {
          setSuccesfull(true);
          action.resetForm();
        },
        onError: () => {
          action.resetForm();
        },
      },
    );
  };

  return (
    <>
      <Formik
        onSubmit={sendSubcriber}
        initialValues={{ [FORMVALUES.EMAIL]: '' }}
        validationSchema={registerSchema}
        validateOnMount>
        {({ touched, errors, handleSubmit, setFieldValue, handleBlur }) => (
          <Navegation.Form onSubmit={handleSubmit}>
            {!sendSuccesfull ? (
              <>
                <Navegation.BlockInput>
                  <Navegation.SectionInput
                    ismode={isActive ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                    onClick={() => toggleClass(isActive)}
                    onTouchStart={() => {
                      toggleClass(isActive);
                      handleFocus(FORMVALUES.EMAIL);
                    }}>
                    <p className="text-primary">{isActive}</p>
                    <Navegation.Input
                      type="email"
                      placeholder={translate.sendEmail}
                      id={FORMVALUES.EMAIL}
                      name={FORMVALUES.EMAIL}
                      onBlur={handleBlur}
                      onChange={(e: any) => {
                        handleInput(e.currentTarget.value);
                        setFieldValue(FORMVALUES.EMAIL, e.currentTarget.value);
                      }}
                    />
                    <Navegation.Button
                      onClick={() => handleSubmit()}
                      onTouchStart={() => handleSubmit()}
                      ismode={
                        inputMail.length > 0
                          ? BUTTON_ACTIVE.ON
                          : BUTTON_ACTIVE.OFF
                      }
                      type="submit">
                      <img
                        src="/icon/send_.svg"
                        width={30}
                        height={10}
                        alt="Attomo"
                      />
                    </Navegation.Button>
                  </Navegation.SectionInput>
                </Navegation.BlockInput>
                {touched.email && errors.email && (
                  <div className="text-red-500">{errors.email}</div>
                )}
              </>
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
                <Title size=" pt-2 leading-relaxed  text-sm">
                  Datos enviados correctamente
                </Title>
              </motion.div>
            )}
          </Navegation.Form>
        )}
      </Formik>
    </>
  );
}
