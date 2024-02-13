import MainTitle from "@/components/Common/Titles/MainTitle/MainTitle";
import classes from "./page.module.css";
import SecondTitle from "@/components/Common/Titles/SecondTitle/SecondTitle";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import ExperienceView from "@/components/Common/Views/ExperienceView/ExperienceView";
import { educationList, experienceList } from "@/data";
import EducationView from "@/components/Common/Views/EducationView/EducationView";

export default function Experience() {
  return (
    <div className={classes.container}>
      <MainTitle title="Experience" />
      <SecondTitle Icon={IconBriefcase} name="Career" />
      {experienceList.map((experience) => {
        return (
          <ExperienceView
            key={experience.dateAcceptance.toString()}
            {...experience}
          />
        );
      })}
      <SecondTitle Icon={IconSchool} name="Education" />
      {educationList.map((education) => {
        return <EducationView key={education.period} {...education} />;
      })}
    </div>
  );
}
