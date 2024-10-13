import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filterContactsList = useSelector(selectFilteredContacts);
  return (
    <ul className={s.contactList}>
      {filterContactsList.map((data) => (
        <li className={s.contactItem} key={data.id}>
          <Contact data={data} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
