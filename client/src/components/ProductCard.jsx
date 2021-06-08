import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ productImg, name, productId, quantity, handleSubmit }) {

    return (
      <div className="ProductCard">
        <Link to={`/products/${productId}`}>
          <img src={productImg} alt={name} />
          <p>{name}</p>
        </Link>
          {quantity ? <button name={productId} onClick={() =>handleSubmit(productId)}>Add to cart</button> : <p>Sold Out</p>}
      </div>
    );
}

export default ProductCard;
