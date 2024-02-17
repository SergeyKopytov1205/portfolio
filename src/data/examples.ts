export type ProjectType = {
  name: string;
  description: string;
  type: "web" | "mobile";
  stack: string[];
  repositoryLink: string;
  link: string | null;
  image: string | null;
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
    image: null,
  },
];
