import React from 'react';
import "../Home/myprocess.css";
import {Paper} from "@mui/material";

const Myprocess = () => {
  return (
     <div className="myprocess">
        <div className='myprocess_left'>
              <p>METHODOLOGY</p>
              <h1>My Process</h1>
        </div>
        <div className="myprocess_right">
            <div className='paper'>
            <Paper data-aos="fade-right" className='myprocess_paper'>
                <p style={{color:"red"}}>phase 1</p>
                <h1>Discovery</h1>
                <p style={{color:"rgb(63, 151, 142)"}}>This is the phase where I dive deep into your world and get to know you. 
                    Before I can properly design your high-performing website,
                     I need to understand you, your pain-points, and your audience.</p>
            </Paper>
            <Paper data-aos="fade-left" className='myprocess_paper'>
                  <p style={{color:"Blue"}}>phase 2</p>
                  <h1>Design</h1>
                  <p style={{color:"rgb(63, 151, 142)"}}>I take what I’ve learned about you & craft a bespoke 
                    website that’s tailored to meet your unique needs, 
                    all while accurately representing your brand & 
                    keeping things aesthetically pleasing 
                    & useable for your audience.</p>
            </Paper>
            <Paper data-aos="fade-up" className='myprocess_paper'>
                  <p style={{color:" rgb(98, 98, 174)"}}>phase 3</p>
                  <h1>Build</h1> ;
                  <p style={{color:"rgb(63, 151, 142)"}}>Once you’re happy with the designs, I will proceed to building 
                    them making sure everything is optimised 
                    to follow modern web practices, such as speed,
                     security and reliability.</p>
            </Paper>
            <Paper data-aos="fade-down" className='myprocess_paper'>
            <p style={{color:"rgb(179, 113, 113)"}}>phase 4</p>
                  <h1>Launge</h1>
                  <p style={{color:"rgb(63, 151, 142)"}}>After I’ve completed the build and double checked
                     everything alongside your approval, it’s time 
                     to launch your website. In this phase I will 
                     also provide some training videos on how you can add
                      content to your website so you can do it yourself.</p>
            </Paper>
            </div>
        </div>
      </div>
  )
}

export default Myprocess
