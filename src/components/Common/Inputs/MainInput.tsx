"use client";

import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import classes from "./MainInput.module.css";

type MainInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  onChangeForm: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MainInput = ({
  label,
  name,
  value,
  onChangeForm,
  ...props
}: MainInputProps) => {
  return (
    <div className={classes.container}>
      <input
        className={`${classes.input} ${
          value !== "" ? classes.has_content : ""
        }`}
        id={name}
        name={name}
        type="text"
        {...props}
        value={value}
        onChange={onChangeForm}
      />
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default memo(MainInput);
