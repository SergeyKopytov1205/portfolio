import { Link } from "@/navigation";
import classes from "./NavBarItem.module.css";
import { NavBarItemType } from "@/types";

const NavBarItem = ({ href, Icon, isActive, name }: NavBarItemType) => {
  return (
    <Link
      href={href}
      className={`${classes.link} ${isActive ? classes.active : ""}`}
    >
      <Icon className={classes.icon} />
      <p className={classes.name}>{name}</p>
    </Link>
  );
};

export default NavBarItem;
