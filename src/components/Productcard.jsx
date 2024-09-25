import React, { useContext } from 'react'
import {HomeContext} from '../context/HomeContext.jsx'

export const Productcard = (props) => {
 
  const {id, productName, price, productImg} = props.data;
  const {addToCart, cartItems} = useContext(HomeContext);
  const cartItemAmount = cartItems[id];
  return (
    <div>
      <div className="card">
      <img className="productimg" src={productImg} alt={productImg} style={{ width: '200px', height: '200px' }} />
        <div className="description">
        <h2>{productName}</h2>
        <p>Price: ${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)} >
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        </div>
      </div>
    </div>
  );
}
