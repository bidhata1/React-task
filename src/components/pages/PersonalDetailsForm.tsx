/*
import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../Input/TextInput';
import DateInput from '../Input/DateInput';
import GenderSelector from '../Input/GenderSelector';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import '../styles/Details.css'

const personalSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Phone number is too short"),
  birthDate: z.string().nonempty("Birth date is required"),
  gender: z.string().nonempty("Gender is required")
});

const PersonalDetailsForm: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(personalSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onNext();
  };

  return (
    <div className='container'>
        <div className='heading1'>
            <h1>Personal Details</h1>
        </div>
    <form onSubmit={handleSubmit(onSubmit)}>

      <TextInput label="First Name" name="firstName" register={register} required placeholder="Enter the first name" />
      <TextInput label="Middle Name" name="middleName" register={register} placeholder="Enter the middle name"/>
      <TextInput label="Last Name" name="lastName" register={register} required placeholder="Enter the last name"/>
      <TextInput label="Phone" name="phone" register={register} required placeholder="98xxxxxxxx" />
      <DateInput label="Birth Date" name="birthDate" register={register} />
      <GenderSelector name="gender" register={register} />
      <button type="submit">Next</button>
    </form>
    </div>
  );
};

export default PersonalDetailsForm;
*/
import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../Input/TextInput';
import DateInput from '../Input/DateInput';
import GenderSelector from '../Input/GenderSelector';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import '../styles/Details.css'

const personalSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Phone number is too short"),
  birthDate: z.string().nonempty("Birth date is required"),
  gender: z.string().nonempty("Gender is required")
});

const PersonalDetailsForm: React.FC<{ onNext: (data:any) => void }> = ({ onNext }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(personalSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onNext(data);
  };

  return (
    <div className='container'>
      <div className='heading1'>
        <h1>Personal Details</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <TextInput label="First Name" name="firstName" register={register} required placeholder="Enter the first name" />
          <TextInput label="Middle Name" name="middleName" register={register} placeholder="Enter the middle name"/>
          <TextInput label="Last Name" name="lastName" register={register} required placeholder="Enter the last name"/>
        </div>
        <div className='row'>
          <TextInput label="Phone" name="phone" register={register} required placeholder="98xxxxxxxx" />
          <DateInput label="Birth Date" name="birthDate" register={register} />
        </div>
        <div className='row'>
          <GenderSelector name="gender" register={register} />
        </div>
        <div className='button-container'>
        <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
