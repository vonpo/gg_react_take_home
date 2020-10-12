import { createContext, FunctionComponent, useContext, useState } from "react";
import { useNotification } from "../hooks/useNotification";
import * as React from "react";

/**
 * Snackbar context.
 */
const NotificationContext = createContext<{
  resetAction: () => void;
  displayAction: (message: string) => void;
  notification: { message: string } | null;
}>({
  notification: null,
  resetAction: () => {},
  displayAction: (_: string) => {},
});

/**
 * Use notification context.
 */
export const useNotificationContext = () => useContext(NotificationContext);

/**
 * Notification context wrapper.
 *
 * @param [Object] children
 *
 * @constructor
 */
export const NotificationContextProvider: FunctionComponent = ({
  children,
}) => {
  const notificationContext = useNotification();

  return (
    <NotificationContext.Provider value={notificationContext}>
      {children}
    </NotificationContext.Provider>
  );
};
