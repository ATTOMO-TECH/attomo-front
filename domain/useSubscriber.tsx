import { useMutation } from 'react-query';
import { SUBSCRIBERS } from '../lib/api';
import { post } from '../lib/restClient';

export const useCreateSubscriber = () =>
  useMutation((data: any) => post(SUBSCRIBERS.POST(), data), {});
