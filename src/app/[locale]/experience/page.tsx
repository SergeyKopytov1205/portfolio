import MainTitle from "@/components/Common/Titles/MainTitle/MainTitle";
import classes from "./page.module.css";
import SecondTitle from "@/components/Common/Titles/SecondTitle/SecondTitle";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import ExperienceView from "@/components/Common/Views/ExperienceView/ExperienceView";
import EducationView from "@/components/Common/Views/EducationView/EducationView";
import { getTranslations } from "next-intl/server";
import { getEducationList, getExperienceList } from "@/data";

export default async function Experience() {
  const t = await getTranslations("UI.Experience");
  const experienceList = await getExperienceList();
  const educationList = await getEducationList();
  return (
    <main className={classes.container}>
      <MainTitle title={t("Title")} />
      <SecondTitle Icon={IconBriefcase} name={t("Career")} />
      {experienceList.map((experience) => {
        return (
          <ExperienceView
            key={experience.dateAcceptance.toString()}
            {...experience}
          />
        );
      })}
      <SecondTitle Icon={IconSchool} name={t("Education")} />
      {educationList.map((education) => {
        return <EducationView key={education.period} {...education} />;
      })}
    </main>
  );
}
