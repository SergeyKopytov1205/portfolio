import classes from "./MainTitle.module.css";

type MainTitleProps = {
  title: string;
};
const MainTitle = ({ title }: MainTitleProps) => {
  return <h1 className={classes.title}>{title}</h1>;
};

export default MainTitle;
