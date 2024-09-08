/*
import React from 'react';
import { useForm } from 'react-hook-form';
import ImageUploader from '../Input/ImageUploader';
import '../styles/Details.css';
import '../styles/Profile.css';

const ProfilePictureForm: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    onNext();
  };

  return (
    <div className='container'>
      <div className='profile'>
        <h2>See Your Profile Picture</h2>

      </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageUploader name="profilePicture" register={register} />
      <div className="button-container1">
          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Next</button>
        </div>
    </form>
    </div>
  );
};

export default ProfilePictureForm;
*/
/*
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ImageUploader from '../Input/ImageUploader';
import '../styles/Details.css';
import '../styles/Profile.css';

const ProfilePictureForm: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    console.log(data);
    onNext();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);  // Set the preview to the base64 image data
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='container'>
      <div className='profile'>
        <h2>See Your Profile Picture</h2>
        {imagePreview && <img src={imagePreview} alt="Profile Preview" className="profile-picture-preview" />}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        
          <ImageUploader name="profilePicture" register={register}  />
        
        <div className="button-container1">
          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePictureForm;
*/
/*
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ImageUploader from '../Input/ImageUploader';
import '../styles/Details.css';
import '../styles/Profile.css';

const ProfilePictureForm: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    console.log(data);
    onNext();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string); // Set the preview to the base64 image data
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='container'>
      <div className='profile'>
        <h2>Set Your Profile Picture</h2>
        {imagePreview && <img src={imagePreview} alt="Profile Preview" className="profile-picture-preview" />}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageUploader name="profilePicture" register={register} onChange={handleImageChange} />
        <div className="button-container1">
          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePictureForm;
*/

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ImageUploader from '../Input/ImageUploader';
import '../styles/Details.css';
import '../styles/Profile.css';

interface ProfilePictureFormProps {
  onNext: (data: { profilePicture: FileList }) => void;
  onBack: () => void;
}

const ProfilePictureForm: React.FC<ProfilePictureFormProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    console.log(data);
    onNext({ profilePicture: data.profilePicture });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string); // Set the preview to the base64 image data
      };
      reader.readAsDataURL(file);
      // Set file input value for react-hook-form
      setValue('profilePicture', file ? [file] : []);
    }
  };

  return (
    <div className='container'>
      <div className='profile'>
        <h2>Set Your Profile Picture</h2>
        {imagePreview && <img src={imagePreview} alt="Profile Preview" className="profile-picture-preview" />}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageUploader name="profilePicture" register={register} onChange={handleImageChange} />
        <div className="button-container1">
          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePictureForm;
