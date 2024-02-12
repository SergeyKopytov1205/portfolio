import { IconLocation, IconMail, IconPhone } from "@tabler/icons-react";
import ContactItem, { ContactItemType } from "./ContactItem/ContactItem";
import classes from "./Contacts.module.css";
import DownloadButton from "./DownloadButton/DownloadButton";

const contacts: ContactItemType[] = [
  { description: "+77777777111", href: "#", Icon: IconPhone, name: "Phone" },
  { description: "example@.tt.com", href: "#", Icon: IconMail, name: "Email" },
  {
    description: "Russia, Ekaterinburg",
    href: "#",
    Icon: IconLocation,
    name: "Location",
  },
];

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
