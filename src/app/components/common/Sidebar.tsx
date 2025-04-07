import { SidebarProps } from '@/app/types/common.type';
import Link from 'next/link';
import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Sidebar = (props: SidebarProps) => {
    return (
        <div className="p-3 vh-100">
            <div className='d-none d-md-block'>
                <h5 className="mb-4">Main Menu</h5>
            </div>
            <ListGroup variant="flush">
                <ListGroupItem action>
                    <Link href="/" className="text-decoration-none text-dark d-block">Home</Link>
                </ListGroupItem>
                <ListGroupItem action>
                    <Link href="/components/pages/study" className="text-decoration-none text-dark d-block">Study</Link>
                </ListGroupItem>
                <ListGroupItem action>
                    <Link href="/components/pages/batches" className="text-decoration-none text-dark d-block">Batches</Link>
                </ListGroupItem>
                <ListGroupItem action>
                    <Link href="/components/pages/testSeries" className="text-decoration-none text-dark d-block">Test Series</Link>
                </ListGroupItem>
                <ListGroupItem action>
                    <Link href="/components/pages/latestJob" className="text-decoration-none text-dark d-block">Latest Government jobs</Link>
                </ListGroupItem>
                <ListGroupItem action>
                    <Link href="/components/pages/contactUs" className="text-decoration-none text-dark d-block">Contact Us</Link>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default Sidebar