"use client";

import { ContactType } from "@/data";
import ContactItem, { ContactItemProps } from "./ContactItem/ContactItem";
import classes from "./Contacts.module.css";
import DownloadButton from "./DownloadButton/DownloadButton";
import { IconLocation, IconMail, IconPhone } from "@tabler/icons-react";
import { memo, useMemo } from "react";

const matchContactData = (contact: ContactType): ContactItemProps => {
  if (contact.type === "phone")
    return {
      description: contact.value,
      Icon: IconPhone,
      href: `tel:${contact.value}`,
      translationKey: "Phone",
    };
  if (contact.type === "email")
    return {
      description: contact.value,
      Icon: IconMail,
      href: `mailto:${contact.value}`,
      translationKey: "Email",
    };
  throw new Error("Invalid contacts");
};

type ContactsProps = {
  location: string;
  contacts: ContactType[];
};
const Contacts = ({ contacts, location }: ContactsProps) => {
  const contactsData = useMemo(
    () => contacts.map((contact) => matchContactData(contact)),
    [contacts]
  );
  return (
    <ul className={classes.container}>
      {contactsData.map((contact) => {
        return (
          <li key={contact.href} className={classes.item}>
            <ContactItem {...contact} />
          </li>
        );
      })}
      <li className={classes.item}>
        <ContactItem
          href="#"
          description={location}
          translationKey="Location"
          Icon={IconLocation}
        />
      </li>
      <div className={classes.button_wrapper}>
        <DownloadButton />
      </div>
    </ul>
  );
};

export default memo(Contacts);
