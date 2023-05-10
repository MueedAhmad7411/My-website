import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";
import mylogo from "../../photos/mylogo.png"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='imgdiv'> 
        <img className='logoimg' src={mylogo} alt="not found"/>
        </div>

      <div className='linkdiv'>
        <div className='linkdiv2'>
      <Link className='link1' to="/">Home</Link>
      <Link className='link2' to="/about">About</Link>
      <Link className='link3' to="/reviews">Reviews</Link>
      <Link className='link4' to="/contact">Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar;
