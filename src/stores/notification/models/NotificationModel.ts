import { NotificationType } from "../../../constants/notifications";

export interface NotificationModel {
  message: string;
  type: NotificationType;
  key: string;
  open: boolean;
}
