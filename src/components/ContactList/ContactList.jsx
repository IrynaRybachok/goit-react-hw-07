import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filterContactList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.contactList}>
      {filterContactList.map((data) => (
        <li className={s.contactItem} key={nanoid()}>
          <Contact data={data} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
