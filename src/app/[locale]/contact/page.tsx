"use client";

import MainTitle from "@/components/Common/Titles/MainTitle/MainTitle";
import classes from "./page.module.css";
import MainInput from "@/components/Common/Inputs/MainInput";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

const defaultForm = { contact: "", message: "", name: "" };

export default function Contacts() {
  const [form, setForm] = useState<typeof defaultForm>(defaultForm);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    setForm(defaultForm);
  };

  const onChangeForm = useCallback(
    (key: string, e: ChangeEvent<HTMLInputElement>) => {
      setForm((state) => ({ ...state, [key]: e.target.value }));
    },
    []
  );
  return (
    <div className={classes.container}>
      <MainTitle title="Contacts" />
      <div className={classes.content}>
        <p className={classes.introduction}>
          I am always open to discussing new projects, opportunities in tech
          world, partnerships and more so mentorship.
        </p>
        <form className={classes.form} onSubmit={handleSubmit}>
          <MainInput
            label="Name"
            name="name"
            value={form.name}
            onChangeForm={onChangeForm}
          />
          <MainInput
            label="Contact"
            name="contact"
            value={form.contact}
            onChangeForm={onChangeForm}
          />
          <MainInput
            label="Message"
            name="message"
            value={form.message}
            onChangeForm={onChangeForm}
          />
          <button className={classes.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
