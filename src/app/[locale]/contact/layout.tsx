import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: `${t("Data.About.Name")} | ${t("UI.Contact.Title")}`,
  };
}

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
