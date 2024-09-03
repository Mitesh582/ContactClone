// Header.js
import React from 'react';
import '../../style.css'

const Header = ({ onSearch, onCreate }) => (
    <header>
        <input type="text" placeholder="Search contacts" onChange={(e) => onSearch(e.target.value)} />
        <button className="create-contact" onClick={onCreate}>Create Contact</button>
    </header>
);

export default Header;
