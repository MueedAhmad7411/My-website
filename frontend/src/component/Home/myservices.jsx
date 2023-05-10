import React from 'react';
import "./myservices.css"
import{Paper} from "@mui/material"
const Myservices = () => {
  return (
    <div className='myservicesmain'>
    <div className='services'>
          <h1 className='sheading'>
              MyServices
          </h1>
      </div>
      
      <div className='service'>
         <div className='paper1'>
         <Paper data-aos="flip-left" elevation={3} className='paper11' >
            <h1>WEB DEVELOPMENT</h1>
            <p>I don't just design websites. 
                I build high-performing, beautiful websites
                 that are conversion-focused, 
                 brand-accurate, and user-friendly.</p>
         </Paper>
         </div>
         <div  data-aos="flip-right" className='paper2'>
         <Paper  elevation={3} className='paper22'>
            <h1>SEO</h1>
            <p>A greater audience. A high converting 
                website won't be effective if no one visits it.
                 Ranking on Google is essential to getting new clients in the door.</p>
        </Paper>
        </div>      
      </div>
      <div className='service'>
         <div className='paper1'>
         <Paper data-aos="flip-up" elevation={3} className='paper11' >
            <h1>Graphic & Branding</h1>
            <p>Catch the eye. In addition to web services
                , I can produce branding and marketing
                 resources for both print and digital applications.</p>
         </Paper>
         </div>
         <div className='paper2'>
         <Paper  data-aos="flip-down" elevation={3} className='paper22'>
            <h1>Photo & Video</h1>
            <p>Show, don't tell. Photos and videos are effective at telling 
                the story of who you are and what you do,
                 establishing trust, and building 
                 relationships with potential customers.</p>
        </Paper>
        </div>      
      </div>
</div>
  )
}

export default Myservices
