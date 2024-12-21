import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentContact, setCurrentContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);  
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const startEdit = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    setCurrentContact(contactToEdit); 
  };

  const editContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === currentContact.id ? updatedContact : contact
      )
    );
    setCurrentContact(null);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContactForm
        addContact={addContact}
        currentContact={currentContact}
        editContact={editContact}
      />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;
