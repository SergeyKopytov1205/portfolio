import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ru"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    return {
      messages: (await import(`../dictionary/ru.json`)).default,
    };
  }

  return {
    messages: (await import(`../dictionary/${locale}.json`)).default,
  };
});
