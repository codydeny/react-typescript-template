import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import {
  useNotificationStoreActions,
  useNotificationStoreState,
} from "../../../stores/notification/notificationStore";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return (
    <MuiAlert
      elevation={0}
      className="border border-solid border-gray-200"
      ref={ref}
      {...props}
    />
  );
});

export default function Notification() {
  const notification = useNotificationStoreState((state) => state.notification);
  const closeNotification = useNotificationStoreActions(
    (actions) => actions.closeNotification
  );
  return (
    <div>
      <Snackbar
        open={notification.open}
        key={notification.key}
        autoHideDuration={4000}
        onClose={() => {
          closeNotification();
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => {
            closeNotification();
          }}
          severity={notification.type}
          key={notification.key}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
