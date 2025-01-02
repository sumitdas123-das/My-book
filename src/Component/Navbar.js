import React from 'react';
import "./Navbar.css"
const Navbar = ({size  , setshow}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={()=>setshow(true)}>My shooping</span>
        <div className="cart">
          <span>
            <i className="fas fa-cart-plus"onClick={()=>setshow(false)}></i>
          </span>
        <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
