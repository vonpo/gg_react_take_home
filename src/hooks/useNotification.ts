import { useState } from "react";

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
