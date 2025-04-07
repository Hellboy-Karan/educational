"use client";

import { useState } from "react";
import { Button, Col, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from "react-bootstrap";
import Sidebar from "./app/components/common/Sidebar";

export default function ClientLayout(props: any) {
    let { childrenProp } = props;
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <>
            {/* Toggle Button */}
            <div className="d-md-none p-2 bg-light shadow-sm">
                <Button variant="primary" onClick={toggleSidebar}>
                    ☰ Menu
                </Button>
            </div>
            <Sidebar />
            {/* <Offcanvas show={showSidebar} onHide={toggleSidebar} responsive="md">
                <OffcanvasHeader closeButton>
                    <OffcanvasTitle>Physics Wallah</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Sidebar />
                </OffcanvasBody>
            </Offcanvas> */}
        </>
    );
}
