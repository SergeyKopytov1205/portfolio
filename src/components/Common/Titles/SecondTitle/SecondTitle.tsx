import { TablerIconsProps } from "@tabler/icons-react";
import classes from "./SecondTitle.module.css";

type SecondTitleProps = {
  Icon: (props: TablerIconsProps) => JSX.Element;
  name: string;
};
const SecondTitle = ({ Icon, name }: SecondTitleProps) => {
  return (
    <div className={classes.container}>
      <Icon size={29} color="#ff9c1a" />
      <h2 className={classes.title}>{name}</h2>
    </div>
  );
};

export default SecondTitle;
