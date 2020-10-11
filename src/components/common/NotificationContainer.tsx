import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { FunctionComponent } from "react";
import { useNotificationContext } from "../../contexts/notification";

/**
 * Notification component display message to user.
 * Position was hardcoded to bottom-right.
 *
 * @constructor
 */
export const NotificationContainer: FunctionComponent = () => {
  const { notification, resetAction } = useNotificationContext();

  if (!notification) {
    return null;
  }
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={true}
      autoHideDuration={10000}
      onClose={() => resetAction()}
      message={notification.message}
    />
  );
};
