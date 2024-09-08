import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z, ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Dropdown from '../Input/Dropdown';
import '../styles/Details.css';

// Define Zod schema for form validation
const addressSchema: ZodSchema<FormData> = z.object({
  country: z.string().nonempty("Country is required"),
  district: z.string().nonempty("District is required"),
  municipality: z.string().nonempty("Municipality is required"),
  city: z.string().nonempty("City is required"),
  ward: z.string().nonempty("Ward is required"),
});

// Define types
interface AddressFormProps {
  onNext: (data: FormData) => void;
  onBack: () => void;
}

interface FormData {
  country: string;
  district: string;
  municipality: string;
  city: string;
  ward: string;
}

const AddressForm: React.FC<AddressFormProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(addressSchema)
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Check the console to see the submitted data
    onNext(data); // Pass data to parent
  };

  return (
    <div className="container">
      <div className='address'>
        <h1>Address</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First row with Country, District, and Municipality */}
        <div className="row">
          <div className="input-group">
            <Dropdown
              label="Country"
              name="country"
              options={['Nepal', 'India', 'USA']}
              register={register}
              placeholder='Eg.Nepal'
            />
            {errors.country && <span className="error">{errors.country.message}</span>}
          </div>
          <div className="input-group">
            <Dropdown
              label="District"
              name="district"
              options={['Kathmandu', 'Kaski', 'Parsa', 'Tanahu']}
              register={register}
              placeholder='Eg. Kathmandu'
            />
            {errors.district && <span className="error">{errors.district.message}</span>}
          </div>
          <div className="input-group">
            <Dropdown
              label="Municipality/Local"
              name="municipality"
              options={['Lalitpur', 'Pokhara', 'Bagmati', 'Shyanja']}
              register={register}
              placeholder='Eg. Lalitpur'
            />
            {errors.municipality && <span className="error">{errors.municipality.message}</span>}
          </div>
        </div>

        {/* Second row with City and Ward */}
        <div className="row">
          <div className="input-group">
            <Dropdown
              label="City"
              name="city"
              options={['Kathmandu', 'Pokhara', 'Chitwan', 'Hetauda', 'Butwal']}
              register={register}
              placeholder='Eg. Kathmandu'
            />
            {errors.city && <span className="error">{errors.city.message}</span>}
          </div>
          <div className="input-group">
            <Dropdown
              label="Ward"
              name="ward"
              options={['31', '30', '21', '22', '33']}
              register={register}
              placeholder='Eg. 4'
            />
            {errors.ward && <span className="error">{errors.ward.message}</span>}
          </div>
        </div>

        {/* Buttons */}
        <div className="button-container1">
          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
