import React from 'react'
import {Navbar,Container, Nav,NavDropdown,Button } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserOptions from '../Layout/UserOptions';

const NavBar = () => {

    const { isAuthenticated, user } = useSelector((state) => state.user);


    return (
        <>
            <Navbar style={{fontWeight:'600', backgroundColor:"#0C2B4B" , color:"#ffffff"}} variant="dark" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <img src={Logo} alt="" width='70px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link style={{color:"#ffffff"}} as={Link} to={'/'}>HOME</Nav.Link>
                    <Nav.Link style={{color:"#ffffff"}} as={Link} to={'/about'}>ABOUT</Nav.Link>
                    <NavDropdown style={{color:"#ffffff"}} title="COURSES" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={'/courses'}>COURSES</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/packages'}>PACKAGES</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/indfees'}>INDIVIDUAL FEES</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/fivehrclass'}>5 HOURS CLASS</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/sixhrclass'}>6 HOURS CLASS</NavDropdown.Item>
                    
                    </NavDropdown>
                    <Nav.Link style={{color:"#ffffff"}} as={Link} to={'/blog'}>BLOG</Nav.Link>
                    <Nav.Link style={{color:"#ffffff"}} as={Link} to={'/faq'}>FAQ</Nav.Link>
                    <Nav.Link style={{color:"#ffffff"}} as={Link} to={'/contact'}>CONTACT</Nav.Link>
                    <Nav.Link as={Link} to={'/login'}>
                    {isAuthenticated ? <UserOptions user={user} /> : <Button variant="warning">LOGIN</Button>}
                    
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar
