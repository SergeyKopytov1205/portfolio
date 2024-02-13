import { Link } from "@/navigation";
import classes from "./SocialItem.module.css";
import { SocialType } from "@/types";

const SocialItem = ({ Icon, href, iconColor }: SocialType) => {
  return (
    <Link href={href} className={classes.link} target="_blank">
      <Icon className={classes.icon} color={iconColor} />
    </Link>
  );
};

export default SocialItem;
