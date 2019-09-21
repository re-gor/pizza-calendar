import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from 'assets/pizza_heart.svg';
import styles from './styles.module.css';
import Picture from 'components/Picture';

export default () => (
    <header className={styles.root}>
        <Navbar bg='dark' variant="dark" expand='sm'>
            <Container className="justify-content-between">
                <LinkContainer to='/'>
                    <Navbar.Brand title="Can't wait no more">
                        <Picture src={logo} alt='logo' width={'40px'}/>
                        {' Pizza calendar'}
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="header-nav"/>
                <Navbar.Collapse id="header-nav" className="flex-grow-0">
                    <Nav>
                        <LinkContainer to='/' exact>
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/settings' exact>
                            <Nav.Link>
                                Settings
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
)
