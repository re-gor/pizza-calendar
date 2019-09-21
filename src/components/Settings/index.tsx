import React from 'react';
import {Button} from 'react-bootstrap';
import {usePizzaContext} from 'hooks/usePizzaContext';
import {clearStorage} from '../../actions/pizzaStorage';

const Settings = () => {
    const [state, dispatch] = usePizzaContext();

    return (
        <div>
            <Button onClick={() => dispatch(clearStorage())} variant='danger'>Очистить всё!</Button>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
};

export default Settings;
