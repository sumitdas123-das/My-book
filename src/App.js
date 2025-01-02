import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Cart from './Component/Cart';
const App = () => {
  const[cart,setcart]=useState([])
  const[show,setshow]=useState(true)
  const handleclick=(item)=>{
    let ispresent=false
    cart.forEach((product)=>{
      if(item.id===product.id)
        ispresent=true
      })
      if(ispresent)
        return
      setcart([...cart,item])
    };
    const handlechange=(item,d)=>{
      let ind=-1
      cart.forEach((data,index)=>{
        if(data.id===item.id)
          ind=index

      } )
      const temparr = cart
      temparr[ind].amount+=d
      setcart([...temparr])
      return;

    }
  return (
    <div>
      <Navbar size={cart.length} setshow={setshow}/>
      {
        show ? (<Main handleclick={handleclick}/>
         ):(
        <Cart cart={cart} setcart={setcart} handlechange={handlechange}/>
      )}
      
    </div>
  );
}

export default App;
