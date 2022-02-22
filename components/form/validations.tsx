import * as Yup from 'yup';
import { FORMVALUES } from '../../hook/types';

export const validationSchemaContact = Yup.object().shape({
  [FORMVALUES.FIRSTNAME]: Yup.string().required('Campo obligatorio'),
  [FORMVALUES.LASTNAME]: Yup.string().required('Campo obligatorio'),
  [FORMVALUES.PHONE]: Yup.string()
    .min(9, 'El número no tiene formato correcto')
    .required('Campo obligatorio'),
  [FORMVALUES.EMAIL]: Yup.string()
    .email('Email no valido')
    .required('Campo obligatorio'),
  [FORMVALUES.MESSAGE]: Yup.string().required('Campo obligatorio'),
  // check: Yup.boolean().oneOf([true],'Debes aceptar las condiciones')
});
export const validationSchemaColaborator = Yup.object().shape({
  [FORMVALUES.FIRSTNAME]: Yup.string().required('Campo obligatorio'),
  [FORMVALUES.LASTNAME]: Yup.string().required('Campo obligatorio'),
  [FORMVALUES.PHONE]: Yup.string()
    .min(9, 'El número no tiene formato correcto')
    .required('Campo obligatorio'),
  [FORMVALUES.EMAIL]: Yup.string()
    .email('Email no valido')
    .required('Campo obligatorio'),
  [FORMVALUES.MESSAGE]: Yup.string().required('Campo obligatorio'),
  [FORMVALUES.CONDITIONS]: Yup.boolean().oneOf(
    [true],
    'Debes aceptar las condiciones',
  ),
});
export const validationSchemaBooking = Yup.object().shape({
  [FORMVALUES.FIRSTNAME]: Yup.string().required('Campo obligatorio'),
  [FORMVALUES.LASTNAME]: Yup.string().required('Campo obligatorio'),
  [FORMVALUES.PHONE]: Yup.string()
    .min(9, 'El número no tiene formato correcto')
    .required('Campo obligatorio'),
  [FORMVALUES.EMAIL]: Yup.string()
    .email('Email no valido')
    .required('Campo obligatorio'),
  [FORMVALUES.MESSAGE]: Yup.string().required('Campo obligatorio'),
  [FORMVALUES.CONDITIONS]: Yup.boolean().oneOf(
    [true],
    'Debes aceptar las condiciones',
  ),
});
