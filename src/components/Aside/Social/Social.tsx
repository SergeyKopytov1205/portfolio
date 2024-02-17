import SocialItem from "./SocialItem/SocialItem";
import classes from "./Social.module.css";
import { socials } from "@/data";

const Social = () => {
  return (
    <ul className={classes.list}>
      {socials.map((social) => {
        return (
          <li key={social.href} className={classes.item}>
            <SocialItem {...social} />
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
