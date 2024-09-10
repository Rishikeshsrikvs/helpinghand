import React, { useState } from 'react';
import { useEffect } from 'react';
import './Blooddonate.css';
import Requestform from './home components/Requestform.jsx';
import Doner from './Doner.jsx';
import Bloodtable from './home components/Bloodtable.jsx';

import bl1 from './../../assets/blood/bl1.png';
import bl2 from './../../assets/blood/bl2.png';
import bl3 from './../../assets/blood/bl3.png';

const Blooddonate = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');

  const handleBloodGroupSubmit = (bloodGroup) => {
    setSelectedBloodGroup(bloodGroup);
  };

  return (
    <div className='bloodmain'>
      <section className="hero">
        <h1>Your Paint Has The <span className="color-red">Power</span> To Paint</h1>
        <h1>A <span className="color-green">Smile</span> On Someone Else’s <span className="color-red">Face</span>.</h1>
        <h4>Blood Donation Is A Powerful Way To Make A Difference. In Just A Few Minutes, 
          You Can Save Multiple Lives By Providing The Essential Blood Needed For Surgeries, 
          Trauma Care, And Medical Treatments. Your Generosity Ensures That Hospitals Are Prepared 
          To Help Patients In Critical Need. Be The Lifeline For Someone Today.</h4>
        
        <div className="image-row">
          <img src={bl1} alt="Description of image 1" />
          <img src={bl2} alt="Description of image 2" />
          <img src={bl3} alt="Description of image 3" />
        </div>
      </section> 

      <Doner />
      <Requestform onBloodGroupSubmit={handleBloodGroupSubmit} />
      <Bloodtable selectedBloodGroup={selectedBloodGroup} />
    </div>
  );
};

export default Blooddonate;
