import { IconAlertTriangle, IconProgressCheck } from "@tabler/icons-react";
import classes from "./Notification.module.css";

type MessageType = "success" | "error";
type NotificationProps = {
  message: string;
  type?: MessageType;
};

const icons: Record<MessageType, JSX.Element> = {
  error: <IconAlertTriangle color="red" size={16} />,
  success: <IconProgressCheck color="green" size={16} />,
};

const Notification = ({ message, type = "error" }: NotificationProps) => {
  const Icon = icons[type];
  return (
    <div className={`${classes.container} ${classes[type]}`}>
      {Icon}
      <p className={classes.message}>{message}</p>
    </div>
  );
};

export default Notification;
