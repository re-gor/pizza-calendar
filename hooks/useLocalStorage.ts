/**
 * @fileoverview
 * Попытался сделать на хуках двухсторонний поток: чтобы писалось в локал-сторадж,
 * а если там словилось обновление, то страница перерисовывалась
 * Получилось. Но с редюсерами и стейтом выходит или громоздко, или ненадежно. Оставил только запись в localstorage
 * @deprecated
 * @see usePizzaStorage
 */

import { useState, useEffect } from 'react';
import {fromEvent, of, EMPTY, Subject, Observable} from "rxjs";
import {catchError, mergeAll, mergeMap} from 'rxjs/operators';


type StorageNextValue = {oldValue: string | null, newValue: string | null};
type DispatchStorageSubject = Subject<StorageNextValue>;
type ObservableStorage = Observable<StorageNextValue>

function getEventStorageStream(storageKey: string): ObservableStorage {
    return fromEvent(window, 'storage')
        .pipe(
            mergeMap(event => {
                const _event = event as StorageEvent;
                if (_event.storageArea !== localStorage || _event.key !== storageKey) {
                    return EMPTY;
                }

                return of({
                    oldValue: _event.oldValue,
                    newValue: _event.newValue,
                });
            }),
            catchError((error, observable) => {
                console.error('Error occurred in event storage stream');
                console.error(error);

                return observable;
            })
        );
}


type Result = [
    DispatchStorageSubject,
    (any: any) => void,
];

function getDispatchStorageStream<T>(storageKey: string): Result {
    const subject: DispatchStorageSubject = new Subject();
    const dispatch = (newValue: T) => {
        try {
            const stringifiedNewValue = JSON.stringify(newValue);

            subject.next({
                oldValue: localStorage.getItem(storageKey) || null,
                newValue: stringifiedNewValue,
            });
            localStorage.setItem(storageKey, stringifiedNewValue);
        } catch (error) {
            console.error('Error occured during dispatching new local storage value');
            console.log(error);
        }
    };

    return [subject, dispatch];
}

function useLocalStorage<T>(storageKey: string, initialState: T): [T, (newValue: T) => void] {
    const rawLocalStorageValue = localStorage.getItem(storageKey);
    let localStorageValue = null;

    if (rawLocalStorageValue) {
        try {
            localStorageValue = JSON.parse(rawLocalStorageValue);
        } catch (error) {
            console.error('Bad value in local storage', rawLocalStorageValue);
            localStorageValue = null;
        }
    }

    const [state, setState] = useState(localStorageValue || initialState);
    const [subject$, dispatch] = getDispatchStorageStream<T>(storageKey);

    const storageObservable = of(
        getEventStorageStream(storageKey),
        subject$
    ).pipe(
        mergeAll(),
        catchError((err, o) => o)
    );

    useEffect(() => {
        const subscription = storageObservable.subscribe({
            next: x => {
                const {newValue} = x;
                try {
                    const val = newValue ? JSON.parse(newValue) : newValue;
                    setState(val);
                } catch (error) {
                    console.error('Error during writing new state value: ', newValue);
                    console.error(error);
                }
            },
            error: error => {
                console.error('Fatal error in localStorage observer');
                console.error(error);
            }
        });

        return function clear() {
            subscription.unsubscribe();
        }
    });

    return [state, dispatch];
}

export default useLocalStorage;
