import React from 'react';
import {Alert} from 'react-bootstrap';
import styles from './styles.module.css';
import {usePizzaContext} from 'hooks/usePizzaContext';
import {PizzaState} from 'reducers/pizzaStorage';

const selectCurrentGlobalScore = (state: PizzaState): number => {
    const {calendar, eatenPizzasCount, settings} = state;

    const totalScore = Object
        .values(calendar)
        .reduce((sum, day) => sum + (day.score || 0), 0);

    return totalScore - settings.goal * eatenPizzasCount;
};

const PizzaAlert = ({percentage}: {percentage: number}) => {
    if (percentage < 0) {
        return (
            <div className={styles.alert}>
                <Alert variant='danger'>You owe pizza bank!</Alert>
            </div>
        );
    } else if (percentage >= 100) {
        return (
            <div className={styles.alert}>
                <Alert variant='success'>Hoooray! You deserve pizza!</Alert>
            </div>
        );
    }

    return null;
};

const GlobalPizzaMeter = () => {
    const [state] = usePizzaContext();
    const current = selectCurrentGlobalScore(state);
    const goal = state.settings.goal;
    const percentage = Math.ceil(current / goal * 100);
    const cutPercentage = current < 0 ? 0 :
        current >= goal ? 100 : percentage;

    const fullStyle = {
        width: `${cutPercentage}%`,
    };

    const percentageStyle = {
        textShadow: `rgba(${(1 - cutPercentage / 100) * 255}, ${cutPercentage / 100 * 255}, 0) 0 0 4px`,
    };

    return (
        <div className={styles.root}>
            <div className={styles.progress}>
                <div className={styles.empty}/>
                <div className={styles.full} style={fullStyle} />
            </div>
            <div className={styles.percentage} style={percentageStyle}>
                {`${percentage} %`}
            </div>
            <PizzaAlert percentage={percentage} />
        </div>
    )
};

export default GlobalPizzaMeter;
