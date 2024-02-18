"use client";

import { Link } from "@/navigation";
import classes from "./NavBarItem.module.css";
import { NavBarItemType } from "@/types";
import { useTranslations } from "next-intl";

const NavBarItem = ({ href, Icon, isActive, name }: NavBarItemType) => {
  const t = useTranslations("UI.Navigation");
  return (
    <Link
      href={href}
      className={`${classes.link} ${isActive ? classes.active : ""}`}
    >
      <Icon className={classes.icon} />
      <p className={classes.name}>{t(name)}</p>
    </Link>
  );
};

export default NavBarItem;
