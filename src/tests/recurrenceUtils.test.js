import { generateRecurringDates } from '../tests/recurrenceUtils';

describe('generateRecurringDates()', () => {
  it('should generate daily dates correctly', () => {
    const result = generateRecurringDates({
      type: 'daily',
      interval: 2,
      startDate: '2025-07-20',
      endDate: '2025-07-30',
    });

    const dates = result.map(d => d.toISOString().split('T')[0]);
    expect(dates).toEqual([
      '2025-07-20',
      '2025-07-22',
      '2025-07-24',
      '2025-07-26',
      '2025-07-28',
      '2025-07-30',
    ]);
  });

  it('should generate weekly dates for specific days', () => {
    const result = generateRecurringDates({
      type: 'weekly',
      interval: 1,
      startDate: '2025-07-20',
      endDate: '2025-08-03',
      daysOfWeek: ['Monday', 'Wednesday'],
    });

    const dates = result.map(d => d.toISOString().split('T')[0]);
    expect(dates).toContain('2025-07-21'); 
    expect(dates).toContain('2025-07-23'); 
  });

  it('should handle monthly pattern: second Tuesday', () => {
    const result = generateRecurringDates({
      type: 'monthly',
      interval: 1,
      startDate: '2025-07-01',
      endDate: '2025-10-01',
      pattern: { week: 'second', day: 'Tuesday' },
    });

    const dates = result.map(d => d.toISOString().split('T')[0]);
    expect(dates[0]).toBe('2025-07-08');
    expect(dates[1]).toBe('2025-08-12');
    expect(dates[2]).toBe('2025-09-09');
  });

  it('should stop generating dates when maxCount is reached', () => {
    const result = generateRecurringDates({
      type: 'daily',
      interval: 1,
      startDate: '2025-07-01',
      maxCount: 5,
    });

    expect(result.length).toBe(5);
  });
});
