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
                <Col xs={12} md={3} className="text-center">
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
                <Col xs={12} md={9}>
                    <Form.Group as={Row} controlId="formName">
                        <Form.Label column sm={3}>Name:</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter name"
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formEmail">
                        <Form.Label column sm={3}>Email:</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPhone">
                        <Form.Label column sm={3}>Phone Number:</Form.Label>
                        <Col sm={9}>
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
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formAddress">
                        <Form.Label column sm={3}>Address:</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter address"
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formNotes">
                        <Form.Label column sm={3}>Notes:</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                as="textarea"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Enter notes"
                                rows={3}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mt-4">
                        <Col sm={12} className="text-right">
                            <Button variant="primary" type="submit">
                                Save Contact
                            </Button>
                            <Button variant="secondary" onClick={() => navigate('/')} className="ml-2">
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => navigate('/view')}>
                                View Contact
                            </Button>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

export default ContactForm;