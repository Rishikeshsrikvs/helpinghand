import React from "react";
import gall1 from "../Gallery/galleryimage/gall1.png"
import gall2 from "../Gallery/galleryimage/gall2.png"
import gall3 from "../Gallery/galleryimage/gall3.png"
import gall4 from "../Gallery/galleryimage/gall4.png"
import gall5 from "../Gallery/galleryimage/gall5.png"
import gall6 from "../Gallery/galleryimage/gall6.png"
import gall7 from "../Gallery/galleryimage/gall7.png"
import gall8 from "../Gallery/galleryimage/gall8.png"
import "./Gallery.css"

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <div className="hero-image"></div>
        <div className="gall-container">
        <div className="gall-row ">
          <div className="images">
          <img src={gall1} alt="gallery" />
          </div>
          <div className="images">
          <img src={gall2} alt="gallery" />
        
          </div>
          <div className="images">
     
          <img src={gall3} alt="gallery" />
          </div>
          <div className="images">
          <img src={gall4} alt="gallery" />
      
          </div>
        </div>
        <div className="gall-row">
          <img src={gall5} alt="gallery" />
          <img src={gall6} alt="gallery" />
          <img src={gall7} alt="gallery" />
          <img src={gall8} alt="gallery" />
        </div>
        </div>
        <div className="gall-text">
          <h1>
            “ The purpose of life is not to be happy. It is to be useful, to be
            honorable, to be compassionate “
          </h1>
          <button className="gall-btn">donate now</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
