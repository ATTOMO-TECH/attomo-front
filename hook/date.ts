import { format } from 'date-fns';

export const formatDate = (value: number) =>
  format(new Date(value), 'dd-MM-yyyy');
export const formatDateFilter = (value: any) => format(value, 'yyyy-MM-dd');
