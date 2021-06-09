import React from 'react'

function CartDisplayerProduct({userId, productId, productName,
    productPrice, quantity, productImg}) {
    return (
        <div className="CardProductCard">
             <img src={productImg} alt={productName} />
            <p>{productName}</p>
            <p>€ {productPrice * quantity}</p>
            <p>Quantity : {quantity}</p>
        </div>
    )
}

export default CartDisplayerProduct;
