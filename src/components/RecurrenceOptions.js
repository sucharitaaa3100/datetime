
import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import { motion } from 'framer-motion';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleChange = (e) => {
    setRecurrence({ ...recurrence, type: e.target.value });
  };

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label className="form-label fw-semibold text-info">
        Recurrence Type
      </label>
      <select
        className="form-select border-info shadow-sm"
        value={recurrence.type}
        onChange={handleChange}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </motion.div>
  );
};

export default RecurrenceOptions;
