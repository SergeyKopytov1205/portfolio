"use client";

import { memo, useMemo } from "react";
import { Link, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import classes from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const targetLocale = useMemo(() => (locale === "ru" ? "en" : "ru"), [locale]);

  return (
    <Link href={pathname} locale={targetLocale} className={classes.link}>
      {targetLocale.toUpperCase()}
    </Link>
  );
};

export default memo(LanguageSwitcher);
