import React from 'react'
import './Landevent.css';

import e2 from './../../../assets/eventland/Rectangle 40266.png';
import e1 from './../../../assets/eventland/Rectangle 40267.png';
const Landevent = () => {
  return (
    <div className='landeventparent'>
        <h1>upcoming events</h1>
        <div className="lecon">
            <div className="lecard1">
                <h1>BLOOD DONATION</h1>
                <div className="letext">
                    <p>At Ignite, we are deeply committed to supporting children and families in disadvantaged communities. In the wake of devastating floods, we are launching a Flood Relief Initiative to provide immediate assistance to those affected.At Ignite, we are deeply committed to supporting children and families in disadvantaged communities.</p>
                </div>
                <div className="ledown">
                    <p>12/8/24</p>
                    <p>AVADI</p>
                </div>
            </div>
            <div><img src={e1} alt="" /> </div>
            <div> <img src={e2} alt="" /></div>
        </div>
    </div>
  )
}

export default Landevent
