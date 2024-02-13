import classes from "./TagItem.module.css";

type TagItemProps = {
  name: string;
};
const TagItem = ({ name }: TagItemProps) => {
  return <li className={classes.item}>{name}</li>;
};

export default TagItem;
