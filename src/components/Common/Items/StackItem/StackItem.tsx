import Image, { StaticImageData } from "next/image";
import classes from "./StackItem.module.css";

type StackItemProps = {
  name: string;
  imageSrc: StaticImageData;
};
const StackItem = ({ imageSrc, name }: StackItemProps) => {
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
