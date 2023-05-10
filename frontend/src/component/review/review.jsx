import React, { useState } from 'react';
import "../review/review.css";
import {Button} from "@mui/material"
import axios from "axios"

const Review = () => {
  
  const [fname,setfname]=useState("");
  const [lname,setlname]=useState("");
  const [email,setemail]=useState("");
  const [comment,setcomment]=useState("");
  const submithandler=async(e)=>{
   e.preventDefault();
   await axios.post("http://localhost:3100/comment",{
    firstname:fname,
    lastname:lname,
    email:email,
    comment:comment
   },
   {Headers:{ "Content-Type": "application/json",}});
   alert("comment posted");
   
 }
  return (
    <div className='comment'>
      <div className='comment_heading'>
        <h1>Leave a comment</h1>
      </div>
      <form onSubmit={submithandler}>
      <div className='comment_name'>
        <div className="comment_firstname">
          <p>First Name</p>
          <input value={fname} type='text' required onChange={(e)=>setfname(e.target.value)}/>
        </div>
        <div className="comment_lastname">
        <p>Last Name</p>
          <input value={lname} type='text' required onChange={(e)=>setlname(e.target.value)}/>
        </div>
      </div>
      <div className='comment_email'>
        <p>Email</p>
        <input value={email}  type="email" required onChange={(e)=>setemail(e.target.value)} />
      </div>
      <div className='area'>
        <p>Comment</p>
        <textarea className="area_inside" value={comment} type='text' onChange={(e)=>setcomment(e.target.value)} />
      </div>
      <div className='submit_button'>
      <Button type='submit' variant="contained">Submit</Button> 
      </div>
      </form>
    </div>
 )
}
export default Review;
