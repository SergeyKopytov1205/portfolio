import { Link } from "@/navigation";
import classes from "./logo.module.css";

const Logo = () => {
  return (
    <Link href={"/"} className={classes.logo}>
      Kopytov
    </Link>
  );
};

export default Logo;
