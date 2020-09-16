import React, { createContext, useCallback, useState } from 'react';

export const NotificationContext = createContext({
  notification: {},
  addNotification: () => {},
  removeNotification: () => {},
});

export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({});

  const addNotification = ({ message, status }) => setNotification({ message, status });
  const removeNotification = () => setNotification({});

  const data = {
    notification,
    addNotification: useCallback(({ message, status }) => addNotification({ message, status }), []),
    removeNotification: useCallback(() => removeNotification(), []),
  };

  return <NotificationContext.Provider value={data}>{children}</NotificationContext.Provider>;
}
