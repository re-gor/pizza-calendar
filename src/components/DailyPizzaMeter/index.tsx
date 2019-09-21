import React from 'react';
import styles from './styles.module.css';

const DailyPizzaMeter = ({level, max, width, height}: {level: number, max: number, width?: number, height?: number}) => {
    const style = {
        height: Math.ceil(level / max * 100) + '%',
    };

    const rootStyle = {
        width: width || '100%',
        height: height || '100%',
    };

    return (
        <span className={styles.root} style={rootStyle}>
            <span className={styles.empty} />
            <span className={styles.full} style={style}/>
        </span>
    )
};

export default DailyPizzaMeter;
