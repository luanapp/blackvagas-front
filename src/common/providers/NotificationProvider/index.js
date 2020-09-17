import React, { createContext, useCallback, useState } from 'react';

export const NotificationContext = createContext({
  notification: {},
  addNotification: () => {},
  removeNotification: () => {},
});

export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({});

  const addNotification = useCallback(({ message, status }) => setNotification({ message, status }), [setNotification]);
  const removeNotification = useCallback(() => setNotification({}), [setNotification]);

  const data = {
    notification,
    addNotification,
    removeNotification,
  };

  return <NotificationContext.Provider value={data}>{children}</NotificationContext.Provider>;
}
