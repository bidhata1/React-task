/*
import React from 'react';

interface DateInputProps {
  label: string;
  name: string;
  register: any;
}

const DateInput: React.FC<DateInputProps> = ({ label, name, register }) => (
  <div>
    <label>{label}</label>
    <input type="date" {...register(name)} />
  </div>
);

export default DateInput;
*/
import React from 'react';

interface DateInputProps {
  label: string;
  name: string;
  register: any;
}

const DateInput: React.FC<DateInputProps> = ({ label, name, register }) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <label>{label}</label>
      <input type="date" {...register(name)} max={today} />
    </div>
  );
};

export default DateInput;
