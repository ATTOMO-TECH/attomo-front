import emailjs from '@emailjs/browser';

const NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_ID =
  process.env.NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_ID || '';
const NEXT_PUBLIC_REACT_APP_DYNAMIC_TEMPLATE =
  process.env.NEXT_PUBLIC_REACT_APP_DYNAMIC_TEMPLATE || '';
const NEXT_PUBLIC_REACT_APP_KIT_TEMPLATE =
  process.env.NEXT_PUBLIC_REACT_APP_KIT_TEMPLATE || '';
const NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_KEY =
  process.env.NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_KEY || '';

export const sendColaboratorFormNotification = (data: any) => {
  const sendData = {
    ...data,
    formType: 'Colaboración como Partner',
  };
  emailjs
    .send(
      NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_ID || '',
      NEXT_PUBLIC_REACT_APP_DYNAMIC_TEMPLATE || '',
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

export const sendClientFormNotification = (data: any) => {
  const sendData = {
    ...data,
    formType: 'Colaboración como cliente',
  };
  emailjs
    .send(
      NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_ID || '',
      NEXT_PUBLIC_REACT_APP_DYNAMIC_TEMPLATE || '',
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

export const sendSpaceFormNotification = (data: any) => {
  const sendData = {
    ...data,
    formType: 'Reserva de espacio ATTOMO',
  };
  emailjs
    .send(
      NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_ID || '',
      NEXT_PUBLIC_REACT_APP_DYNAMIC_TEMPLATE || '',
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

export const sendKitFormNotification = (data: any) => {
  const sendData = {
    ...data,
    formType: 'Gestión Kit Digital',
  };
  emailjs
    .send(
      NEXT_PUBLIC_REACT_APP_SERVICE_MAIL_ID || '',
      NEXT_PUBLIC_REACT_APP_KIT_TEMPLATE || '',
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
