import { TablerIconsProps } from "@tabler/icons-react";

export type NavBarItemType = {
  name: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
  href: string;
  isActive: boolean;
};
