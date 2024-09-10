import React, { useEffect, useState } from 'react';
import "./Adminvollist.css"
import { useAuth } from '../../../adminpages/auth/AuthContext';
import api from '../../../../api/api';

const Adminvollist = () => {
  const { token } = useAuth();
  const [volunteers,setVolunteers] = useState([]);

  const fetchvolunteers = () => {
    api.get('admin/volunteers',{
      headers: {
        authorization: token
      }
    })
    .then(response => {
      console.log(response.data);
      
      setVolunteers(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the volunteers!', error);
    });
  };
  useEffect(() => {
    // Fetch events from the API when the component mounts
    fetchvolunteers();
  }, [token]);
  return (
    <div className="vl-table-container">
      <h2 className="vl-table-title">VOLUNTEERS LIST</h2>
      <table className="vl-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>CITY</th>
            <th>AREA</th>
            <th>EMAIL</th>
            <th>MOBILE</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map(volunteer => (
              <tr>
              <td>{volunteer.volunteerName}</td>
              <td>{volunteer.volunteerLocation}</td>
              <td>{volunteer.volunteerArea}</td>
              <td>{volunteer.volunteerEmail}</td>
              <td>{volunteer.volunteerContact}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default Adminvollist
