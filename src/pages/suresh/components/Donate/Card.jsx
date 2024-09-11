import React from 'react';
import "./Card.css";

const Card = ({ imageUrl, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(imageUrl)}>
      <img src={imageUrl} className='card-image' alt="Card" />
    </div>
  );
};

export default Card;
