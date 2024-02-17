"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import classes from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && theme === "system") {
      const body = document.querySelector("html");
      if (!body) return;
      const attribute = body.getAttribute("data-theme");
      attribute === "dark" && setTheme("dark");
    }
  }, [mounted, theme, setTheme]);

  const onClickHandler = useCallback(() => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }, [setTheme, theme]);

  if (!mounted) {
    return <button className={classes.button} />;
  }

  return (
    <button className={classes.button} onClick={onClickHandler}>
      {theme === "dark" ? (
        <IconSun className={classes.icon} />
      ) : (
        <IconMoon className={classes.icon} />
      )}
    </button>
  );
};

export default memo(ThemeSwitcher);
