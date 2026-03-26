import { useRouter } from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navegation } from './styles';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { FORMVALUES } from '../../hook/types';
import { servicesAnimations } from '../animations/animations';
import ParagraphText from '../Text/paragraphText';
import { useCreateSubscriber } from '../../domain/useSubscriber';
import InputForNews from './inputForNews';
import { handleBlur } from '../../hook/eventListener';
import { useOnClickOutside } from '../../hook/longPress';
import InputCheckBoxConditionFooter from '../form/inputCheckBoxConditionFooter';

const registerSchema = Yup.object().shape({
  [FORMVALUES.EMAIL]: Yup.string()
    .email('El formato de email es incorrecto')
    .required('Email es requerido'),
  [FORMVALUES.CONDITIONS]: Yup.boolean().oneOf(
    [true],
    'Debes aceptar las condiciones',
  ),
});
interface Props {
  idInput: string;
}

export default function InputNew({ idInput }: Props) {
  const formRef = useRef();
  const [shouldShowActions] = useState(false);
  const [sendSuccesfull, setSuccesfull] = useState<boolean>(false);
  const [inputMail, setInputMail] = useState('');
  const [isActive, setActive] = useState(false);

  const initialValues = {
    [FORMVALUES.EMAIL]: '',
    [FORMVALUES.CONDITIONS]: false,
  };

  const handleInput = (mail: string) => {
    setInputMail(mail);
  };

  const toggleClass = (value: boolean) => {
    setActive(value);
  };
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale('es'));
  let { locale } = router;

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  if (locale === '/') {
    locale = 'es';
  }

  const { mutate } = useCreateSubscriber();
  const sendSubcriber = (values: any, action: any) => {
    const data = {
      [FORMVALUES.EMAIL]: values.email,
      [FORMVALUES.CONDITIONS]: values.conditionsAccepted,
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

  // useOnClickOutside(formRef, () => {
  //   handleBlur(idInput);
  // });

  useOnClickOutside(formRef, () => {
    handleBlur(idInput);
    handleBlur(FORMVALUES.CONDITIONS);
  });

  return (
    <>
      <Formik
        onSubmit={sendSubcriber}
        initialValues={initialValues}
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
                      <Image
                        src="/icon/send_.svg"
                        width={30}
                        height={10}
                        alt="Attomo"
                      />
                    </Navegation.Button>
                  </Navegation.SectionInput>
                </Navegation.BlockInput>
                {touched.email && errors.email && (
                  <Navegation.ErrorCondition>
                    {errors.email}
                  </Navegation.ErrorCondition>
                )}
                {touched.conditionsAccepted && errors.conditionsAccepted && (
                  <Navegation.ErrorCondition>
                    {errors.conditionsAccepted}
                  </Navegation.ErrorCondition>
                )}
                <InputCheckBoxConditionFooter
                  id={FORMVALUES.CONDITIONS}
                  color="text-primary pt-6"
                  value={FORMVALUES.CONDITIONS}
                  onClick={(e: any) => setFieldValue(FORMVALUES.CONDITIONS, e)}
                />
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
                initial={{ opacity: 0.1, y: '50%' }}>
                <ParagraphText size=" pt-2 leading-relaxed  text-sm">
                  {translate.newsletterSubscription}
                </ParagraphText>
              </motion.div>
            )}
          </Navegation.Form>
        )}
      </Formik>
    </>
  );
}
