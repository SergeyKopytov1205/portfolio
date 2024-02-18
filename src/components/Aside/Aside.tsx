import { getAboutData } from "@/data";
import classes from "./Aside.module.css";
import Contacts from "./Contacts/Contacts";
import Social from "./Social/Social";

export default async function Aside() {
  const about = await getAboutData();
  const { name, profession, location, contacts } = about;
  return (
    <aside className={classes.container}>
      <div className={classes.info}>
        <div className={classes.photo} />
        <div className={classes.about}>
          <h4 className={classes.about_name}>{name}</h4>
          <p className={classes.about_profession}>{profession}</p>
        </div>
        <Social />
      </div>

      <Contacts location={location} contacts={contacts} />
    </aside>
  );
}
