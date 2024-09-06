import React from 'react';
import { AuthProvider } from './auth/AuthContext'; // Ensure this path is correct
import Adminlogin from './Adminlogin'; // Your Adminlogin component

const Admin = () => {
  return (
    <AuthProvider>
      <Adminlogin />
      {/* Other components */}
    </AuthProvider>
  );
};

export default Admin;
