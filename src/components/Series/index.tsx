import React from 'react';
import dayjs from 'dayjs';
import {usePizzaContext} from 'hooks/usePizzaContext';
import {Table} from 'react-bootstrap';

const Series = () => {
    const [{calendar, settings}] = usePizzaContext();
    const series = getSeries(score => score > 0)(calendar, settings.dailyGoal);
    const highSeries = getSeries((score, dailyGoal) => score > 0 && score === dailyGoal)(calendar, settings.dailyGoal);
    const currentSeries = getCurrentSeries(score => score > 0)(calendar, settings.dailyGoal);
    const currentHighSeries = getCurrentSeries((score, dailyGoal) => score > 0 && score === dailyGoal)(calendar, settings.dailyGoal);

    return (
        <Table bordered striped hover size='sm'>
            <tbody>
                <tr>
                    <td>Longest High Series</td><td>{highSeries.value}</td>
                    <td>finished at:</td><td>{highSeries.date}</td>
                </tr>
                <tr>
                    <td>Longest Series:</td><td>{series.value}</td>
                    <td>finished at:</td><td>{series.date}</td>
                </tr>
                <tr>
                    <td>Current High Series:</td><td>{currentHighSeries.value}</td>
                    <td>started at:</td><td>{currentHighSeries.date}</td>
                </tr>
                <tr>
                    <td>Current Series:</td><td>{currentSeries.value}</td>
                    <td>started at:</td><td>{currentSeries.date}</td>
                </tr>
            </tbody>
        </Table>
    );
};

const getSeries = (predicate: (score: number, dailyGoal: number) => boolean) =>
    (calendar: { [key in string]: { score: number } }, dailyGoal: number) =>
    {
        const calendarDates = Object.keys(calendar).sort();
        const firstDay = calendarDates[0];
        const today = dayjs();

        let date = dayjs(firstDay, 'YYYY-MM-DD');
        let series = 0;
        let seriesDate = 'none';
        let currentSeries = 0;

        while (date.isBefore(today, 'day') || date.isSame(today, 'day')) {
            const formattedDate = date.format('YYYY-MM-DD');
            const calendarDate = calendar[formattedDate];
            const score = Number(calendarDate && calendarDate.score) || 0;

            if (predicate(score, dailyGoal)) {
                currentSeries++;
                if (currentSeries > series) {
                    series = currentSeries;
                    seriesDate = formattedDate;
                }
            }

            if (!score) {
                currentSeries = 0;
            }

            date = date.add(1, 'day');
        }

        return {value: series, date: seriesDate};
    };

const getCurrentSeries = (predicate: (score: number, dailyGoal: number) => boolean) =>
    (calendar: { [key in string]: { score: number } }, dailyGoal: number) =>
    {
        const calendarDates = Object.keys(calendar).sort();
        const lastDay = calendarDates[calendarDates.length - 1];
        const firstDay = calendarDates[0];

        let date = dayjs(lastDay, 'YYYY-MM-DD');
        let seriesDate = 'newer';
        let currentSeries = 0;

        if (!lastDay) {
            return {value: 0, date: seriesDate};
        }

        while (
            date.isAfter(firstDay, 'day')
            || date.isSame(firstDay, 'day')
            ) {
            const formattedDate = date.format('YYYY-MM-DD');
            const calendarDate = calendar[formattedDate];
            const score = Number(calendarDate && calendarDate.score) || 0;

            if (predicate(score, dailyGoal)) {
                currentSeries++;
                seriesDate = formattedDate;
            }

            if (!score) {
                break;
            }

            date = date.subtract(1, 'day');
        }

        return {
            value: currentSeries,
            date: seriesDate,
        }
    };

export default Series;
