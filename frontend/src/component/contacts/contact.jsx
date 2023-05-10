import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "../contacts/contact.css";
import {MdMarkEmailRead} from "react-icons/md";
import {SiWhatsapp} from "react-icons/si";

const Contact=()=> {
  return (
    <div className='main'>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '70vh',borderRadius:"10px"}} >
            <div className='contact'>
                 <div className='contact_heading'>
                <p style={{color:"gray",fontWeight:"600"}}>CONTACT ME</p>
                <h1>Got a Project? Lets Talk!</h1>
                </div>
                <div className='email'>
                <MdMarkEmailRead className="email_icon" style={{fontSize:"5vh" ,marginLeft:"15%"}}></MdMarkEmailRead>
                <p>Mueed_azhar@yahoo.com</p>
                </div>
                <div className='email'>
                <SiWhatsapp className='whatsapp_icon' style={{fontSize:"5vh" ,marginLeft:"25%"}}></SiWhatsapp>
                <p>923007411312</p>
                </div>
                </div>
         </Box>
      </Container>
  </div>
  );
}
export default Contact;
