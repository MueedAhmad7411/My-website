import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Home from "./component/Home/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Contact from './component/contacts/contact';
import About from './component/about/about';
import Review from './component/review/review';

const App =()=>{
  useEffect(()=>{
    AOS.init();
},[])
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path="/about" element={<About/>}></Route>
      <Route path ="/contact" element={<Contact/>}></Route>
      <Route path ="/reviews"element={<Review/>}></Route>
   </Routes>
    </BrowserRouter>

  )
}

export default App;
