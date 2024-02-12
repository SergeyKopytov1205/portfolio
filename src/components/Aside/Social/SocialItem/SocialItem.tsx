import { Link } from "@/navigation";
import classes from "./SocialItem.module.css";
import { TablerIconsProps } from "@tabler/icons-react";

export type SocialItemType = {
  href: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
  iconColor: string;
};

const SocialItem = ({ Icon, href, iconColor }: SocialItemType) => {
  return (
    <Link href={href} className={classes.link} target="_blank">
      <Icon className={classes.icon} color={iconColor} />
    </Link>
  );
};

export default SocialItem;
