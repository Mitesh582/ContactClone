// Sidebar.js
import React from 'react';
import '../../style.css';
import { PersonFill, ClockHistory, ArrowDownSquare, TrashFill, PlusLg, InfoCircle, Tools, Download } from 'react-bootstrap-icons';
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {

    return (

        <div className=' bg-header Sidebar'>

            <Link to="/" className='text-decoration-none text-dark'>
                <div className='mb-4'>
                    <div className='d-flex align-items-center btn-bg justify-content-start rounded-4 w-75'>
                        <div className='fs-5 ms-3'>
                            <PlusLg />
                        </div>
                        <div className='fs-5 mt-3 mb-3 px-2'>
                            Create contact
                        </div>
                    </div>

                </div>

            </Link>


            <div className='pb-0'>
                <div>
                    <NavLink to="/view" className='d-flex align-items-center btn-create-bg justify-content-start text-dark text-decoration-none rounded-5 p-0 w-90 '>
                        <div className='fs-5 px-3 '>
                            <PersonFill />
                        </div>
                        <div className='fs-5 mt-3 mb-3'>
                            Contacts
                        </div>
                    </NavLink>
                </div>
            </div>


            <div className='pb-0'>
                <div>
                    <div className='d-flex align-items-center justify-content-start rounded-4 p-0 w-90 '>
                        <div className='fs-5 px-3'>
                            <ClockHistory />
                        </div>
                        <div className='fs-5 mt-3 mb-3'>
                            Frequent
                        </div>
                    </div>
                </div>
            </div>


            <div className='pb-0'>
                <div>
                    <div className='d-flex align-items-center justify-content-start rounded-4 p-0 w-90 '>
                        <div className='fs-5 px-3'>
                            <ArrowDownSquare />
                        </div>
                        <div className='fs-5 mt-3 mb-3 me-5'>
                            Other contacts
                        </div>
                        <InfoCircle className='fs-5' />
                    </div>
                </div>
            </div>

            <div className='p-3'>
                <h4 className='fs-5'>Fix and manage</h4>
            </div>



            <div className='pb-0'>
                <div>
                    <div className='d-flex align-items-center justify-content-start rounded-4 p-0 w-90 '>
                        <div className='fs-5 px-3'>
                            <Tools />
                        </div>
                        <div className='fs-5 mt-3 mb-3'>
                            Merge and fix
                        </div>
                    </div>
                </div>
            </div>


            <div className='pb-0'>
                <div>
                    <div className='d-flex align-items-center justify-content-start rounded-4 p-0 w-90 '>
                        <div className='fs-5 px-3'>
                            <Download />
                        </div>
                        <div className='fs-5 mt-3 mb-3'>
                            Import
                        </div>
                    </div>
                </div>
            </div>

            <div className='pb-0'>
                <div>
                    <div className='d-flex align-items-center justify-content-start rounded-4 p-0 w-90 '>
                        <div className='fs-5 px-3'>
                            <TrashFill />
                        </div>
                        <div className='fs-5 mt-3 mb-3'>
                            Bin
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-start rounded-4 p-0 w-90 '>
                <div className='p-3'>
                    <h4 className='fs-5 mt-2 mb-2 me-5'>Labels</h4>
                </div>
                <PlusLg />
            </div>

        </div>
    )
};

export default Sidebar;
