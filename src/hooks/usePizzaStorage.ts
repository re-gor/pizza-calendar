import {useReducer} from 'react';
import {INITIAL_STATE, PizzaState, reducer} from 'reducers/pizzaStorage';
import useLocalStorage from './useLocalStorage';
import {DispatchPizzaActions} from 'actions/pizzaStorage';

const STORAGE_KEY = '__PIZZA_STORAGE_KEY__';


function usePizzaStorage(): [PizzaState, DispatchPizzaActions] {
    const [localStorageState, setState] = useLocalStorage(STORAGE_KEY, INITIAL_STATE);
    const tuple = useReducer(reducer, localStorageState || INITIAL_STATE);
    const [state] = tuple;
    setState(state);

    return tuple;
}

export default usePizzaStorage;
