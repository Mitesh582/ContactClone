// ContactForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addContact, updateContact } from '../Services/Actions/ContactListAction';
import { Form, Button, Col, Row, Image } from 'react-bootstrap';

function ContactForm() {
    const [formData, setFormData] = useState({
        id: '',
        avatar: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const contacts = useSelector(state => state.contactReducer.contacts);
    
    useEffect(() => {
        if (id) {
            const contact = contacts.find(c => c.id === id);
            setFormData(contact || {});
        }
    }, [id, contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData({
                ...formData,
                [name]: numericValue
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.phone.length !== 10) {
            alert('Phone number must be exactly 10 digits.');
            return;
        }

        if (formData.id) {
            dispatch(updateContact(formData));
        } else {
            dispatch(addContact({ ...formData, id: Date.now().toString() }));
        }

        navigate('/view');
    };

    return (
        <Form onSubmit={handleSubmit} className="contact-form">
            <Row className="mb-3">
                <Col xs={12} md={4} className="text-center">
                    <Image
                        src={formData.avatar || 'https://via.placeholder.com/150'}
                        roundedCircle
                        className="img-thumbnail"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <Form.Group className="mt-2">
                        <Form.Control
                            type="text"
                            name="avatar"
                            value={formData.avatar}
                            onChange={handleChange}
                            placeholder="Avatar URL"
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={8}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            pattern="\d{10}"
                            inputMode="numeric"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter address"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNotes">
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Enter notes"
                            rows={3}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-end gap-2">
                        <Button variant="primary" type="submit">
                            Save Contact
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/')} className="ml-2">
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => navigate('/view')}>
                            View Contact
                        </Button>
                    </div>
                </Col>
            </Row>
        </Form>
    );
}

export default ContactForm;
