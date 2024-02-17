import { EducationType } from "@/data";
import classes from "./EducationView.module.css";

const EducationView = ({
  degree,
  education,
  establishment,
  faculty,
  period,
}: EducationType) => {
  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <p className={classes.date}>{period}</p>
      </div>

      <div className={classes.right}>
        <p className={classes.text_main}>{establishment}</p>
        <p className={classes.text_main}>{faculty}</p>
        <p className={classes.text_second}>{`${degree} - ${education}`}</p>
      </div>
    </div>
  );
};

export default EducationView;
