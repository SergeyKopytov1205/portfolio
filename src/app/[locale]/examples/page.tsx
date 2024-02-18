"use server";

import MainTitle from "@/components/Common/Titles/MainTitle/MainTitle";
import classes from "./page.module.css";
import { getProjectsList } from "@/data";
import ProjectView from "@/components/Common/Views/ProjectView/ProjectView";
import { getTranslations } from "next-intl/server";

export default async function Examples() {
  const t = await getTranslations("UI.Examples");
  const projectsList = await getProjectsList();
  return (
    <main className={classes.container}>
      <MainTitle title={t("Title")} />
      {projectsList.map((project) => {
        return <ProjectView key={project.name} {...project} />;
      })}
    </main>
  );
}
