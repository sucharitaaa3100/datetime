import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import { format, addDays, addWeeks, addMonths, addYears, isBefore, parseISO } from 'date-fns';
import { motion } from 'framer-motion';

const MAX_DATES = 20;

const CalendarPreview = () => {
  const { recurrence } = useRecurrence();
  const {
    type,
    interval,
    startDate,
    endDate,
    daysOfWeek,
    pattern,
  } = recurrence;

  const generateDates = () => {
    const start = parseISO(startDate);
    const end = endDate ? parseISO(endDate) : null;
    const dates = [];

    let current = new Date(start);

    while (dates.length < MAX_DATES) {
      if (end && isBefore(end, current)) break;

      if (type === 'daily') {
        dates.push(new Date(current));
        current = addDays(current, interval);
      }

      else if (type === 'weekly') {
        const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        for (let i = 0; i < 7; i++) {
          const day = addDays(current, i);
          if (daysOfWeek.includes(weekDays[day.getDay()])) {
            if (!end || !isBefore(end, day)) {
              dates.push(new Date(day));
              if (dates.length >= MAX_DATES) break;
            }
          }
        }

        current = addWeeks(current, interval);
      }

      else if (type === 'monthly') {
        const { week, day } = pattern;
        const target = getNthWeekdayOfMonth(current, week, day);
        if (target && (!end || !isBefore(end, target))) {
          dates.push(target);
        }
        current = addMonths(current, interval);
      }

      else if (type === 'yearly') {
        dates.push(new Date(current));
        current = addYears(current, interval);
      }
    }

    return dates;
  };

  
  const getNthWeekdayOfMonth = (date, nth, weekday) => {
    const weekMap = {
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
      last: -1,
    };

    const weekdayIndex = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].indexOf(weekday);
    const month = date.getMonth();
    const year = date.getFullYear();
    const dates = [];

   
    for (let day = 1; day <= 31; day++) {
      const temp = new Date(year, month, day);
      if (temp.getMonth() !== month) break;
      if (temp.getDay() === weekdayIndex) dates.push(temp);
    }

    const pos = weekMap[nth];
    if (pos > 0) return dates[pos - 1];
    else return dates[dates.length - 1];
  };

  const recurringDates = generateDates();

  return (
    <motion.div
      className="mt-4 p-3 border rounded bg-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h6 className="text-info fw-bold">Preview (up to {MAX_DATES} dates)</h6>
      {recurringDates.length === 0 ? (
        <p className="text-muted">No dates generated yet.</p>
      ) : (
        <ul className="list-group">
          {recurringDates.map((date, idx) => (
            <li key={idx} className="list-group-item py-1">
              {format(date, 'eee, MMM d, yyyy')}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default CalendarPreview;
