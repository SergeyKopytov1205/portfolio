import { getTranslations } from "next-intl/server";

export type EducationType = {
  establishment: string;
  degree: string;
  faculty: string;
  education: string;
  period: string;
  translateKey: keyof IntlMessages["Data"]["Education"];
};

export const educationList: EducationType[] = [
  {
    establishment: "Ural State University of Railway Transport",
    degree: "Engineer",
    faculty: "Faculty of Electromechanics",
    education: "Higher",
    period: "2010 - 2015",
    translateKey: "EducationFirst",
  },
];

export const getEducationList = async () => {
  const t = await getTranslations("Data.Education");
  return educationList.map((education) => ({
    ...education,
    establishment: t(`${education.translateKey}.Establishment`),
    degree: t(`${education.translateKey}.Degree`),
    faculty: t(`${education.translateKey}.Faculty`),
    education: t(`${education.translateKey}.Education`),
  }));
};
