import React from 'react';
import {Container, Navbar, Row, Col} from 'react-bootstrap';
import logo from 'assets/pizza_heart.svg';
import styles from './styles.module.css';
import Picture from 'components/Picture';

export default () => (
    <header className={styles.root}>
        <Navbar bg='dark' variant="dark">
            <Container>
                <Row className={styles.row}>
                    <Col lg='auto' md='auto' sm='auto'>
                        <Navbar.Brand href="#home">
                            <Picture src={logo} alt='logo' width={'40px'}/>
                            {' Pizza calendar'}
                        </Navbar.Brand>
                    </Col>
                    <Col lg md sm />
                    <Col lg='auto' md='auto' sm='auto'>
                        <Navbar.Text>
                            Can't wait no more
                        </Navbar.Text>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    </header>
)
