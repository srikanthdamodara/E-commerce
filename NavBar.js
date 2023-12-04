import React, { useContext, useState } from 'react'
import "./NavBar.css"
import Logo from "../Assests/logo.png";
import Cart_icon from "../Assests/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const NavBar = () => {

  const[menu,setMenu]=useState('shop');
  const{getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
  <div className='nav-logo'>
    <img src={Logo} alt=""/>
    <p>SHOPPER</p>
  </div>
  <ul className='nav-menu'>
   <li  onClick={()=>{setMenu('shop')}}><Link className="link" to="/">Shop </Link>{menu==='shop'?<hr/>:<></>} </li>
    <li onClick={()=>{setMenu('mens')}}><Link className="link" to="/mens">Men</Link> {menu==='mens'?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu('womens')}}><Link className="link" to="/womens">Women</Link> {menu==='womens'?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu('kids')}}><Link className="link" to="/kids">Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
  </ul>
 <div className='nav-login-cart'>
 <Link className="link" to="/login"><button>Login</button></Link>
   <Link className="link" to="/cart"> <img src={Cart_icon} alt=""/></Link>
    <div className='nav-cart-count'>
          {getTotalCartItems()}
    </div>
 </div>



    </div>
  )
}

export default NavBar