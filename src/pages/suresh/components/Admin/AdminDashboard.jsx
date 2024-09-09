import React from "react";
import "./AdminDashboard.css";
import logo from "../Admin/Adminimage/logo.png"
import dashboard from "../Admin/Adminimage/dashboard.png"
import gallery from "../Admin/Adminimage/gallery.png"
import event from "../Admin/Adminimage/event.png"
import contact from "../Admin/Adminimage/contact.png"
import volunteer from "../Admin/Adminimage/volunteer.png"
import donors from "../Admin/Adminimage/donors.png"
import Annualreport from "../Admin/Adminimage/Annualreport.png"
import Adnotification from "./Adnotification";
import Adgallery from "./Adgallery";
import Adupcomingevents from "./Adupcomingevents";
// import Adform from "./Adminform";
import Admincontact from "./Admincontact";
import Adminvol from "./Adminvol";
import Admindonner from "./Admindonner";
import AdminARP from "./AdminARP";
import { Link } from "react-router-dom";
import { Route,Routes } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="page-container">
      <div className="sidebar">
        <div className="logocontainer">
        <img src={logo} alt="" />
        </div>
        <ul className="lists">
          <Link to="/admin/SHRA/dashboard" className="icon">
            <img src={dashboard} alt="" />
            <li>Dashboard</li>
          </Link>
          <Link to="/admin/SHRA/gallery" className="icon">
            <img src={gallery} alt="" />
            <li>Gallery</li>
          </Link>
          <Link to="/admin/SHRA/events" className="icon">
            <img src={event} alt="" />
            <li>Events</li>
          </Link>
          <Link to="/admin/SHRA/contact"className="icon">
            <img src={contact} alt="" />
            <li>Contacts</li>
          </Link>
          <Link to="/admin/SHRA/volunteer" className="icon">
            <img src={volunteer} alt="" />
            <li>Volunteer</li>
          </Link>
          <Link to="/admin/SHRA/donors" className="icon">
            <img src={donors} alt="" />
            <li>Donors</li>
          </Link>
          <Link to="/admin/SHRA/annual-report" className="icon">
            <img src={Annualreport} alt="" />
            <li> Annual report</li>
          </Link>
         
          
          
          
        </ul>
      </div>
      <div className="topbar">
          <div className="topbar-header">
              <h1>helping hands charity</h1>
          </div>
          
      </div>
      <div className="topbar-content">
              <Routes>
                      
                      <Route path="/dashboard" element={<Adnotification />} />
                      <Route path="/gallery" element={<Adgallery/>} />
                      <Route path="/events" element={<Adupcomingevents/>} />
                      <Route path="/contact" element={<Admincontact/>} />
                      <Route path="/volunteer" element={<Adminvol/>} />

                      <Route path="/donors" element={<Admindonner/>} />
                      <Route path="/annual-report" element={<AdminARP/>} />

                {/* <Adnotification/> */}
                {/* <Adgallery/> */}
                {/* <Adupcomingevents/> */}
                
                {/* <Admincontact/> */}
                {/* <Adminvol/> */}
                {/* <Admindonner/> */}
                {/* <AdminARP/> */}
              </Routes>
          </div>
      

      
    </div>
  );
};

export default AdminDashboard;
