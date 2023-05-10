import React from 'react';
import "../about/about.css";
import Mern from "../../photos/mern.png";

const About = () => {
  return (
    <div className='about'>
        <div className="about_inside">
      <h1>Try once, you won't regret!</h1>
<p> Quality is not just a word for me,but it really belongs to me. 
I am sure you will be convinced once you will hire me. 
I am an experienced full-stack web developer.
 I have worked with multiple technologies to build websites and web applications.
  My skills include  React js, Next js,HTML,CSS,Java Script, Redux, Tailwind CSS, material-UI, node js, express, MongoDB, SASS.</p>
  <img src={Mern} alt='not found'></img>
</div>
    </div>
  )
}

export default About;
