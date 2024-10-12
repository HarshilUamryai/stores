// src/components/Hotcard.jsx
import React from 'react';
import '../style/Hots.css'; // Optional: For styling

const Hotcard = ({ name, price, image }) => {
  return (
    <div className="hotcard">
      <img src={image} alt={name} className="hotcard-image" />
      <div className="hotcard-details">
        <h3 className="hotcard-name">{name}</h3>
        <p className="hotcard-price">{price}</p>
      </div>
    </div>
  );
};

export default Hotcard;
