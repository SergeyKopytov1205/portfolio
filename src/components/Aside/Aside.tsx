import { getAboutData } from "@/data";
import classes from "./Aside.module.css";
import Contacts from "./Contacts/Contacts";
import Social from "./Social/Social";
import Image from "next/image";

export default async function Aside() {
  const about = await getAboutData();
  const { name, profession, location, contacts, image } = about;
  return (
    <aside className={classes.container}>
      <div className={classes.info}>
        <div className={classes.photo}>
          <Image
            src={image}
            alt="Photo"
            fill
            sizes="100%"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
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
