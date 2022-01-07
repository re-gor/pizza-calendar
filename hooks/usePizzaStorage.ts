import {useEffect, useReducer} from 'react';
import {INITIAL_STATE, PizzaState, reducer} from 'reducers/pizzaStorage';
import {Actions} from 'actions/pizzaStorage';

const STORAGE_KEY = '__PIZZA_STORAGE_KEY__';

function extractInitialState() {
    const localStorageItem = localStorage.getItem(STORAGE_KEY);

    try {
        return localStorageItem ? JSON.parse(localStorageItem) : INITIAL_STATE;
    } catch (error) {
        console.error('Can not parse localStorage', localStorageItem, error);

        return INITIAL_STATE;
    }
}

/**
 * Добавляет компоненту редюсер, dispatch и дампинг в localStorage
 */
function usePizzaStorage(): [PizzaState, (action: Actions) => void] {
    const tuple = useReducer(reducer, extractInitialState());
    const [state] = tuple;

    useEffect(() => {
        const stringifiedNewValue = JSON.stringify(state);

        localStorage.setItem(STORAGE_KEY, stringifiedNewValue);
    }, [state]);

    return tuple;
}

export default usePizzaStorage;
