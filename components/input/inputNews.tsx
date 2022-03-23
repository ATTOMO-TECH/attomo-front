import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Navegation } from './styles';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { FORMVALUES } from '../../hook/types';
import { useCreateSubscriber } from '../../domain/useSubscriber';

const registerSchema = Yup.object().shape({
  [FORMVALUES.EMAIL]: Yup.string()
    .email('Email no valido')
    .required('Email es requerido'),
});

export default function InputNew() {
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
        {({ touched, errors, handleSubmit, setFieldValue }) => (
          <Navegation.Form onSubmit={handleSubmit}>
            <Navegation.BlockInput>
              <Navegation.SectionInput
                ismode={isActive ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                onClick={() => toggleClass(isActive)}>
                <p className="text-primary">{isActive}</p>
                <Navegation.Input
                  type="email"
                  placeholder={translate.sendEmail}
                  name={FORMVALUES.EMAIL}
                  onChange={(e: any) => {
                    handleInput(e.currentTarget.value);
                    setFieldValue(FORMVALUES.EMAIL, e.currentTarget.value);
                  }}
                />
                <Navegation.Button
                  ismode={
                    inputMail.length > 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF
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
              {touched.newsletter && errors.newsletter && (
                <div className="text-red-500">{errors.newsletter}</div>
              )}
            </Navegation.BlockInput>
          </Navegation.Form>
        )}
      </Formik>
    </>
  );
}
