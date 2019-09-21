import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Calendar from 'components/Calendar';
import GlobalPizzaMeter from 'components/GlobalPizzaMeter';
import PizzaContextProvider from 'components/PizzaContextProvider';
import styles from './styles.module.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <PizzaContextProvider>
            <Header />

            <Container className={styles.content}>
                <Row className={styles.justifyCenter}>
                    <Col lg='auto' md='auto' sm='auto' xs='auto'>
                        <GlobalPizzaMeter />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <Calendar />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </PizzaContextProvider>
    </div>
  );
};

export default App;
