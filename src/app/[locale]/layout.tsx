import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import ClientThemeProvider from "@/providers/ClientThemeProvider";
import { poppins, courierPrime, raleway } from "../fonts";
import classes from "./layout.module.css";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Aside from "@/components/Aside/Aside";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t("Data.About.Name"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${raleway.variable} ${poppins.variable} ${courierPrime.variable}`}
      >
        <ClientThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className={`${classes.grid}`}>
              <Header />
              <NavBar />
              <Aside />
              {children}
            </div>
          </NextIntlClientProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
