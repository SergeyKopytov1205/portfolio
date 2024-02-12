import { Link } from "@/navigation";
import classes from "./ContactItem.module.css";
import { TablerIconsProps } from "@tabler/icons-react";

export type ContactItemType = {
  href: string;
  name: string;
  description: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
};

const ContactItem = ({ Icon, description, href, name }: ContactItemType) => {
  return (
    <Link href={href} className={classes.link}>
      <Icon className={classes.icon} />
      <div className={classes.content}>
        <p className={classes.name}>{name}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </Link>
  );
};

export default ContactItem;
