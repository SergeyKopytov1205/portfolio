import { TablerIconsProps } from "@tabler/icons-react";
import { StaticImageData } from "next/image";

export type SocialType = {
  href: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
  iconColor: string;
};

export type ContactType = {
  href: string;
  name: string;
  description: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
};

export type StackType = {
  name: string;
  imageSrc: StaticImageData;
};

export type NavBarItemType = {
  name: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
  href: string;
  isActive: boolean;
};
