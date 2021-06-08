import React from "react";
import ButtonAddCart from "./ButtonAddCart";

function ProductCast({ productImg, name, productId, quantity }) {
  //console.log(productId)

    return (
      <div className="IngredientCard">
        <a href={`http://localhost:6001/products/${productId}`}>
          <img src={productImg} alt={name} />
          <p>{name}</p>
          {quantity ? <ButtonAddCart /> : <p>Sold Out</p>}
        </a>
      </div>
    );
}

export default ProductCast;
