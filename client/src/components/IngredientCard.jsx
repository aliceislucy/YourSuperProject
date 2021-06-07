import React from 'react';

// import styles here


function IngredientCard({ name, ingredientImg, description }) {
  return (
    <div className="IngredientCard">
        <h3>{name}</h3>
        <img src={ingredientImg} alt={name} />
        <p>{description}</p>
    </div>
  );
}

export default IngredientCard;