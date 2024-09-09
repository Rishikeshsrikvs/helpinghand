import React from 'react';
import "./Adgallery.css"

const Adgallery = () => {
  return (
    <div className="main-admingall">
        <div className="admingallery">
        <div className="adgall-container">
            <div className="adgall-heading">
                <h3>GALLERY LIST</h3>
            </div>
            <div className="adgall-btns">
                <button className='upload-btn'>UPLOAD IMAGE</button>
                <div className="or">
                    <span></span><p>or</p>
                    <span></span>
                </div>
                <button className='drive-btn'>DRIVE</button>
                <button className='adgall-sub-btn'>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Adgallery
