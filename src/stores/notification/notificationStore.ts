import { createStore, action, Action, debug } from "easy-peasy";
import { NotificationType } from "../../constants/notifications";
import { createTypedHooks } from "easy-peasy";
import uidGenerator from "../../utils/uidGenerator";
import { NotificationPayloadModel } from "./models/NotificationPayloadModel";
import { NotificationStoreModel } from "./models/NotificationStoreModel";
import { NotificationModel } from "./models/NotificationModel";

const initialState: NotificationModel = {
  message: "",
  type: NotificationType.INFO,
  key: "START",
  open: false,
};

const notificationStore = createStore<NotificationStoreModel>({
  notification: initialState,

  pushNotification: action((state, payload) => {
    state.notification = {
      message: payload.message,
      type: payload.type,
      key: uidGenerator(),
      open: true,
    };
  }),

  closeNotification: action((state) => {
    state.notification = {
      ...state.notification,
      open: false,
    };
  }),
});

const typedHooks = createTypedHooks<NotificationStoreModel>();

// utility
const pushNotification = (payload: NotificationPayloadModel) => {
  notificationStore.getActions().pushNotification(payload);
};

// exports
export default notificationStore;
export const useNotificationStoreActions = typedHooks.useStoreActions;
export const useNotificationDispatch = typedHooks.useStoreDispatch;
export const useNotificationStoreState = typedHooks.useStoreState;
export { pushNotification };
