import MainTitle from "@/components/Common/Titles/MainTitle/MainTitle";
import classes from "./page.module.css";
import { getAboutData, stackList } from "@/data";
import StackItem from "@/components/Common/Items/StackItem/StackItem";
import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("UI.Home");
  const { description } = await getAboutData();
  return (
    <div className={classes.container}>
      <MainTitle title={t("Title")} />
      <p className={classes.about}>{description}</p>
      <h2 className={classes.subtitle}>{t("Stack")}</h2>
      <ul className={classes.list}>
        {stackList.map((stack) => {
          return <StackItem key={stack.name} {...stack} />;
        })}
      </ul>
    </div>
  );
}
