import SocialItem, { SocialItemType } from "./SocialItem/SocialItem";
import classes from "./Social.module.css";
import { IconBrandGithub, IconBrandTelegram } from "@tabler/icons-react";

const socials: SocialItemType[] = [
  { href: "/1", Icon: IconBrandTelegram, iconColor: "#0088cc" },
  { href: "/2", Icon: IconBrandGithub, iconColor: "#171515" },
];

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
