import React, { useState } from 'react';
import api from '../../../../api/api'; // Make sure axios is imported
import './Adgallery.css';
import { useAuth } from '../../../adminpages/auth/AuthContext';// Import useAuth for authentication

const Adgallery = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [uploadError, setUploadError] = useState('');
  const { token } = useAuth(); // Get the token from the auth context

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Store the selected file in state
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('galleryImage', selectedFile); // Append the selected file to formData
     console.log(token);
     
    try {
      const response = await api.post('/admin/gallery', formData, {
        headers: {
          authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setUploadSuccess('Image uploaded successfully!');
        setUploadError('');
      }
    } catch (error) {
      setUploadError('Failed to upload image. Please try again.');
      setUploadSuccess('');
    }
  };

  return (
    <div className="main-admingall">
      <div className="admingallery">
        <div className="adgall-container">
          <div className="adgall-heading">
            <h3>GALLERY LIST</h3>
          </div>
          <div className="adgall-btns">
            
            <label className="upload-btn" htmlFor="adegalimg">
              UPLOAD IMAGE
            </label>
            <input
              type="file"
              id='adegalimg'
              onChange={handleFileChange}
              className="upload-input"
              accept="image/*"
            />
            <div className="or">
              <span className="adgalline"> </span>
              <p>or</p>
              <span className="adgalline"></span>
            </div>
            <button className="drive-btn">DRIVE</button>
            <button className="adgall-sub-btn" onClick={handleUpload}>Submit</button>
          </div>
          {uploadSuccess && <div className="success-message">{uploadSuccess}</div>}
          {uploadError && <div className="error-message">{uploadError}</div>}
        </div>
      </div>
    </div>
  );
};

export default Adgallery;
