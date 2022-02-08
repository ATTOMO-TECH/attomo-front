import { useMutation } from 'react-query';
import { CONTACT } from '../lib/api';
import { post } from '../lib/restClient';

export const createContact = () =>
  useMutation((data: any) => post(CONTACT.CREATE(), data));
