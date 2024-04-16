import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import initialcContacts from "../initialContacts.json";
import { nanoid } from "nanoid";

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) {
      return initialcContacts;
    } else {
      return JSON.parse(stringifiedContacts);
    }
  });
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  });
  function onAddContact(formContact) {
    const finalFormContact = {
      id: nanoid(),
      ...formContact,
    };
    console.log(finalFormContact);
    setContacts((prevContact) => [...prevContact, finalFormContact]);
  }
  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => {
        return contact.id !== contactId;
      });
    });
  };
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
