import emailjs from '@emailjs/browser';

const NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_ID =
  process.env.NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_ID || '';
const NEXT_PUBLIC_REACT_APP_DYNAMIC_TEMPLATE =
  process.env.NEXT_PUBLIC_REACT_APP_DYNAMIC_TEMPLATE || '';
const NEXT_PUBLIC_REACT_APP_KIT_TEMPLATE =
  process.env.NEXT_PUBLIC_REACT_APP_KIT_TEMPLATE || '';
const NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_KEY =
  process.env.NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_KEY || '';

export const sendEmailFormNotification = (data: any, formType: string) => {
  const sendData = {
    ...data,
    formType,
  };
  const template =
    formType === 'Gestión Kit Digital'
      ? NEXT_PUBLIC_REACT_APP_KIT_TEMPLATE
      : NEXT_PUBLIC_REACT_APP_DYNAMIC_TEMPLATE;
  emailjs
    .send(
      NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_ID || '',
      template || '',
      sendData,
      NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_KEY,
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
};
