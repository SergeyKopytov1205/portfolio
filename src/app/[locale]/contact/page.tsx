"use client";

import MainTitle from "@/components/Common/Titles/MainTitle/MainTitle";
import classes from "./page.module.css";
import MainInput from "@/components/Common/Inputs/MainInput";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import axios, { AxiosError } from "axios";
import { ContactInputs } from "@/types";
import { useTranslations } from "next-intl";
import Notification from "@/components/Common/Notification/Notification";

const defaultForm: Record<ContactInputs, string> = {
  contact: "",
  message: "",
  name: "",
};
interface Form extends HTMLFormElement {
  readonly elements: HTMLFormControlsCollection &
    Record<ContactInputs, HTMLInputElement>;
}

type ErrorsType = {
  [key: number]: keyof IntlMessages["UI"]["Contact"]["Form"]["Errors"];
};
const errorMessages: ErrorsType = {
  429: "RateLimit",
  400: "InvalidRequest",
  500: "ServerError",
};

export default function Contacts() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState<typeof defaultForm>(defaultForm);
  const t = useTranslations("UI.Contact");

  const handleSubmit = useCallback(
    async (e: FormEvent<Form>) => {
      e.preventDefault();
      setErrorMessage(null);
      setIsSuccess(false);
      const target = e.currentTarget.elements;
      const data: {
        [key: string]: string;
      } = {
        contact: target.contact.value,
        message: target.contact.value,
        name: target.contact.value,
      };
      const isEmpty = Object.keys(data).some((key) => data[key] === "");
      if (isEmpty) {
        setErrorMessage(t("Form.Errors.InvalidRequest"));
        return;
      }
      try {
        await axios.post("/api/sendMessage", data);
        setForm(defaultForm);
        setIsSuccess(true);
      } catch (error) {
        if (!(error instanceof AxiosError) || !error?.response?.status) {
          setErrorMessage(t("Form.Errors.ServerError"));
          return;
        }
        const messageKey =
          errorMessages[error.response.status] ?? "ServerError";
        setErrorMessage(t(`Form.Errors.${messageKey}`));
      }
    },
    [t]
  );

  const onChangeForm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    setIsSuccess(false);
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  }, []);

  return (
    <main className={classes.container}>
      <MainTitle title={t("Title")} />
      <div className={classes.content}>
        <p className={classes.introduction}>{t("Description")}</p>
        <form className={classes.form} onSubmit={handleSubmit}>
          <MainInput
            label={t("Form.Inputs.Name.Label")}
            name="name"
            value={form.name}
            onChangeForm={onChangeForm}
            autoComplete="name"
          />
          <MainInput
            label={t("Form.Inputs.Contact.Label")}
            name="contact"
            value={form.contact}
            onChangeForm={onChangeForm}
            autoComplete="tel"
          />
          <MainInput
            label={t("Form.Inputs.Message.Label")}
            name="message"
            value={form.message}
            onChangeForm={onChangeForm}
            autoComplete="none"
          />
          <div className={classes.row}>
            <button className={classes.button} type="submit">
              {t("Form.Submit")}
            </button>
            {isSuccess && (
              <Notification message={t("Form.Success")} type="success" />
            )}
            {errorMessage && (
              <Notification message={errorMessage} type="error" />
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
