import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { PiAddressBookTabsLight } from "react-icons/pi";

function App() {
  return (
    <>
      <div className="containerPhonebook">
        <h1 className="title">
          Phonebook <PiAddressBookTabsLight size="30" />
        </h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
