"use client";

import { ExperienceType } from "@/data";
import classes from "./ExperienceView.module.css";
import { DateTimeFormatOptions, useFormatter, useTranslations } from "next-intl";
import TagItem from "../../Items/TagItem/TagItem";

const formatConfig: DateTimeFormatOptions = {
  month: "long",
  year: "numeric",
};

const ExperienceView = ({
  company,
  dateAcceptance,
  dateDismissal,
  position,
  responsibilities,
}: ExperienceType) => {
  const format = useFormatter();
  const t = useTranslations("UI.Experience")
  const dateStart = new Date(dateAcceptance * 1000);
  const formattedDateStart = format.dateTime(dateStart, formatConfig);
  const formattedDateEnd =
    dateDismissal === null
      ? t("Present")
      : format.dateTime(dateStart, formatConfig);
  return (
    <div className={classes.column}>
      <p
        className={classes.date}
      >{`${formattedDateStart} - ${formattedDateEnd}`}</p>
      <div className={classes.row}>
        <div className={classes.left}>
          <p className={classes.text_main}>{company}</p>
          <p className={classes.text_second}>{position}</p>
        </div>
        <ul className={classes.right}>
          {responsibilities.map((responsibility) => {
            return (
              <li key={responsibility.name} className={classes.column}>
                <div className={classes.text_main}>{responsibility.name}</div>
                <div className={classes.text_second}>
                  {responsibility.description}
                </div>
                <ul className={classes.list}>
                  {responsibility.stack.map((stack) => {
                    return <TagItem key={stack} name={stack} />;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceView;
