import { Link } from "@/navigation";
import { TablerIconsProps } from "@tabler/icons-react";
import classes from "./NavBarItem.module.css";

export type NavBarItemType = {
  name: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
  href: string;
  isActive: boolean;
};
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
