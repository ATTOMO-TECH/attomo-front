import Image from 'next/image';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Navegation } from './styles';
import { BUTTON_ACTIVE } from '../../const/const';
import { sendNewsletter } from '../../services/attomo.service';

const registerSchema = Yup.object().shape({
  newsletter: Yup.string()
    .email('Email no valido')
    .required('Email es requerido'),
});

export default function InputNew() {
  const initialValues = {
    newsletter: '',
  };
  const newsLetter = (data: any) => {
    sendNewsletter(data);
  };

  const [inputMail, setInputMail] = useState('');

  const handleInput = (mail: string) => {
    setInputMail(mail);
  };
  const [isActive, setActive] = useState(false);

  const toggleClass = (value: boolean) => {
    setActive(value);
  };
  return (
    <>
      <Formik
        onSubmit={newsLetter}
        initialValues={initialValues}
        validationSchema={registerSchema}
        validateOnMount>
        {({ touched, errors }) => (
          <Navegation.Form>
            <Navegation.BlockInput>
              <Navegation.SectionInput
                ismode={isActive ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                onClick={() => toggleClass(isActive)}>
                <p className="text-primary">{isActive}</p>
                <Navegation.Input
                  type="text"
                  placeholder="Escribe tu correo electrónico"
                  name="newsletter"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    handleInput(e.currentTarget.value)
                  }
                />
                <Navegation.Button
                  ismode={
                    inputMail.length > 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF
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
