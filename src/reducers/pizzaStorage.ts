import {
    Actions,
    SET_DAY_INFO,
    SET_STORAGE,
    CLEAR_STORAGE
} from 'actions/pizzaStorage';

export type PizzaState = {
    calendar: {[key in string]: {
        score: number,
        comment?: string,
    }},
    eatenPizzasCount: number,
    settings: {
        dailyGoal: number,
        goal: number
    }
}

export const INITIAL_STATE: PizzaState = {
    calendar: {},
    eatenPizzasCount: 0,
    settings: {
        dailyGoal: 6,
        goal: 160,
    }
};

export function reducer(state: PizzaState, action: Actions): PizzaState {
    switch(action.type) {
        case SET_DAY_INFO:
            const {score, date, comment} = action.payload;

            return {
                ...state,
                calendar: {
                    ...state.calendar,
                    [date]: {
                        score,
                        comment,
                    },
                },
            };
        case SET_STORAGE:
            return action.payload.state;
        case CLEAR_STORAGE:
            return INITIAL_STATE;
        default:
            return state;
    }
}

