import * as Yup from 'yup';
import { FORMVALUES } from '../../hook/types';

export const validationSchemaContact = Yup.object().shape({
  [FORMVALUES.FIRSTNAME]: Yup.string().required('El nombre es requerido'),
  [FORMVALUES.LASTNAME]: Yup.string().required('El apellido es requerido'),
  [FORMVALUES.PHONE]: Yup.string()
    .min(9, 'El número no tiene formato correcto')
    .required('El móvil es requerido'),
  [FORMVALUES.EMAIL]: Yup.string()
    .email('Email no valido')
    .required('Email es requerido'),
  [FORMVALUES.MESSAGE]: Yup.string().required('El campo es requerido'),
  // check: Yup.boolean().oneOf([true],'Debes aceptar las condiciones')
});
export const validationSchemaColaborator = Yup.object().shape({
  [FORMVALUES.FIRSTNAME]: Yup.string().required('El nombre es requerido'),
  [FORMVALUES.LASTNAME]: Yup.string().required('El apellido es requerido'),
  [FORMVALUES.PHONE]: Yup.string()
    .min(9, 'El número no tiene formato correcto')
    .required('El móvil es requerido'),
  [FORMVALUES.EMAIL]: Yup.string()
    .email('Email no valido')
    .required('Email es requerido'),
  [FORMVALUES.MESSAGE]: Yup.string().required('El campo es requerido'),
  [FORMVALUES.CONDITIONS]: Yup.boolean().oneOf(
    [true],
    'Debes aceptar las condiciones',
  ),
});
export const validationSchemaBooking = Yup.object().shape({
  [FORMVALUES.FIRSTNAME]: Yup.string().required('El nombre es requerido'),
  [FORMVALUES.LASTNAME]: Yup.string().required('El apellido es requerido'),
  [FORMVALUES.PHONE]: Yup.string()
    .min(9, 'El número no tiene formato correcto')
    .required('El móvil es requerido'),
  [FORMVALUES.EMAIL]: Yup.string()
    .email('Email no valido')
    .required('Email es requerido'),
  [FORMVALUES.MESSAGE]: Yup.string().required('El campo es requerido'),
  [FORMVALUES.CONDITIONS]: Yup.boolean().oneOf(
    [true],
    'Debes aceptar las condiciones',
  ),
});
