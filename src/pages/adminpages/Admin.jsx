import React from 'react';
import { AuthProvider } from './auth/AuthContext'; // Ensure this path is correct
import Adminlogin from './Adminlogin'; // Your Adminlogin component
import { Route,Routes } from 'react-router-dom';
import AdminDashboard from '../suresh/components/Admin/AdminDashboard';
const Admin = () => {
  return (
    // <AuthProvider>
    //   <Adminlogin />

    //   {/* Other components */}
    // </AuthProvider>
    <div>
      
      <Routes>
      <Route path="login" element={<Adminlogin />} />
      <Route path="*" element={<AdminDashboard />} />

        </Routes>
    </div>
  );
};

export default Admin;
