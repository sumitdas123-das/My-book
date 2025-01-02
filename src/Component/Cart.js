import React, { useEffect, useState } from "react";
import "./cart.css"

const Cart = ({ cart, setcart,handlechange }) => {
  const [price, setPrice] = useState(0);
  const handleprice=()=>{
    let ans=0
    cart.map((item)=>{
      ans += item.amount*item.price

    })
    setPrice(ans)
  }
  useEffect(()=>{
    handleprice()
  })
  const deletecart=(id)=>{
  const updatecart=  cart.filter((item)=>item.id!==id)
  setcart(updatecart)
  }

  return (
    <article className="cart-main">
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} />

            <p>{item.title}</p>
          </div>

          <div>
            <button className='plusminus-btn coral'onClick={()=>handlechange(item,-1)}>-</button>
            <button  className='amount-btn'>{item.amount}</button>
            <button className='plusminus-btn coral'onClick={()=>handlechange(item,1)}>+</button>
          </div>

          <div>
            <span className='amount-btn'>{item.price}</span>

            <button  className='amount-btn' onClick={()=>deletecart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="total">
        <span >Total Price of your Cart</span>

        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;