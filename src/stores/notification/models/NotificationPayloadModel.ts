import { NotificationType } from "../../../constants/notifications";

export interface NotificationPayloadModel {
  message: string;
  type: NotificationType;
}
