import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function MainLayout({ children }) {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="main-layout">
            <Header toggleSidebar={toggleSidebar} />
            <Container fluid className="layout-body">
                <Row noGutters>
                    {sidebarVisible && (
                        <Col md={3} className="sidebar-col">
                            <Sidebar />
                        </Col>
                    )}
                    <Col md={sidebarVisible ? 9 : 12} className="main-content">
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainLayout;
