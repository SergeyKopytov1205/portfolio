"use client";

import { memo } from "react";
import {
  IconAddressBook,
  IconBriefcase,
  IconFileText,
  IconHome,
} from "@tabler/icons-react";
import NavBarItem from "./NavBarItem/NavBarItem";
import classes from "./NavBar.module.css";
import { usePathname } from "@/navigation";
import { NavBarItemType } from "@/types";

const links: Omit<NavBarItemType, "isActive">[] = [
  { name: "Home", href: "/", Icon: IconHome },
  { name: "Experience", href: "/experience", Icon: IconBriefcase },
  { name: "Examples", href: "/examples", Icon: IconFileText },
  { name: "Contact", href: "/contact", Icon: IconAddressBook },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className={classes.container}>
      <ul className={classes.list}>
        {links.map((item) => {
          return (
            <li className={classes.item} key={item.href}>
              <NavBarItem isActive={pathname === item.href} {...item} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(NavBar);
