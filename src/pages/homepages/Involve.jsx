import React from 'react'
import './Involve.css';
import { NavLink,Link } from 'react-router-dom';import hr1 from './../../assets/involve/image (1).png';
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
                <div className="iherobtn">
                    <Link>volunteer with us</Link>
                   
                </div>
                <h1>Make Your Weekends More <br/> <span>Meaningful</span></h1>
            </div>
        </div>
        <div className="intitle">
            <h1>Why Volunteer With us</h1>
            <p>We provide a variety of volunteer options to suit your preferences. You'll join a group of people that are dedicated to changing things for the better.</p>
        </div>
        <div className="informmain">
            <form action="" className="inform">
                <h1>Registeration</h1>
                <div className="invcon">
                    <div className="invsub">
                        <label htmlFor="">Name</label>
                        
                        <input type="text" />
                    </div>
                    <div className="invsub">
                        
                        <label htmlFor="">Last NAme</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="invcon">
                    <div className="invsub">
                        <label htmlFor="">Mobile</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="invcon">
                    <div className="invsub">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="invcon">
                    <div className="invsub">
                        <label htmlFor="">Location</label>
                        <input type="text" />
                    </div>
                    <div className="invsub">
                        <label htmlFor="">Area</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="informbtn">
                    <button>Submit</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Involve
