import React from 'react';
import './style/cartProduct.css';

const CartProduct = ({product}) => {

  console.log(product)

  return (
    <article className='cart-product'>
      <header>
        <h4>{product.brand}</h4>
        <h3>{product.title}</h3>
      </header>
      <button>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <div>{product.productsInCart.quantity}</div>
      <div>
        <p>Unit Price:</p>
        <span>{product.price}</span>
      </div>
    </article>
  )
}

export default CartProduct
