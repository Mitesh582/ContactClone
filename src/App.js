// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './Services/Actions/ContactListAction';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import MainLayout from './Components/MainLayout/MainLayout';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Router>
            <MainLayout
                onSearch={(searchTerm) => console.log('Search:', searchTerm)} // Add functionality if needed
                onCreate={() => console.log('Create Contact')} // Add functionality if needed
            >
                <Routes>
                    <Route path="/" element={<ContactForm />} />
                    <Route path="/view" element={<ContactList />} />
                    <Route path="/edit/:id" element={<ContactForm />} />
                </Routes>
            </MainLayout>
        </Router>
    );
}

export default App;