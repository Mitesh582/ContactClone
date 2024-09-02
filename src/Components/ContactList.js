import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Services/Actions/ContactListAction';
import { Card, Button, Row, Col } from 'react-bootstrap';

function ContactList({ contacts, onEdit }) {
    const dispatch = useDispatch();

    const handleDelete = id => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            dispatch(deleteContact(id));
        }
    };

    return (
        <Row className="g-4">
            {contacts.map(contact => (
                <Col key={contact.id} md={4} sm={6}>
                    <Card className="contact-card">
                        <Card.Img
                            variant="top"
                            src={contact.avatar || 'https://via.placeholder.com/150'}
                            alt={contact.name}
                            className="card-img-top"
                        />
                        <Card.Body>
                            <Card.Title><strong>Name:</strong> {contact.name}</Card.Title>
                            <Card.Subtitle className="mb-1">
                                <strong>Email:</strong> {contact.email}</Card.Subtitle>
                            <Card.Text>
                                <strong>Phone:</strong> {contact.phone}<br />
                                <strong>Address:</strong> {contact.address}<br/>
                                <strong>Note:</strong> {contact.notes}
                            </Card.Text>
                            <Button variant="info" onClick={() => onEdit(contact)} className="me-2">Edit</Button>
                            <Button variant="danger" onClick={() => handleDelete(contact.id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ContactList;
