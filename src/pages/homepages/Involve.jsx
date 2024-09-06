import React from 'react'
import './Involve.css';
import hr1 from './../../assets/involve/image (1).png';
import hr2 from './../../assets/involve/image (2).png';
import hr3 from './../../assets/involve/image (3).png';
import hr4 from './../../assets/involve/image (4).png';
import hr5 from './../../assets/involve/image (5).png';
import hr6 from './../../assets/involve/image.png';

const Involve = () => {
  return (
    <div className='involparent' >
        <div className="inheromain">
            <div className="iheroback">
                <div className="iheroimg">
                    <img src={hr1} alt="" />
                    <img src={hr2} alt="" />
                    <img src={hr3} alt="" />
                    <img src={hr4} alt="" />
                    <img src={hr5} alt="" />
                    <img src={hr6} alt="" />
                </div>
            </div>
            <div className="iherosub">
                div.in
            </div>
        </div>
    </div>
  )
}

export default Involve
