import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [alert, setAlert] = useState('');

  // Function to set alert with timeout
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert('');
    }, 2000); // Hide the alert after 2 seconds
  };

  const handleSaveContact = (contact) => {
    if (contact.id) {
      setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
      showAlert('Contact updated successfully!');
    } else {
      contact.id = Date.now().toString();
      setContacts([...contacts, contact]);
      showAlert('Contact added successfully!');
    }
    setSelectedContact(null);
  };

  const handleEditContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    showAlert('Contact deleted successfully!');
  };

  const handleCancelEdit = () => {
    setSelectedContact(null);
  };

  return (
    <Container className="mt-5">
      {alert && <Alert variant="success">{alert}</Alert>}
      <Row>
        <Col md={4}>
          <ContactForm
            contact={selectedContact}
            onSave={handleSaveContact}
            onCancel={handleCancelEdit}
          />
        </Col>
        <Col md={8}>
          <ContactList
            contacts={contacts}
            onEdit={handleEditContact}
            onDelete={handleDeleteContact}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
