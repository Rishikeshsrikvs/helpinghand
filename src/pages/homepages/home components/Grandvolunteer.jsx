import React from 'react';
import './Grandvolunteer.css';

import helimg from './../../../assets/grandvolunteer/hand.png';
import apj1 from './../../../assets/grandvolunteer/kalam.png';
import mother1 from './../../../assets/grandvolunteer/tresa.png';
import vallalar from './../../../assets/grandvolunteer/vallalar.jpg';



const Grandvolunteer = () => {
  return (
    <div
      className="imgback"
      style={{
        backgroundImage: `url(${helimg})`,
      
      }}
    >
    

      <div className="slider-container">
        <div className="image-slide">
          <img src={apj1} alt="APJ Abdul Kalam" />
          <img src={mother1} alt="Mother Teresa" />
          <img src={vallalar} alt="Vallalar" />
        </div>
        <div className="vasubmit">
            <button className="vallalarbtn" type="submit">DONATE</button>
          </div>
      </div>

    </div>
  );
};

export default Grandvolunteer;
