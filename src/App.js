import React from 'react';
import { RecurrenceProvider } from './context/RecurrenceContext';
import RecurringPicker from './components/RecurringPicker';

function App() {
  return (
    <RecurrenceProvider>
      <div className="container py-5">
        <h2 className="text-center mb-4">📅 Recurring Date Picker</h2>
        <RecurringPicker />
      </div>
    </RecurrenceProvider>
  );
}

export default App;
