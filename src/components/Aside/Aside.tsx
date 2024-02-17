import classes from "./Aside.module.css";
import Contacts from "./Contacts/Contacts";
import Social from "./Social/Social";

export default function Aside() {
  return (
    <aside className={classes.container}>
      <div className={classes.info}>
      <div className={classes.photo} />
      <div className={classes.about}>
        <h4 className={classes.about_name}>Копытов Сергей</h4>
        <p className={classes.about_profession}>Frontend developer</p>
      </div>
      <Social />
      </div>
     
      <Contacts />
    </aside>
  );
}
