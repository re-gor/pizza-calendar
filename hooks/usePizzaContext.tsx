import {useContext} from 'react';
import {PizzaContext} from 'components/PizzaContextProvider';

export const usePizzaContext = () => useContext(PizzaContext);
