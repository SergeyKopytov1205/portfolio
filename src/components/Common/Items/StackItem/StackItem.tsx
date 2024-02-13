import Image from "next/image";
import classes from "./StackItem.module.css";
import { StackType } from "@/data";

const StackItem = ({ imageSrc, name }: StackType) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <Image src={imageSrc} alt={name} fill sizes="80px" />
      </div>
      <p className={classes.name}>{name}</p>
    </li>
  );
};

export default StackItem;
