import React from 'react'
import "./Card.css"

const Card = ({ content, imageUrl }) => {
  return (
    <>
        <div className="card">
            <img src={imageUrl}  className='card-image'/>
            <p><i>{content}</i></p>
        </div>
    </>
  )
}

export default Card
