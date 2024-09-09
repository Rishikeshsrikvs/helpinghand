import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate= useNavigate();
  const [images, setImages] = useState([]);
  const apiBaseUrl = "https://helpinghands-8tdm.onrender.com"; // Your base URL

  useEffect(() => {
    // Fetch images from the API
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/galleryImageName`);
        if (response.status === 200) {
          setImages(response.data); // Set the fetched images
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      <div className="gallery-container">
        <div className="hero-image"></div>
        <div className="gall-container">
          <Marquee className="gall-row" speed={300}>
            {images.map((image) => (
              <img
                key={image._id}
                src={`${apiBaseUrl}/gallery/${image._id}`}
                alt="gallery"
              />
            ))}
          </Marquee>
          <Marquee className="gall-row" speed={300} direction={"right"}>
            {images.toReversed().map((image) => (
              <img
                key={image._id}
                src={`${apiBaseUrl}/gallery/${image._id}`}
                alt="gallery"
              />
            ))}
          </Marquee>
        </div>
        <div className="gall-text">
          <h1>
            “ The purpose of life is not to be happy. It is to be useful, to be
            honorable, to be compassionate “
          </h1>
          <button className="gall-btn"  onClick={()=>(navigate('/donate'))}>donate now</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
