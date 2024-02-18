import { getTranslations } from "next-intl/server";

type ProjectTranslateKey = keyof IntlMessages["Data"]["Experience"];

export type ExperienceResponsibilityType = {
  name: string;
  description: string;
  stack: string[];
  translateKey: keyof IntlMessages["Data"]["Experience"][ProjectTranslateKey]["Responsibilities"];
};

export type ExperienceType = {
  company: string;
  position: string;
  responsibilities: ExperienceResponsibilityType[];
  dateAcceptance: number;
  dateDismissal: null | number;
  translateKey: ProjectTranslateKey;
};

export const experienceList: ExperienceType[] = [
  {
    company: "Welcome2City",
    position: "Frontend developer",
    responsibilities: [
      {
        translateKey: "Mobile",
        name: "Mobile application development",
        description:
          "Development of a mobile application with the functionality of ordering a taxi, searching and viewing establishments on the map, a universal service ordering system",
        stack: [
          "TypeScript",
          "React-Native",
          "Redux-Toolkit",
          "Firebase",
          "MapBox",
          "Stripe",
        ],
      },
      {
        translateKey: "Web",
        name: "Web application development",
        description:
          "Development of a web application with universal service ordering functionality",
        stack: ["TypeScript", "Next.js", "Next-Intl", "Stripe", "Mantine"],
      },
    ],
    dateAcceptance: 1648494000,
    dateDismissal: null,
    translateKey: "W2C",
  },
];

export const getExperienceList = async () => {
  const t = await getTranslations("Data.Experience");
  return experienceList.map((experience) => ({
    ...experience,
    company: t(`${experience.translateKey}.CompanyName`),
    position: t(`${experience.translateKey}.Position`),
    responsibilities: experience.responsibilities.map((responsibility) => ({
      ...responsibility,
      name: t(
        `${experience.translateKey}.Responsibilities.${responsibility.translateKey}.Name`
      ),
      description: t(
        `${experience.translateKey}.Responsibilities.${responsibility.translateKey}.Description`
      ),
    })),
  }));
};
