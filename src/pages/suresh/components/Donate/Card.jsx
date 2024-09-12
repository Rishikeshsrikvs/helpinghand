import React from 'react';
import "./Card.css";

const Card = ({ imageUrl, onClick, text }) => {
  return (
    <div className="card" onClick={() => onClick(imageUrl, text)}>
      <div className="dcardimgcon"><img src={imageUrl} className='card-image' alt="Card" /></div>
      <div className="dcardback">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Card;
