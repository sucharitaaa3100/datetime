import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import { motion } from 'framer-motion';

const weeks = ['first', 'second', 'third', 'fourth', 'last'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const PatternSelector = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  if (recurrence.type !== 'monthly') return null;

  const handlePatternChange = (key, value) => {
    setRecurrence({
      ...recurrence,
      pattern: {
        ...recurrence.pattern,
        [key]: value,
      },
    });
  };

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="form-label fw-semibold text-info">
        Monthly Pattern
      </label>
      <div className="row g-2">
        <div className="col-md-6">
          <select
            className="form-select border-info"
            value={recurrence.pattern.week}
            onChange={(e) => handlePatternChange('week', e.target.value)}
          >
            {weeks.map((w) => (
              <option key={w} value={w}>{w.charAt(0).toUpperCase() + w.slice(1)}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="form-select border-info"
            value={recurrence.pattern.day}
            onChange={(e) => handlePatternChange('day', e.target.value)}
          >
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
};

export default PatternSelector;

