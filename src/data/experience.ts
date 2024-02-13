export type ExperienceResponsibilityType = {
  name: string;
  description: string;
  stack: string[];
};

export type ExperienceType = {
  company: string;
  position: string;
  responsibilities: ExperienceResponsibilityType[];
  dateAcceptance: number;
  dateDismissal: null | number;
};

export const experienceList: ExperienceType[] = [
  {
    company: "Welcome2City",
    position: "Frontend developer",
    responsibilities: [
      {
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
        name: "Web application development",
        description:
          "Development of a web application with universal service ordering functionality",
        stack: ["TypeScript", "Next.js", "Next-Intl", "Stripe", "Mantine"],
      },
    ],
    dateAcceptance: 1648494000,
    dateDismissal: null,
  },
];
