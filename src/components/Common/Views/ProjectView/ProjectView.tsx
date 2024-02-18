import { ProjectType } from "@/data";
import classes from "./ProjectView.module.css";
import Image from "next/image";
import { IconBrandGithubFilled, IconPhoto } from "@tabler/icons-react";
import TagItem from "../../Items/TagItem/TagItem";
import Link from "next/link";

const ProjectView = (project: ProjectType) => {
  const { description, image, link, name, repositoryLink, stack } = project;
  return (
    <div className={classes.container}>
      <div className={classes.image_container}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            style={{ objectFit: "contain" }}
            sizes="100%"
            priority
          />
        ) : (
          <IconPhoto size={60} color="#999" />
        )}
      </div>
      <div className={classes.content}>
        <div className={classes.row}>
          <h3 className={classes.name}>{name}</h3>
          <Link
            className={classes.link}
            href={repositoryLink}
            target="_blank"
            rel="noopener"
          >
            <span>GitHub</span>
            <IconBrandGithubFilled size={14} />
          </Link>
        </div>
        <p className={classes.description}>{description}</p>
        <ul className={classes.stack_list}>
          {stack.map((stack) => {
            return <TagItem key={stack} name={stack} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectView;
