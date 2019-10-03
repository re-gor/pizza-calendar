import React from 'react';
import styles from './styles.module.css';
import {Navbar, Container, Row, Col} from 'react-bootstrap';
import IconsDisclaimer from 'components/IconsDisclaimer';

const Footer = () => (
    <footer className={styles.root}>
        <div className={styles.padder} />
        <Navbar bg='dark' fixed='bottom' variant={'dark'}>
            <Container>
                <Row className={styles.row}>
                    <Col lg='auto' md='auto' sm='auto' xs='auto'>
                        <Navbar.Text>
                            No copyright, for non-commercial use only
                        </Navbar.Text>
                    </Col>
                    <Col lg md sm xs />
                    <Col lg='auto' md='auto' sm='auto' xs='auto'>
                        <Navbar.Text>
                            <IconsDisclaimer/>
                        </Navbar.Text>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    </footer>
);

export default Footer;
