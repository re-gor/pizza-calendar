import dayjs, {Dayjs} from 'dayjs';
import React, {useState} from 'react';
import {usePizzaContext} from 'hooks/usePizzaContext';
import styles from './styles.module.css';

const VIEW_BOX_X = 300
const DEFAULT_SCALE = 30;
const FORMAT = 'YYYY-MM-DD';
const ZERO_X = 5;
const ZERO_Y = 90;
const MAX_Y = 5;
const MAX_POINT_Y = 10;
const MAX_X = VIEW_BOX_X - 5;
const LIGHT_STROKE = 0.05;

const ScoreGraphic = () => {
    const [{calendar, settings}] = usePizzaContext();
    const {dailyGoal} = settings;


    const today = dayjs();

    const [lastDate, setLastDate] = useState(today);
    const [scale, setScale] = useState(DEFAULT_SCALE);
    const availableDates = Object.keys(calendar);
    const dates = getDates(lastDate, scale);
    const values = getValues(calendar, dates);
    const yStep = Math.abs((MAX_POINT_Y - ZERO_Y) / dailyGoal);

    return (
        <div className={styles.root}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${VIEW_BOX_X} 100`} preserveAspectRatio="none" className={styles.svg}>
                <Triangle id='_' />
                <rect width="100%" height="100%" x="0" y="0" fill="none" strokeWidth={LIGHT_STROKE} stroke="#0f0"/>
                <path d={`M 0 ${ZERO_Y} H ${MAX_X} `} stroke="#000" strokeWidth={LIGHT_STROKE} markerEnd={'url(#triangle__)'}/>
                <path d={`M ${ZERO_X} 100 V ${MAX_Y} `} stroke="#000" strokeWidth={LIGHT_STROKE} markerEnd={'url(#triangle__)'}/>
                <Graphic data={values} yStep={yStep} />

                <XSerifs data={dates} />
            </svg>
        </div>
    );
};

const getDates = (lastDate: Dayjs, scale: number) => {
    const dates = [];
    let day = lastDate;

    for (let i = scale; i >=0; --i) {
        dates.push(day.format(FORMAT));
        day = day.subtract(1, 'day');
    }

    return dates.sort();
};
const getValues = (calendar: {[key in string]: {score: number}}, dates: string[]) => {
    return dates.map(d => calendar[d] ? (calendar[d].score || 0) : 0);
};

const Triangle = ({id}: {id?: string}) => {
    const _id = id || Math.random().toString(16).slice(2);

    return (
        <defs>
            <marker id={`triangle_${_id}`} viewBox="0 0 10 10"
                    refX="1" refY="5"
                    markerUnits="strokeWidth"
                    markerWidth="10" markerHeight="10"
                    orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#000"/>
            </marker>
        </defs>
    );
};

const Graphic = ({data, yStep}: {data: number[], yStep: number}) => {
    const step = (MAX_X - ZERO_X) / data.length;
    const points = data.map((d, i) => ({x: ZERO_X + i * step, y: ZERO_Y - yStep * d}));
    const pathD = 'M ' + points.map(({x, y}) => `${x} ${y}`).join(' L ');

    return (
        <>
            <path d={pathD} stroke="#0f0" strokeWidth={0.25} fill="none" />
            {points.map(({x, y}) => <circle cx={x} cy={y} r={0.5} fill={"#00f"} key={`point_${x}_${y}`}/>)}
        </>
    );
};

const XSerifs = ({data, every = 3}: {data: string[], every?: number}) => {
    const step = (MAX_X - ZERO_X) / data.length;
    const low = ZERO_Y - .5;

    return (
        <React.Fragment>
            {data.map((d, i) => {
                if (i % every) {
                    return null
                }

                return (
                    <React.Fragment key={`serif_x_${i}`}>
                        <path d={`M ${ZERO_X + i * step} ${low} v1`} stroke="#000" strokeWidth={LIGHT_STROKE} />
                        <g transform='translate(-.5, 2)' >
                            <text x={`${ZERO_X + i * step}`}
                                  y={low}
                                  className={styles.serifText}
                                  transform={`rotate(45, ${ZERO_X + i * step}, ${low})`}
                                  textLength={d.length - 2}
                            >{d}</text>
                        </g>
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
};

export default ScoreGraphic;
