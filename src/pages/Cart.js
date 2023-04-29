import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from "../store/cartSlice";
// import {total} from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const productsArr = useSelector((state) => state.cart);

  const handleRemove = (k_ID) => {
      dispatch(remove(k_ID))
  }
 
// let sum = [];

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',marginTop:'30px',flexDirection:'column'}}>
     
      <div className='CartOutWrapper' style={{display:'flex',justifyContent:'space-evenly',alignContent:'center',width:'90%',flexDirection:'row'}}>
      
        <div className='cartWrapper'>
          <h1 style={{textAlign:'left'}}>Cart</h1>
          {
              productsArr.map((k) => (
              <div className='cartCard' key={new Date().getTime + Math.random()}>
                <img src={k.image} alt='imageCard'/>
                <h5>{k.title}</h5>
                <h5>{k.price}</h5>
                <button className='btn' onClick={() => handleRemove(k.id)}>Remove from Cart</button>
              </div>
            ))
          }
         </div>

        <div className='checkWrapper'>
           <h3>Checkout Items</h3>
            <div style={{background:'black',color:'white',width:'180px'}}>
              <ul>
               {
                productsArr.map((k) => (
                  <li className='listItem' key={new Date().getDate + Math.random()}>item  &nbsp;&nbsp;&nbsp;&nbsp; {k.price}</li>
                  )
                  )
               }
              </ul>
              {/* <p></p> */}
            </div>  
        </div>
      </div>

    </div>
  );
}

export default Cart;
