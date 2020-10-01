import { createContext, useContext, useState } from "react";

/**
 * Use snackbar hook.
 */
export const useNotification = () => {
  const [notification, setNotification] = useState<{
    message: string;
  } | null>(null);

  const displayAction = (message: string) => {
    setNotification({
      message,
    });
  };

  const resetAction = () => setNotification(null);
  return {
    resetAction,
    displayAction,
    notification,
  };
};

/**
 * Snackbar context.
 */
export const NotificationContext = createContext<{
  resetAction: () => void;
  displayAction: (message: string) => void;
  notification: { message: string } | null;
}>({
  notification: null,
  resetAction: () => {},
  displayAction: (message: string) => {},
});

export const useNotificationContext = () => useContext(NotificationContext);
