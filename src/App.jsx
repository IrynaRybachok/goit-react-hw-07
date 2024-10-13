import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { PiAddressBookTabsLight } from "react-icons/pi";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/selectors";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className="containerPhonebook">
        <h1 className="title">
          Phonebook <PiAddressBookTabsLight size="30" />
        </h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !isError && <Loader />}
        <ContactList />
      </div>
    </>
  );
}

export default App;
