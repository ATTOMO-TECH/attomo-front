import { toast, ToastOptions } from 'react-toastify';

/* eslint-disable */
export enum NotificationType {
  SUCCESS,
  ERROR,
}
/* eslint-enable */

export const showNotification = (type: NotificationType, message: string) => {
  const defaultConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (type === NotificationType.SUCCESS) {
    toast.success(message, defaultConfig);
  } else if (type === NotificationType.ERROR) {
    toast.error(message, defaultConfig);
  }
};
