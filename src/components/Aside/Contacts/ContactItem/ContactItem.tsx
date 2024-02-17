import { Link } from "@/navigation";
import classes from "./ContactItem.module.css";
import { ContactType } from "@/data";

const ContactItem = ({ Icon, description, href, name }: ContactType) => {
  return (
    <Link
      href={href}
      className={`${classes.link} ${href === "#" ? classes.disabled : ""}`}
    >
      <Icon className={classes.icon} />
      <div className={classes.content}>
        <p className={classes.name}>{name}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </Link>
  );
};

export default ContactItem;
