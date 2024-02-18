import { getTranslations } from "next-intl/server";

export type ProjectType = {
  name: string;
  description: string;
  type: "web" | "mobile";
  stack: string[];
  repositoryLink: string;
  link: string | null;
  image: string | null;
  translateKey: keyof IntlMessages["Data"]["Projects"];
};

// "Это веб-приложение создано для визуализации моего профессионального опыта, а также для иллюстрации практического применения Next.js."
export const projectsList: ProjectType[] = [
  {
    name: "Portfolio Web App",
    description:
      "This web application is created to showcase my professional experience, as well as to illustrate the practical use of Next.js.",
    type: "web",
    stack: ["TypeScript", "Next.js", "Next-Intl"],
    repositoryLink: "https://github.com/SergeyKopytov1205/portfolio",
    link: null,
    image: "/image/projects/portfolio-web.png",
    translateKey: "PortfolioWebApp",
  },
];

export const getProjectsList = async () => {
  const t = await getTranslations("Data.Projects");
  return projectsList.map((project) => ({
    ...project,
    name: t(`${project.translateKey}.Name`),
    description: t(`${project.translateKey}.Description`),
  }));
};
