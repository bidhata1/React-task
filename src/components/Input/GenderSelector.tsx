import React from 'react';
import '../styles/Gender.css'

interface GenderSelectorProps {
  name: string;
  register: any;
}

const GenderSelector: React.FC<GenderSelectorProps> = ({ name, register }) => (
  <div>
    <label>Gender</label>
    <div  className='gender'>
      <label>
        <input type="radio" value="Male" {...register(name)} /> Male
      </label>
      <label>
        <input type="radio" value="Female" {...register(name)} /> Female
      </label>
      <label>
        <input type="radio" value="Others" {...register(name)} /> Others
      </label>
    </div>
  </div>
);

export default GenderSelector;
