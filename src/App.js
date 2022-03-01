import logo from './logo.svg';
import './App.css';
import contactsList from './contacts.json';
import React, {useState} from 'react';



function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0,5));
  const addRandomContact = () => {
    let newContact = contactsList[Math.floor(Math.random() * contactsList.length)];
    // contacts.push(newContact);
    setContacts([...contacts, newContact]);
  }
  const sortByPopularity = () => {
    let contactsSorted = [...contacts].sort((contactTwo, contactOne) => contactOne.popularity - contactTwo.popularity);
    setContacts(contactsSorted);
    // contacts = contactsSorted;
  }
  const sortByName = () => {
    let contactsSorted = [...contacts].sort((a,b) => a.name.localeCompare(b.name));
    setContacts(contactsSorted);
    // contacts = contactsSorted
  }
  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    })
    setContacts(filteredContacts);
  }
  return (
    <div className="App">
      <h2>Iron contacts</h2>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      {console.log(contacts)}
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((contact) => {
          return(
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} className="contact-img" alt="contactPicture" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && '🏆'}</td>
              <td>{contact.wonEmmy && '🏆'}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          )
        })}

      </table>
    </div>
  );
}

export default App;
