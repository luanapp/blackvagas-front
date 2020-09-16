import { useContext } from 'react';
import { NotificationContext } from '@providers/NotificationProvider';
import { STATUS } from '@constants/notification';

function useNotification() {
  const { notification, addNotification, removeNotification } = useContext(NotificationContext);

  const notifySuccess = message => addNotification({ message, status: STATUS.SUCCESS });
  const notifyError = message => addNotification({ message, status: STATUS.ERROR });
  const notifyInfo = message => addNotification({ message, status: STATUS.INFO });

  return { notification, notifySuccess, notifyError, notifyInfo, removeNotification };
}

export default useNotification;
