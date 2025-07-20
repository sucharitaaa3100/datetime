import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import { motion } from 'framer-motion';

const DateSelector = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleDateChange = (field, value) => {
    setRecurrence({
      ...recurrence,
      [field]: value,
    });
  };

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label className="form-label fw-semibold text-info">
        Start Date
      </label>
      <input
        type="date"
        className="form-control mb-3 border-info shadow-sm"
        value={recurrence.startDate}
        onChange={(e) => handleDateChange('startDate', e.target.value)}
      />

      <label className="form-label fw-semibold text-info">
        End Date (optional)
      </label>
      <input
        type="date"
        className="form-control border-info shadow-sm"
        value={recurrence.endDate}
        onChange={(e) => handleDateChange('endDate', e.target.value)}
        min={recurrence.startDate}
      />
    </motion.div>
  );
};

export default DateSelector;
