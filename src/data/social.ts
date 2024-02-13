import { TablerIconsProps } from "@tabler/icons-react";
import {
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export type SocialType = {
  href: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
  iconColor: string;
};

export const socials: SocialType[] = [
  {
    href: "https://telegram.me/KopytovSergei",
    Icon: IconBrandTelegram,
    iconColor: "#0088cc",
  },
  {
    href: "https://wa.me/79220279329",
    Icon: IconBrandWhatsapp,
    iconColor: "#25D366",
  },
  {
    href: "https://github.com/SergeyKopytov1205",
    Icon: IconBrandGithub,
    iconColor: "#171515",
  },
];
