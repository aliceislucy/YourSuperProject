import React from 'react';
import "./../styles/oneProduct.css";


function IngredientCard({ name, ingredientImg, description }) {
  return (
    <div className="ingredient">
        <img src={ingredientImg} alt={name} />
        <h3>{name}</h3>
        <div>{description}</div>
    </div>
  );
}

export default IngredientCard;