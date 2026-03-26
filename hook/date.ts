import { format } from 'date-fns';

export const formatDate = (value: number) =>
  format(new Date(value), 'dd-MM-yyyy');
export const formatDateFilter = (value: Date) => format(value, 'yyyy-MM-dd');
