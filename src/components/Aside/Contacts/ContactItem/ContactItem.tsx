"use client";

import { Link } from "@/navigation";
import classes from "./ContactItem.module.css";
import { TablerIconsProps } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export type ContactItemProps = {
  Icon: (props: TablerIconsProps) => JSX.Element;
  description: string;
  href: string;
  translationKey: keyof IntlMessages["UI"]["Home"]["Info"];
};
const ContactItem = ({
  Icon,
  description,
  href,
  translationKey,
}: ContactItemProps) => {
  const t = useTranslations("UI.Home.Info");
  return (
    <Link
      href={href}
      className={`${classes.link} ${href === "#" ? classes.disabled : ""}`}
    >
      <Icon className={classes.icon} />
      <div className={classes.content}>
        <p className={classes.name}>{t(translationKey)}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </Link>
  );
};

export default ContactItem;
