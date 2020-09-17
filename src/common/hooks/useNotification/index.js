import { useContext } from 'react';
import { NotificationContext } from '@providers/NotificationProvider';

function useNotification() {
  const { notification, addNotification, removeNotification } = useContext(NotificationContext);

  const notifySuccess = message => message && addNotification({ message, status: 'success' });
  const notifyError = message => message && addNotification({ message, status: 'error' });
  const notifyInfo = message => message && addNotification({ message, status: 'info' });

  return { notification, notifySuccess, notifyError, notifyInfo, removeNotification };
}

export default useNotification;
