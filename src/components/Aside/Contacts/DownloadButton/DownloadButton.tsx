"use client";

import { IconDownload } from "@tabler/icons-react";
import classes from "./DownloadButton.module.css";
import { useTranslations } from "next-intl";

const DownloadButton = () => {
  const t = useTranslations("UI.Home");
  return (
    <button className={classes.button}>
      <IconDownload className={classes.icon} />
      <p className={classes.name}>{t("Download")}</p>
    </button>
  );
};

export default DownloadButton;
