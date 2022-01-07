import React, {FormEvent} from 'react';
import {Button, Form, FormControl, FormLabel, Modal} from 'react-bootstrap';
import {usePizzaContext} from 'hooks/usePizzaContext';

type Props = {
    onClose: () => void,
    onSubmit: (event: FormEvent<HTMLFormElement>) => void,
    date: string,
    show: boolean
};

const ScoreModal = ({
    onClose,
    onSubmit,
    date,
    show
}: Props) => {
    const [state] = usePizzaContext();
    const {settings, calendar} = state;
    const {dailyGoal, dailyBonus} = settings;
    const {score = 0, comment = ''} = calendar[date] || {};

    return (
        <Modal
            size='sm'
            centered={true}
            show={show}
            onHide={onClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Set your score!
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form id='dailyScoreSet' onSubmit={onSubmit}>
                    <FormControl value={date} hidden={true} readOnly name='date'/>
                    <Form.Group>
                        <FormLabel>
                            Score
                        </FormLabel>
                        <FormControl
                            name='score'
                            as='select'
                            placeholder="Remember: nobody likes cheaters"
                            aria-label="Remember: nobody likes cheaters"
                            aria-describedby="daily-score"
                            defaultValue={String(score || 0)}
                        >
                            {(new Array(dailyGoal + dailyBonus + 1)).fill(null).map((_, i) => (
                                <option key={i}>{i}</option>
                            ))}
                        </FormControl>
                    </Form.Group>
                    <Form.Group>
                        <FormLabel>
                            Comment
                        </FormLabel>
                        <Form.Control as="textarea" rows="3" name='comment' defaultValue={comment} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" type='submit' form='dailyScoreSet'>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ScoreModal;
