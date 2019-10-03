import React, {FormEvent} from 'react';
import {Button, Accordion, Card, Container, Form} from 'react-bootstrap';
import {usePizzaContext} from 'hooks/usePizzaContext';
import {clearStorage, setSettings} from 'actions/pizzaStorage';
import styles from './styles.module.css'

const Settings = () => {
    const [state, dispatch] = usePizzaContext();
    const {settings} = state;

    const onPreferencesSubmit = (event: FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        const goal = Number(formData.get('goal'));
        const dailyGoal = Number(formData.get('dailyGoal'));

        if (!goal || !dailyGoal || goal <= 0 || dailyGoal <= 0) {
            alert('Bad preferences')
        } else {
            dispatch(setSettings({goal, dailyGoal}));
        }
        console.log(Array.from(formData.entries()));

        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Container className="flex-grow-1">
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className={styles.cardHeader}>
                        Preferences
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form onSubmit={onPreferencesSubmit}>
                                <Form.Group>
                                    <Form.Label>
                                        Daily goal
                                    </Form.Label>
                                    <Form.Control as='input' name='dailyGoal' type="number"
                                                  defaultValue={settings.dailyGoal}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Pizza Goal
                                    </Form.Label>
                                    <Form.Control as='input' name='goal' type="number" defaultValue={settings.goal} />
                                </Form.Group>
                                <Button type='submit' variant='primary'>Save Preferences</Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1"  className={styles.cardHeader}>
                        Store
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <pre>{JSON.stringify(state, null, 2)}</pre>
                            <Button onClick={() => dispatch(clearStorage())} variant='danger'>Очистить всё!</Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );
};

export default Settings;
