import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: `${t("Data.About.Name")} | ${t("UI.Experience.Title")}`,
  };
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
