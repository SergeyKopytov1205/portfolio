import { ContactType } from "@/types";
import { IconLocation, IconMail, IconPhone } from "@tabler/icons-react";

export const contacts: ContactType[] = [
  {
    description: "+79220279329",
    href: "tel:+79220279329",
    Icon: IconPhone,
    name: "Phone",
  },
  {
    description: "kot63727@gmail.com",
    href: "mailto:kot63727@gmail.com",
    Icon: IconMail,
    name: "Email",
  },
  {
    description: "Russia, Ekaterinburg",
    href: "#",
    Icon: IconLocation,
    name: "Location",
  },
];
