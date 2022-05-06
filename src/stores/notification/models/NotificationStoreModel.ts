import { Action } from "easy-peasy";
import { NotificationModel } from "./NotificationModel";
import { NotificationPayloadModel } from "./NotificationPayloadModel";

export interface NotificationStoreModel {
  notification: NotificationModel;
  pushNotification: Action<NotificationStoreModel, NotificationPayloadModel>;
  closeNotification: Action<NotificationStoreModel>;
}
