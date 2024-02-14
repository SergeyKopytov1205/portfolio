import MainTitle from "@/components/Common/Titles/MainTitle/MainTitle";
import classes from "./page.module.css";
import { projectsList } from "@/data/examples";
import ProjectView from "@/components/Common/Views/ProjectView/ProjectView";

export default function Examples() {
  return (
    <div className={classes.container}>
      <MainTitle title="Examples" />
      {projectsList.map((project) => {
        return <ProjectView key={project.name} {...project} />;
      })}
    </div>
  );
}
