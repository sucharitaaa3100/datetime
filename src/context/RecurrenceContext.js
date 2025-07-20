import React, { createContext, useContext, useState } from 'react';

const RecurrenceContext = createContext();


export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    type: 'daily',             
    interval: 1,                 
    daysOfWeek: [],              
    pattern: {                   
      week: 'second',
      day: 'Tuesday',
    },
    startDate: new Date().toISOString().split('T')[0], 
    endDate: '',                
  });

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
