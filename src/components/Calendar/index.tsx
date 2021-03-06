import React, {FormEvent, useState} from 'react';
import {Button, Table} from 'react-bootstrap';
import dayjs, {Dayjs, UnitType} from 'dayjs';
import classNames from 'classnames/bind';

import DailyPizzaMeter from 'components/DailyPizzaMeter';
import ScoreModal from './ScoreModal';
import styles from './styles.module.css';
import {usePizzaContext} from 'hooks/usePizzaContext';
import {setDayInfo} from 'actions/pizzaStorage';

const cx = classNames.bind(styles);
const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const isSameOrBefore = (date1: Dayjs, date2: Dayjs, unit: UnitType) => {
    return date1.isSame(date2, unit) || date1.isBefore(date2, unit);
};

const CalendarRows = ({date, onDayClick}: {onDayClick: (day: string) => void, date: Dayjs}) => {
    const startOfMonth = date.startOf('month');
    const endOfMonth = date.endOf('month');
    const start = startOfMonth.startOf('week');
    const end = endOfMonth.endOf('week');

    const [state] = usePizzaContext();
    const rows = [];
    let pointer = start.clone();

    while (isSameOrBefore(pointer, end, 'day')) {
        const weekOfYear = pointer.week();
        const endOfWeek = pointer.endOf('week');
        const row = [];

        do {
            const dateNum = pointer.format('DD');
            const date = pointer.format('YYYY-MM-DD');
            const isOutOfMonth = pointer.isBefore(startOfMonth, 'day') || pointer.isAfter(endOfMonth, 'day');
            const className = cx({
                date: true,
                outOfMonth: isOutOfMonth
            });
            const level = state.calendar[date] ? state.calendar[date].score : 0;
            const max = state.settings.dailyGoal;

            row.push((
                <td className={className} key={dateNum} onClick={() => onDayClick(date)}>
                    <div className={styles.dailyPizzaMeter}>
                        <DailyPizzaMeter level={level} max={max}/>
                    </div>
                    {dateNum}
                </td>
            ));
            pointer = pointer.add(1, 'day');
        } while (isSameOrBefore(pointer, endOfWeek, 'day'));

        rows.push((
            <tr key={weekOfYear}>
                <td className={styles.weekOfYear}>{weekOfYear}</td>
                {row}
            </tr>
        ));
    }

    return (
        <>
            {rows.map(row => row)}
        </>
    );
};

const Calendar = () => {
    const [date, setDate] = useState(dayjs());
    const nextMonth = () => setDate(date.set('month', date.month() + 1));
    const prevMonth = () => setDate(date.set('month', date.month() - 1));

    const [, dispatch] = usePizzaContext();
    const [showModal, setShowModal] = useState(false);
    const [chosenDate, setChosenDate] = useState<null | string>(null);

    const onShowModal = (date: string) => {
        setShowModal(true);
        setChosenDate(date)
    };
    const onCloseModal = () => setShowModal(false);
    const onSubmitModal = (event: FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        const date = formData.get('date') as string;
        const score = Number(formData.get('score'));
        const comment = String(formData.get('comment')) || undefined;
        dispatch(setDayInfo({date, score, comment}));
        onCloseModal();

        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Button variant="light" onClick={prevMonth}>{'\u25c4'}</Button>
                <h3>
                    {date.year() === dayjs().year() ? date.format('MMMM') : date.format('MMMM YYYY')}
                </h3>
                <Button variant="light" onClick={nextMonth}>{'\u25ba'}</Button>
            </div>
            <Table bordered>
                <thead>
                    <tr>
                        <td>#</td>
                        {WEEK_DAYS.map(wd => <td key={wd}>{wd}</td>)}
                    </tr>
                </thead>
                <tbody>
                    <CalendarRows onDayClick={onShowModal} date={date}/>
                </tbody>
            </Table>
            <ScoreModal
                date = {chosenDate as string}
                show={showModal}
                onClose={onCloseModal}
                onSubmit={onSubmitModal}
            />
        </div>
    )
};

export default Calendar;
