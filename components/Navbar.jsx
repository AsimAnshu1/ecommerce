import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const {showCart, setShowCart, totalQuantity} = useStateContext();
  return (
    <div className='navbar-container'>
    <p className='logo'>
      <Link href="/"> Headphones</Link>
    </p>
      <button className='cart-icon' onClick={()=>setShowCart(true)}
       type='button'>
        <AiOutlineShopping />
      <span className='cart-item-qty'>{totalQuantity}</span>
      </button>
      {showCart && <Cart />}
    </div>
  
  )
}

export default Navbar