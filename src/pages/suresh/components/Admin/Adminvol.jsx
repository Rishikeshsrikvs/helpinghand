import React from "react";
import "./Adminvol.css";
import volnow from "../Admin/Adminimage/volnowimage.png";
import Adminvollist from "./Adminvollist";

const Adminvol = () => {
  return (
    <div className="adminvol">
      <div className="adminvol-container">
        <div className="adminvol-heading">
          <h1>volunteer</h1>
        </div>
        <div className="admin-poster-content">
          <div className="admin-poster-heading">
            <h3>NEW PERSONS</h3>
          </div>
          <div className="admin-poster-flexitem">
            <div className="admin-poster-flex">
              <div className="admin-poster-profile">
                <img src={volnow} alt="" />
              </div>
              <div className="admin-poster-name">
                <p>name :</p>
                <h3>Surya</h3>
              </div>
              <div className="admin-poster-mobile">
                <p>mobile :</p>
                <h3>2020202020</h3>
              </div>
              <div className="admin-poster-con-location">
                <div className="admin-pos-location">
                  <p>location :</p>
                  <h3>Chennai</h3>
                </div>
                <div className="admin-pos-area">
                  <p>Area :</p>
                  <h3>Avadi</h3>
                </div>
              </div>
            </div>
            <div className="admin-poster-flex">
              <div className="admin-poster-profile">
                <img src={volnow} alt="" />
              </div>
              <div className="admin-poster-name">
                <p>name :</p>
                <h3>Surya</h3>
              </div>
              <div className="admin-poster-mobile">
                <p>mobile :</p>
                <h3>2020202020</h3>
              </div>
              <div className="admin-poster-con-location">
                <div className="admin-pos-location">
                  <p>location :</p>
                  <h3>Chennai</h3>
                </div>
                <div className="admin-pos-area">
                  <p>Area :</p>
                  <h3>Avadi</h3>
                </div>
              </div>
            </div>
            <div className="admin-poster-flex">
              <div className="admin-poster-profile">
                <img src={volnow} alt="" />
              </div>
              <div className="admin-poster-name">
                <p>name :</p>
                <h3>Surya</h3>
              </div>
              <div className="admin-poster-mobile">
                <p>mobile :</p>
                <h3>2020202020</h3>
              </div>
              <div className="admin-poster-con-location">
                <div className="admin-pos-location">
                  <p>location :</p>
                  <h3>Chennai</h3>
                </div>
                <div className="admin-pos-area">
                  <p>Area :</p>
                  <h3>Avadi</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
       <Adminvollist/>
      </div>
    </div>
  );
};

export default Adminvol;
