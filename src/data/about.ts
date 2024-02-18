"use server";

import { getTranslations } from "next-intl/server";

export type ContactUnion = "phone" | "email";

export type ContactType = {
  value: string;
  type: ContactUnion;
};

type AboutType = {
  name: string;
  profession: string;
  description: string;
  contacts: ContactType[];
  location: string;
};

export const getAboutData = async () => {
  const t = await getTranslations("Data");
  const about: AboutType = {
    name: t("About.Name"),
    description: t("About.Description"),
    profession: t("About.Profession"),
    contacts: [
      { value: "+79220279329", type: "phone" },
      { value: "kot63727@gmail.com", type: "email" },
    ],
    location: `${t("Location.City")}, ${t("Location.Country")}`,
  };
  return about;
};
