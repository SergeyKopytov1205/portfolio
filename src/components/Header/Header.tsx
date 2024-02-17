import classes from "./Header.module.css";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.settings}>
        <div className={classes.button_wrapper}>
          <LanguageSwitcher />
        </div>
        <div className={classes.button_wrapper}>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
