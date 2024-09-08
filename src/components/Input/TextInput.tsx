import React from 'react';

interface TextInputProps {
  label: string;
  name: string;
  register: any;
  required?: boolean;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, register, required, placeholder }) => (
  <div>
    <label>{label}</label>
    <input type="text" {...register(name, { required })} placeholder={placeholder} />
  </div>
);

export default TextInput;
