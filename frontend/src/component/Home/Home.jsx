import React from 'react';
import "../Home/Home.css"
import {BiCurrentLocation} from 'react-icons/bi';
import Myservices from './myservices';
import Myprocess from './myprocess';
import Footer from './footer';

const Home = () => {
  return (
<div>
    <div className='home'>
    <div className="home1">
      <div className='home11'>
        <div className='name'> 
        <BiCurrentLocation className='iconlocation'/>
        <p className='companyname'>Mueed web Development</p>
        </div>
      <div className='mydetail'>
      <h1>I build Custom</h1>
      <h1>Website Solution</h1>
      <h1>That Helps Your</h1>
      <h1>Buisness Grow</h1>
      </div>
      </div>
    </div>
    <div className='home2'>
      <div className='pic'></div>
    </div>
    </div>
    <Myservices/>
      <Myprocess/>
      <Footer/>
     </div>
  );
}

export default Home;
