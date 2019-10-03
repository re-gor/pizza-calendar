import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Calendar from 'components/Calendar';
import GlobalPizzaMeter from 'components/GlobalPizzaMeter';
import PizzaContextProvider from 'components/PizzaContextProvider';
import Settings from 'components/Settings';
import styles from './styles.module.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <PizzaContextProvider>
                    <Header/>

                    <Container className={styles.content}>
                        <Switch>
                            <Route path={'/'} component={HomePage} exact />
                            <Route path={'/settings'} component={SettingsPage} exact />
                        </Switch>
                    </Container>

                    <Footer/>
                </PizzaContextProvider>
            </div>
        </Router>
    );
};

const HomePage = () => (
    <>
        <Row className='justify-content-center'>
            <Col lg='auto' md='auto' sm='auto' xs='auto'>
                <GlobalPizzaMeter/>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col>
                <Calendar/>
            </Col>
        </Row>
    </>
);

const SettingsPage = () => (
    <>
        <Row className='justify-content-center'>
            <Col>
                <Settings />
            </Col>
        </Row>
    </>
);

export default App;
