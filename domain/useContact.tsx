import { useMutation } from 'react-query';
import { CONTACT } from '../lib/api';
import { post } from '../lib/restClient';

export const createContact = () =>
  useMutation((data: any) => post(CONTACT.CREATE(), data), {});
export const createContactColaborator = () =>
  useMutation((data: any) => post(CONTACT.CREATECOLABORATOR(), data), {});
export const createReserve = () =>
  useMutation((data: any) => post(CONTACT.CREATERESERVE(), data), {});
