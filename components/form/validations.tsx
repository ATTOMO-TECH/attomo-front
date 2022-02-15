import * as Yup from 'yup';
import { FORMVALUES } from '../../hook/types';

export const validationSchema = Yup.object().shape({
  valueName: Yup.string()
    .min(4, 'El nombre requiere de 4 caracteres')
    .max(8, 'El nombre maximo 8 caracteres')
    .required('El campo es requerido'),
  [FORMVALUES.LASTNAME]: Yup.string()
    .min(4, 'El apellido requiere de 4 caracteres')
    .max(8, 'El apellido maximo 8 caracteres')
    .required('El campo es requerido'),
  [FORMVALUES.PHONE]: Yup.string()
    .min(9, 'El número no tiene formato correcto')
    .required('El campo es requerido'),
  [FORMVALUES.EMAIL]: Yup.string()
    .email('Email no valido')
    .required('Email es requerido'),
  [FORMVALUES.EMAIL]: Yup.string().required('Email es requerido'),
});
