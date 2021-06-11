import React from "react";
import { Link } from "react-router-dom";
import "../styles/productCard.css"
import "../styles/button.css"

function ProductCard({ productImg, name, productId, quantity, handleSubmit }) {

    return (
      <div className="productCard">
        <Link to={`/products/${productId}`}>
          <img src={productImg} alt={name} />
          <p className="name">{name}</p>
        </Link>
          {quantity ? <button  className="button-component" name={productId} onClick={() =>handleSubmit(productId)}><p>Add to cart</p></button> : <p className="soldOut">Sold Out</p>}
      </div>
    );
}

export default ProductCard;
