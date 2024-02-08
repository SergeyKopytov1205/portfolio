import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ClientThemeProvider from "@/providers/ClientThemeProvider";
import { poppins, courierPrime, raleway } from "../fonts";

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
            {children}
          </NextIntlClientProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
