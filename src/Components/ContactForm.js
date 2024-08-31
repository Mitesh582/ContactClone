import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row, Image } from 'react-bootstrap';

function ContactForm ({ contact, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        id: '',
        avatar: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
    });

    useEffect(() => {
        if (contact) {
            setFormData(contact);
        } else {
            setFormData({
                id: '',
                avatar: '',
                name: '',
                email: '',
                phone: '',
                address: '',
                notes: ''
            });
        }
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            // Remove non-numeric characters and restrict to 10 digits
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

        // Validate phone number length
        if (formData.phone.length !== 10) {
            alert('Phone number must be exactly 10 digits.');
            return;
        }

        onSave(formData);
        setFormData({
            id: '',
            avatar: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            notes: ''
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
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
                                type="text"  // Using text to handle numeric input more flexibly
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter phone number"
                                pattern="\d{10}"  // Restrict to 10 digits
                                inputMode="numeric"  // Suggests a numeric keyboard for mobile devices
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
                            <Button variant="secondary" onClick={onCancel} className="ml-2">
                                Cancel
                            </Button>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

export default ContactForm;
