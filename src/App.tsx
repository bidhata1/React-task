
import React, { useState } from 'react';
import PersonalDetailsForm from './components/pages/PersonalDetailsForm';
import AddressForm from './components/pages/AddressForm';
import ReviewDetails from './components/pages/ReviewDetails';
import ProfilePictureForm from './components/pages/ProfilePictureForm';
import ProgressBar from './components/pages/ProgressBar';
import image from './components/Assets/logo.png';
import './components/styles/App.css';


const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [personalDetails, setPersonalDetails] = useState<any>(null);
  const [addressDetails, setAddressDetails] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleNext = (data: any) => {
    switch (step) {
      case 1:
        setPersonalDetails(data);
        break;
      case 2:
        setAddressDetails(data);
        break;
      case 3:
        if (data.profilePicture) {
          setImagePreview(URL.createObjectURL(data.profilePicture[0]));
        }
        break;
      default:
        break;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return <PersonalDetailsForm onNext={handleNext} />;
      case 2:
        return <AddressForm onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <ProfilePictureForm onNext={handleNext} onBack={handleBack} />;
      case 4:
        return (
          <ReviewDetails
            personalDetails={personalDetails}
            addressDetails={addressDetails}
            imagePreview={imagePreview || ''}
            onBack={handleBack}
            onNext={() => { /* Handle final form submission or navigation */ }}
          />
        );
      
      default:
        return <PersonalDetailsForm onNext={handleNext} />;
    }
  };

  return (
    <div>
      <div className='logo'>
        <img src={image} alt="Logo" />
      </div>

      <div className='heading'>
        <h1>Register</h1>
      </div>

      <ProgressBar step={step} />
      {renderForm()}
    </div>
  );
};

export default App;
