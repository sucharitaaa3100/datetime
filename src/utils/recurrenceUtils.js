import {
  parseISO,
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isBefore,
} from 'date-fns';

const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


export function getNthWeekdayOfMonth(date, nth, weekday) {
  const weekMap = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    last: -1,
  };

  const weekdayIndex = weekDays.indexOf(weekday);
  const month = date.getMonth();
  const year = date.getFullYear();
  const matches = [];

  for (let day = 1; day <= 31; day++) {
    const temp = new Date(year, month, day);
    if (temp.getMonth() !== month) break;
    if (temp.getDay() === weekdayIndex) matches.push(temp);
  }

  const pos = weekMap[nth];
  if (pos > 0) return matches[pos - 1] || null;
  else return matches[matches.length - 1] || null;
}

// Core recurring generator
export function generateRecurringDates({
  type,
  interval,
  startDate,
  endDate,
  daysOfWeek,
  pattern,
  maxCount = 20
}) {
  const start = parseISO(startDate);
  const end = endDate ? parseISO(endDate) : null;
  const dates = [];
  let current = new Date(start);

  while (dates.length < maxCount) {
    if (end && isBefore(end, current)) break;

    if (type === 'daily') {
      dates.push(new Date(current));
      current = addDays(current, interval);
    }

    else if (type === 'weekly') {
      for (let i = 0; i < 7; i++) {
        const day = addDays(current, i);
        if (daysOfWeek.includes(weekDays[day.getDay()])) {
          if (!end || !isBefore(end, day)) {
            dates.push(day);
            if (dates.length >= maxCount) break;
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
}
