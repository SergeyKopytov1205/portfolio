"use client";

import MainTitle from "@/components/Common/Titles/MainTitle/MainTitle";
import classes from "./page.module.css";
import MainInput from "@/components/Common/Inputs/MainInput";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import axios from "axios";
import { ContactInputs } from "@/types";

const defaultForm: Record<ContactInputs, string> = {
  contact: "",
  message: "",
  name: "",
};
interface Form extends HTMLFormElement {
  readonly elements: HTMLFormControlsCollection &
    Record<ContactInputs, HTMLInputElement>;
}

export default function Contacts() {
  const [form, setForm] = useState<typeof defaultForm>(defaultForm);

  const handleSubmit = async (e: FormEvent<Form>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;
    const data = {
      contact: target.contact.value,
      message: target.contact.value,
      name: target.contact.value,
    };
    try {
      await axios.post("/api/sendMessage", data);
      setForm(defaultForm);
    } catch (error) {}
  };

  const onChangeForm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  }, []);
  return (
    <main className={classes.container}>
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
            autoComplete="name"
          />
          <MainInput
            label="Contact"
            name="contact"
            value={form.contact}
            onChangeForm={onChangeForm}
            autoComplete="tel"
          />
          <MainInput
            label="Message"
            name="message"
            value={form.message}
            onChangeForm={onChangeForm}
            autoComplete="none"
          />
          <button className={classes.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
