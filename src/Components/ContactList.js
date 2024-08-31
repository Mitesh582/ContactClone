import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function ContactList ({ contacts, onEdit, onDelete }) {
    return (
        <ListGroup>
            {contacts.map(contact => (
                <ListGroup.Item key={contact.id} className="d-flex justify-content-between align-items-center">
                    <img src={contact.avatar} alt={contact.name} className="rounded-circle mr-3" style={{ width: '50px', height: '50px' }} />
                    <div>
                        <div><strong>{contact.name}</strong></div>
                        <div>{contact.email}</div>
                        <div>{contact.phone}</div>
                        <div>{contact.address}</div>
                    </div>
                    <div>
                        <Button variant="info" onClick={() => onEdit(contact)} className="mr-2">Edit</Button>
                        <Button variant="danger" onClick={() => onDelete(contact.id)}>Delete</Button>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default ContactList;
