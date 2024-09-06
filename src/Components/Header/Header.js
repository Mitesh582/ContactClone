// Header.js
import React from 'react';
import '../../style.css';
import { Col, Row } from 'react-bootstrap';
import { List, Search, QuestionCircle, Gear, ThreeDots } from 'react-bootstrap-icons';

function Header({ toggleSidebar }) {

    return (

        <div className='bg-header w-100'>
            <Row>

                <div className='d-flex align-items-center'>
                    <Col md={3}>
                        <div className='d-flex align-items-center px-2'>
                            <div className='p-3'>
                                <div className='text-dark'>
                                    <button className='border-0 bg-header list-button' onClick={toggleSidebar}>
                                        <List className='fs-5' />
                                    </button>
                                </div>
                            </div>
                            <div className='Logo-user d-flex align-items-center'>
                                <img src="contacts_dp.png" alt="Contact" height={40} />
                                <span className='fs-5 px-2'>Contacts</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='w-60 bg-serach py-1 rounded-2 px-0'>
                            <div className='w-50 bg-serach rounded-2'>
                                <form action="#" className='d-flex align-items-center'>
                                    <div className='px-2'>
                                        <Search className='fs-5 ms-2' />
                                    </div>
                                    <div className='px-2 w-100'>
                                        <input type="text" className='w-100 border-0 py-2 bg-serach' placeholder='Search...' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='px-2 d-flex justify-content-end'>
                            <button className='border-0 bg-header fs-5 color-icon-header'>
                                <QuestionCircle />
                            </button>
                            <button className='border-0 bg-header fs-5 color-icon-header px-4'>
                                <Gear />
                            </button>
                            <button className='border-0 bg-header fs-5 color-icon-header px-4'>
                                <ThreeDots />
                            </button>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>
    )
};

export default Header;
