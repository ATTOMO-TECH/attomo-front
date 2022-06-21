import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Navegation } from './styles';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { FORMVALUES } from '../../hook/types';
import { servicesAnimations } from '../animations/animations';
import Title from '../Text/title';
import { useCreateSubscriber } from '../../domain/useSubscriber';
import InputForNews from './inputForNews';
import { handleBlur } from '../../hook/eventListener';
import { useOnClickOutside } from '../../hook/longPress';

const registerSchema = Yup.object().shape({
  [FORMVALUES.EMAIL]: Yup.string()
    .email('El formato de email es incorrecto')
    .required('Email es requerido'),
});
interface Props {
  idInput: string;
}

export default function InputNew({ idInput }: Props) {
  const formRef = useRef();
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

  useOnClickOutside(formRef, () => {
    handleBlur(idInput);
  });

  return (
    <>
      <Formik
        onSubmit={sendSubcriber}
        initialValues={{ [FORMVALUES.EMAIL]: '' }}
        validationSchema={registerSchema}
        validateOnMount>
        {({ touched, errors, handleSubmit, setFieldValue }) => (
          <Navegation.Form onSubmit={handleSubmit} ref={formRef}>
            {!sendSuccesfull ? (
              <>
                <Navegation.BlockInput>
                  <Navegation.SectionInput
                    ismode={isActive ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                    onClick={() => toggleClass(isActive)}>
                    <InputForNews
                      idInput={idInput}
                      toggleClass={toggleClass}
                      isActive={isActive}
                      translate={translate}
                      handleInput={handleInput}
                      setFieldValue={setFieldValue}
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
                  <Navegation.Error>{errors.email}</Navegation.Error>
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
                  ¡Gracias por tu confianza! Ya eres parte del Attomo.
                </Title>
              </motion.div>
            )}
          </Navegation.Form>
        )}
      </Formik>
    </>
  );
}
