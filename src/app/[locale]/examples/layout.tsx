import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: `${t("Data.About.Name")} | ${t("UI.Examples.Title")}`,
  };
}

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
