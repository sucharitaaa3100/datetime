import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import { motion } from 'framer-motion';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DaySelector = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  if (recurrence.type !== 'weekly') return null;

  const toggleDay = (day) => {
    const isSelected = recurrence.daysOfWeek.includes(day);
    const updatedDays = isSelected
      ? recurrence.daysOfWeek.filter(d => d !== day)
      : [...recurrence.daysOfWeek, day];

    setRecurrence({ ...recurrence, daysOfWeek: updatedDays });
  };

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="form-label fw-semibold text-info">
        Select Days of the Week
      </label>
      <div className="d-flex flex-wrap gap-2">
        {days.map((day) => {
          const isActive = recurrence.daysOfWeek.includes(day);
          return (
            <button
              key={day}
              type="button"
              className={`btn btn-sm ${isActive ? 'btn-info text-white' : 'btn-outline-info'}`}
              onClick={() => toggleDay(day)}
            >
              {day.slice(0, 3)}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default DaySelector;
