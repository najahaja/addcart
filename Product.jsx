import React from 'react'
import { useContext } from 'react';
import "./Product.css";
import { cartContext } from './App';
export const Product = ({product}) => {
const{cart,setCart}=useContext(cartContext);
    
const addCart=()=>{
    setCart([...cart,product]);
};
const removeCart=()=>{
    setCart(cart.filter((item)=>item.id!==product.id));
};
  return (<div className='product'><br/>
    <div className="img">
        <img src={product.picture} alt={product.food_name}/>
    </div>
    <div className="details">
    <h3>{product.food_name}</h3>
    <h4>{product.amount} $</h4>
    {cart.includes(product)?<button className='btnRemove' onClick={removeCart}>Remove From Cart</button>
 :<button onClick={addCart}>Add to Cart</button>} </div></div>
    
  )
}
