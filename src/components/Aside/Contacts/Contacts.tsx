import ContactItem from "./ContactItem/ContactItem";
import classes from "./Contacts.module.css";
import DownloadButton from "./DownloadButton/DownloadButton";
import { contacts } from "@/data";

const Contacts = () => {
  return (
    <ul className={classes.container}>
      {contacts.map((contact) => {
        return (
          <li key={contact.name} className={classes.item}>
            <ContactItem {...contact} />
          </li>
        );
      })}
      <div className={classes.button_wrapper}>
        <DownloadButton />
      </div>
    </ul>
  );
};

export default Contacts;
