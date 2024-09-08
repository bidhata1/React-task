import React from 'react';

interface ImageUploaderProps {
  name: string;
  register: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Optional handler for file change
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ name, register, onChange }) => (
  <div className="image-uploader">
    <label className="upload-button">
      Upload Image
      <input
        type="file"
        {...register(name)}
        onChange={onChange} // Attach the onChange handler if provided
        aria-label="Upload Image" // For accessibility
      />
    </label>
  </div>
);

export default ImageUploader;
