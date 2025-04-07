import Link from 'next/link';
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavDropdown, NavLink, DropdownItem, DropdownDivider } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const Topbar: React.FC = () => (
    <>
        {/* <Navbar bg="white" className="shadow-sm justify-content-between px-3 py-2">
        <NavbarBrand>Bihar Exams</NavbarBrand>
        <div className="d-flex align-items-center">
            <span className="me-3">XP: 56</span>
            <FaUserCircle size={30} />
            <span className="ms-2">Hi, Karan</span>
        </div>
    </Navbar> */}

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarBrand>Lalbabu Institute</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink as="div">
                            <Link href="/components/info/founder" className="text-decoration-none text-dark d-block">Founder</Link>
                        </NavLink>
                        <NavLink as="div">
                            <Link href="/components/info/guider" className="text-decoration-none text-dark d-block">Guider's</Link>
                        </NavLink>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <DropdownItem>
                                <Link href="/components/info/contact" className="text-decoration-none text-dark d-block"> Contact Us</Link>
                            </DropdownItem>
                            <DropdownDivider />
                            <DropdownItem>
                                <Link href="/components/info/developer" className="text-decoration-none text-dark d-block"> Developer Profile</Link>
                            </DropdownItem>
                        </NavDropdown>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </>

);

export default Topbar;
