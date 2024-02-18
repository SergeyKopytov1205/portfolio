import { TablerIconsProps } from "@tabler/icons-react";

export type NavBarItemType = {
  name: keyof IntlMessages["UI"]["Navigation"];
  Icon: (props: TablerIconsProps) => JSX.Element;
  href: string;
  isActive: boolean;
};

export type ContactInputs = "contact" | "message" | "name";
