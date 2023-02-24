import emailjs from '@emailjs/browser';

export const sendColaboratorFormNotification = (data: any) => {
  const sendData = {
    ...data,
    formType: 'Colaboración como Partner',
  };
  emailjs
    .send(
      'attomo_email_service',
      'dynamicTemplate_448gyuz',
      sendData,
      'aSbmCbPj79MYG7Tjd',
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
      'attomo_email_service',
      'dynamicTemplate_448gyuz',
      sendData,
      'aSbmCbPj79MYG7Tjd',
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
      'attomo_email_service',
      'dynamicTemplate_448gyuz',
      sendData,
      'aSbmCbPj79MYG7Tjd',
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
      'attomo_email_service',
      'kitTemplate_448gyuz',
      sendData,
      'aSbmCbPj79MYG7Tjd',
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
