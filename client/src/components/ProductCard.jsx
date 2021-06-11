import React from "react";
import { Link } from "react-router-dom";
import "../styles/productCard.css";
import "../styles/button.css";

function ProductCard({ productImg, name, productId, quantity, handleSubmit }) {
  return (
    <div className="productCard">
      <Link to={`/products/${productId}`}>
        <img src={productImg} alt={name} />
      </Link>


      <div className="dataProductCard">
        <p className="name">{name}</p>
        {quantity ? (
          <button
            className="button-component"
            name={productId}
            onClick={() => handleSubmit(productId)}
          >
            <p>Add to cart</p>
          </button>
        ) : (
          <p className="soldOut">Sold Out</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
