// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import { fetchContacts } from './Services/Actions/ContactListAction';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts()); // App start fetch contacts
    }, [dispatch]);

    return (
        <Router>
            <Container className="mt-5">
                <Routes>
                    <Route path="/" element={<ContactForm />} />
                    <Route path="/view" element={<ContactList />} />
                    <Route path="/edit/:id" element={<ContactForm />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;