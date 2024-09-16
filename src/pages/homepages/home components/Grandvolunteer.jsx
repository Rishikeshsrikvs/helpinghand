import React from 'react';
import './Grandvolunteer.css';
import { useNavigate } from 'react-router-dom';
import helimg from './../../../assets/grandvolunteer/hand.png';
import apj1 from './../../../assets/grandvolunteer/kalam.png';
import mother1 from './../../../assets/grandvolunteer/tresa.png';
import vallalar from './../../../assets/grandvolunteer/vallalar.jpg';



const Grandvolunteer = () => {
  const navigate=useNavigate();
  return (
    <div
      className="imgback"
      style={{
        backgroundImage: `url(${helimg})`,
      
      }}
    >
    

      <div className="slider-container">
        <div className="image-slide">
          <div className="grv1"><img src={apj1} alt="APJ Abdul Kalam" /></div>
          <div className="grv2"><img src={mother1} alt="Mother Teresa"  /></div>
          <div className="grv3"><img src={vallalar} alt="Vallalar" /></div>
        </div>
        <div className="vasubmit">
            <button className="vallalarbtn"onClick={()=>(navigate('/donate'))}>DONATE</button>
          </div>
      </div>

    </div>
  );
};

export default Grandvolunteer;
