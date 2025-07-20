import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DaySelector from './DaySelector';
import PatternSelector from './PatternSelector';
import DateSelector from './DateSelector';
import CalendarPreview from './CalenderPreview';

import { motion } from 'framer-motion';

const RecurringPicker = () => {
  return (
    <motion.div
      className="container mt-5 p-4 border rounded shadow-sm bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="mb-4 text-center text-info fw-bold">
        Recurring Date Picker
      </h4>

      <RecurrenceOptions />
      <DaySelector />
      <PatternSelector />
      <DateSelector />
      <CalendarPreview />
    </motion.div>
  );
};

export default RecurringPicker;
