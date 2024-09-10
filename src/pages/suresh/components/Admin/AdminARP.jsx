import React, { useEffect, useState } from 'react';
import "./Admincontact.css";
import api from "../../../../api/api";
import { useAuth } from "../../../adminpages/auth/AuthContext";
import "./AdminARP.css";

const AdminARP = () => {
  const { token } = useAuth();
  const [reportyears, setReportyears] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [driveLink, setDriveLink] = useState('');
  const [yearInput, setYearInput] = useState('');
  const [message, setMessage] = useState('');

  const fetchReportyears = () => {
    api.get('admin/reportYears', {
      headers: {
        authorization: token
      }
    })
    .then(response => {
      setReportyears(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the reported years!', error);
    });
  };

  useEffect(() => {
    fetchReportyears();
  }, [token]);

  const handleDelete = (yearId) => {
    api.delete(`admin/reportYear/${yearId}`, {
      headers: { authorization: token }
    })
    .then(() => {
      setMessage('Year deleted successfully.');
      fetchReportyears();
    })
    .catch(error => {
      console.error('There was an error deleting the year!', error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('year', yearInput);

    if (selectedFile) {
      formData.append('annualReport', selectedFile);
    } else if (driveLink) {
      formData.append('annualReport', driveLink);
    }

    api.post('admin/annual', formData, {
      headers: {
        authorization: token,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(() => {
      setMessage('Year uploaded successfully.');
      setYearInput('');
      setSelectedFile(null);
      setDriveLink('');
      fetchReportyears(); // Refresh the table after upload
    })
    .catch(error => {
      console.error('There was an error uploading the year!', error);
    });
  };

  return (
    <div className="adminarp">
      <div className="arp-container">
        <h1>ANNUAL REPORT PDF</h1>

        <form className="arp-form-container" onSubmit={handleSubmit}>
          <div className="arp-form-year">
            <label htmlFor="year">YEAR:</label>
            <input 
              type="text" 
              id="year" 
              name="year" 
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              required 
            />
          </div>

          <div className="arp-btns">
            <label className="arp-upload-btn">UPLOAD PDF</label>
            <input 
              type="file" 
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <div className="arp-or">
              <span className="arpline"></span>
              <p className="arpor">or</p>
              <span className="arpline"></span>
            </div>
            <label className="arp-drive-btn">DRIVE</label>
            <input 
              type="text" 
              placeholder="Enter Drive link" 
              value={driveLink}
              onChange={(e) => setDriveLink(e.target.value)} 
            />

            <button className="arp-sub-btn">Submit</button>
          </div>
        </form>

        {message && <p className="message">{message}</p>}

        <div className="arp-table">
          <table>
            <thead>
              <tr className="">
                <th className="arp-thead-lr arp-tr">YEAR</th>
                <th className="arp-tr">ACTION</th>
              </tr>
            </thead>
            <tbody className="arp-tbody-r">
              {reportyears.map((year) => (
                <tr key={year._id}>
                  <td className="arp-td">{year.year}</td>
                  <td className="arp-td">
                    <button
                      onClick={() => handleDelete(year._id)}
                      className="arp-td-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminARP;
