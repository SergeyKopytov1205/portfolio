import { TablerIconsProps } from "@tabler/icons-react";

export type NavBarItemType = {
  name: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
  href: string;
  isActive: boolean;
};

export type ContactInputs = "contact" | "message" | "name";
