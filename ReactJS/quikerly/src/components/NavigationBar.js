import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'; 

const Styles = styled.div`
  .navbar {
      background-color: #222;
  }

  .navbar-brand, .navbar-nav .nav-link {
      color: #bbb;

      &:hover {
          color: white;
      }
  }
`;

export const NavigationBar = () => (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Quikerly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.item><Nav.link href="/">Home</Nav.link></Nav.item>
                        <Nav.item><Nav.link href="/book-a-delivery">Book A Delivery</Nav.link></Nav.item>
                        <Nav.item><Nav.link href="/join-us">Join Us</Nav.link></Nav.item>
                        <Nav.item><Nav.link href="/contact">Contact Us</Nav.link></Nav.item>
                        <Nav.item><Nav.link href="/faq">FAQ</Nav.link></Nav.item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
