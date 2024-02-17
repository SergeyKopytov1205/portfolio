import { IconDownload } from "@tabler/icons-react";
import classes from "./DownloadButton.module.css";

const DownloadButton = () => {
  return (
    <button className={classes.button}>
      <IconDownload className={classes.icon} />
      <p className={classes.name}>Download Resume</p>
    </button>
  );
};

export default DownloadButton;
