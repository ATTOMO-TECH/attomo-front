import emailjs from '@emailjs/browser';

export const sendColaboratorFormNotification = (data: any) => {
  emailjs
    .send(
      'attomo_email_service',
      'colaboratorTemplate_1thj',
      data,
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
  emailjs
    .send(
      'attomo_email_service',
      'ClientTemplate_448gyuz',
      data,
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
  emailjs
    .send(
      'attomo_email_service',
      'ClientTemplate_448gyuz',
      data,
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
  emailjs
    .send(
      'attomo_email_service',
      'ClientTemplate_448gyuz',
      data,
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
