import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default props => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#/quiz">Quiz Políticos</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#/politicos">
                    Lista de Políticos
                </NavItem>
                <NavItem eventKey={2} href="#/about">
                    About
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
