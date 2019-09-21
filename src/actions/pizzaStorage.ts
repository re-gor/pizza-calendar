import {ActionCreator, EmptyActionCreator, ReturnType} from 'utils/types';
import {PizzaState} from 'reducers/pizzaStorage';

export const SET_STORAGE = 'pizzaCalendar/setStorage';
export const CLEAR_STORAGE = 'pizzaCalendar/clearStorage';
export const SET_DAY_INFO = 'pizzaCalendar/setDailyScore';

export const setStorage: ActionCreator<typeof SET_STORAGE, {state: PizzaState}> = ({state}) => ({
    type: SET_STORAGE, payload: {state}
});
export const clearStorage: EmptyActionCreator<typeof CLEAR_STORAGE> = () => ({type: CLEAR_STORAGE});
export const setDayInfo: ActionCreator<
    typeof SET_DAY_INFO,
    {score: number, date: string, comment?: string}
> = ({score, date, comment}) => ({
    type: SET_DAY_INFO,
    payload: {score, date, comment},
});

export type Actions = ReturnType<typeof setStorage> | ReturnType<typeof clearStorage> | ReturnType<typeof setDayInfo>
export type DispatchPizzaActions = (action: Actions) => void;
