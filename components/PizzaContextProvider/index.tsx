import React from 'react';
import usePizzaStorage from 'hooks/usePizzaStorage';
import {ReturnType} from 'utils/types';

type ContextType = ReturnType<typeof usePizzaStorage>
export const PizzaContext = React.createContext(([{}, (() => null)] as any as ContextType));

const PizzaContextProvider = ({children}: { children: React.ReactNode }) => {
    const stateDispatchTuple = usePizzaStorage();

    return (
        <PizzaContext.Provider value={stateDispatchTuple}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaContextProvider;
