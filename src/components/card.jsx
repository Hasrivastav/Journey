import React from 'react';
import '../styles/card.scss';

const Card = ({ title, content, image, className }) => {
  return (
    <div className={`card ${className}`}>
      <img className="card__img" src={image} alt={title} />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{content}</p>
      </div>
    </div>
  );
};

export default Card;

