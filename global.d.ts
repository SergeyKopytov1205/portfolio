type Messages = typeof import("./dictionary/ru.json");
declare interface IntlMessages extends Messages {}

declare namespace NodeJS {
  interface ProcessEnv {
      TELEGRAM_BOT_TOKEN: string;
      TELEGRAM_CHAT_ID: string;
  }
}