import React from 'react';

interface DropdownProps {
  label: string;
  name: string;
  options: string[];
  register: any;
  placeholder?: string;

}

const Dropdown: React.FC<DropdownProps> = ({ label, name, options, register,placeholder}) => (
  <div>
    <label>{label}</label>
    <select {...register(name)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
