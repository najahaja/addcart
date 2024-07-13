import  { useEffect, useState } from 'react'
import { useContext } from 'react';
import "./Viewcart.css";
import { cartContext } from './App';
export const Viewcart = () => {
const{cart,setCart}=useContext(cartContext);
const[total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amount),0));
  },[cart])
  return (
    <>
      <h2 className='carthead'>Cart Products </h2>
<div className="cart-container">
  {cart.map((product)=>(
    <div className="cart-product">
      <div className="img">
        <img src={product.picture} alt="image" />
    </div>
<div className="cart-product-details">
  <h3>{product.food_name}</h3>
  <p>Price Rs:{product.amount}$</p>
</div></div>
  ))}
</div>

              <h2 className='carttotal'>Total Amount Rs: {total} $</h2> </>
  )
}
