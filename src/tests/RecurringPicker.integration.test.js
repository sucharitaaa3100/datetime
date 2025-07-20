import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecurrenceProvider } from '../context/RecurrenceContext';
import RecurringPicker from '../components/RecurringPicker';

describe('RecurringPicker integration', () => {
  it('renders inputs and calendar preview correctly', () => {
    render(
      <RecurrenceProvider>
        <RecurringPicker />
      </RecurrenceProvider>
    );

    expect(screen.getByText(/Recurring Date Picker/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/End Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Preview/i)).toBeInTheDocument();
  });

  it('updates preview when recurrence type changes', () => {
    render(
      <RecurrenceProvider>
        <RecurringPicker />
      </RecurrenceProvider>
    );

    const dailyBtn = screen.getByText(/Daily/i);
    fireEvent.click(dailyBtn);

    const preview = screen.getByText(/Preview/i);
    expect(preview).toBeInTheDocument();
  });
});
