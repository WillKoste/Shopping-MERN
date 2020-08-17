import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import RegisterModal from '../auth/RegisterModal';
import LoginModal from '../auth/LoginModal';
import Logout from '../auth/Logout';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar color="dark" dark expand="md" className="mb-5">
        <Container>
          <NavbarBrand href="/">ShoppingList</NavbarBrand>
          <NavbarToggler onClick={toggle}></NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              <NavItem>
                <RegisterModal />
              </NavItem>
              <NavItem>
                <LoginModal />
              </NavItem>
              <NavItem>
                <Logout />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar;