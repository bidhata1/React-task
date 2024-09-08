// ReviewDetails.tsx

import React from 'react';
import '../styles/Review.css';
import '../styles/Profile.css';


interface ReviewDetailsProps {
  personalDetails: {
    firstName: string;
    middleName?: string;
    lastName: string;
    phone: string;
    birthDate: string;
    gender: string;
  };
  addressDetails: {
    country: string;
    district: string;
    municipality: string;
    city: string;
    ward: string;
  };
  imagePreview: string;
  onBack: () => void;
  onNext: () => void;
}

const ReviewDetails: React.FC<ReviewDetailsProps> = ({
  personalDetails,
  addressDetails,
  imagePreview,
  onBack,
  onNext,
}) => {

  return (
    <div className='container1'>
      <h2>Review Your Details</h2>

      {/* Profile Picture Preview */}
      {imagePreview && (
        <div className='image-preview'>
          <img src={imagePreview} alt="Profile Preview" className="profile-picture-preview" />
        </div>
      )}

      {/* Personal Details */}
      <div className='personal-details'>
        <h3>Personal Details</h3>
        <div className='details-row'>
          <p>First Name: {personalDetails.firstName}</p>
          <p>Middle Name: {personalDetails.middleName || 'N/A'}</p>
          <p>Last Name: {personalDetails.lastName}</p>
        </div>
        <div className='details-row'>
          <p>Phone: {personalDetails.phone}</p>
          <p>Birth Date: {personalDetails.birthDate}</p>
          <p>Gender: {personalDetails.gender}</p>
        </div>
      </div>

      {/* Address Details */}
      <div className='address-details'>
        <h3>Address</h3>
        <div className='details-row'>
          <p>Country: {addressDetails.country}</p>
          <p>District: {addressDetails.district}</p>
          <p>Municipality: {addressDetails.municipality}</p>
        </div>
        <div className='details-row'>
          <p>City: {addressDetails.city}</p>
          <p>Ward: {addressDetails.ward}</p>
        </div>
      </div>

      <div className="button-container2">
  <button type="button" className="back-button" onClick={onBack}>Back</button>
  <button type="button" className="submit-button" onClick={onNext}>Submit</button>
</div>

    </div>
  );
};

export default ReviewDetails;
