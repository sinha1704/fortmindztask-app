import React, { useState } from 'react'
import CustomizedInputBase from '../../Components/CoustomizeInputField'
import Box from '@mui/material/Box';
import "./index.css"
import ButtonComp from '../../Components/ButtonComp';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const ProfileViews = () => {
  const Data = [
    {
      id:"01",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadal</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"shatadal@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"02",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Raj</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"purandarpur,Murshidabad",
      industry:"Apparel",
      email:"raj@gmail.com",
      viewed_on :"March 10, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"03",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadeep</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"Kolkata",
      industry:"Apparel",
      email:"shatadeep@gmail.com",
      viewed_on :"jan 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"04",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Arnab</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"arnab@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"05",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Sudip</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"India",
      industry:"Apparel",
      email:"sudip@gmail.com",
      viewed_on :"March 12, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"06",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Sunny</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"sunny@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },   {
      id:"07",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadal</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"shatadal@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"08",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Raj</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"purandarpur,Murshidabad",
      industry:"Apparel",
      email:"raj@gmail.com",
      viewed_on :"March 10, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"09",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadeep</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"Kolkata",
      industry:"Apparel",
      email:"shatadeep@gmail.com",
      viewed_on :"jan 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"10",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Arnab</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"arnab@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"11",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadal</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"shatadal@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"12",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Raj</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"purandarpur,Murshidabad",
      industry:"Apparel",
      email:"raj@gmail.com",
      viewed_on :"March 10, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"13",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadeep</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"Kolkata",
      industry:"Apparel",
      email:"shatadeep@gmail.com",
      viewed_on :"jan 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"14",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Arnab</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"arnab@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"15",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Sudip</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"India",
      industry:"Apparel",
      email:"sudip@gmail.com",
      viewed_on :"March 12, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"16",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Sunny</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"sunny@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },   {
      id:"17",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadal</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"shatadal@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"18",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Raj</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"purandarpur,Murshidabad",
      industry:"Apparel",
      email:"raj@gmail.com",
      viewed_on :"March 10, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"19",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadeep</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"Kolkata",
      industry:"Apparel",
      email:"shatadeep@gmail.com",
      viewed_on :"jan 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"20",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Arnab</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"arnab@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    
    {
      id:"21",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadal</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"shatadal@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"22",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Raj</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"purandarpur,Murshidabad",
      industry:"Apparel",
      email:"raj@gmail.com",
      viewed_on :"March 10, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"23",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadeep</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"Kolkata",
      industry:"Apparel",
      email:"shatadeep@gmail.com",
      viewed_on :"jan 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"24",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Arnab</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"arnab@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"25",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Sudip</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"India",
      industry:"Apparel",
      email:"sudip@gmail.com",
      viewed_on :"March 12, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"26",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Sunny</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"sunny@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },   {
      id:"27",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadal</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"shatadal@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"28",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Raj</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"purandarpur,Murshidabad",
      industry:"Apparel",
      email:"raj@gmail.com",
      viewed_on :"March 10, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"29",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Shatadeep</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"Kolkata",
      industry:"Apparel",
      email:"shatadeep@gmail.com",
      viewed_on :"jan 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    {
      id:"30",
      name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"black"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Arnab</p> 
      <p style={{fontSize:"12px",marginTop:"-20px", color:"#2870FB"}}>Nike</p>
     </div>
    </div>,
      location:"kandi,Murshidabad",
      industry:"Apparel",
      email:"arnab@gmail.com",
      viewed_on :"March 20, 2024",
      action:<div >
      <button style={{color:"#9A4CFB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff"}}><SearchIcon fontSize='18px' /></button>
      <button  style={{color:"#2870FB", borderRadius:"8px", border:"1px solid #EEEFF1", background:"#fff", marginLeft:"4px"}}> <MailOutlineOutlinedIcon fontSize='18px'  /></button>
    
    </div>,
    },
    
    
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

    const perPage = ()=>{
if(currentPage !== 1){
  setCurrentPage(currentPage -1)
}
    }
    const nextPage = () =>{
      if(currentPage !== totalPages){
        setCurrentPage(currentPage + 1)
      }
    }
//     const changePage = (id) =>{

//     }
  // Pagination
  const totalPages = Math.ceil(Data.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Changeing the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Changeing items per page
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); 
  };

  // Calculate current items based on current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
     <p style={{fontSize:"28px", fontWeight:"500", marginLeft:"5%", marginTop:"80px"}}> Profile Views</p>

  <div className='topButtonSection' >
     
        <div style={{marginLeft:"10%"}} sx={{ width: '100%', }}><CustomizedInputBase /></div>
       <div style={{display:"flex", gap:"12px"}}>
       <ButtonComp startIcon={<FactoryOutlinedIcon fontSize='14px' />} label="Industry" endIcon={<ArrowDropDownOutlinedIcon fontSize='20px' />}/>
       <ButtonComp startIcon={<LocationOnOutlinedIcon fontSize='14px' />} label="Location" endIcon={<ArrowDropDownOutlinedIcon fontSize='20px' />}/>

       <ButtonComp startIcon={<DateRangeOutlinedIcon fontSize='14px' />} label="Date" endIcon={<ArrowDropDownOutlinedIcon fontSize='20px' />}/>

       <ButtonComp  label="Sort By" endIcon={<ArrowDropDownOutlinedIcon fontSize='20px' />}/>

       </div>
    
    </div>
    <br />

    <table style={{width:"90%", border:"1px solid #E3E3E5", borderRadius:"10px", marginLeft:"auto", marginRight:"auto"}}>
      <thead style={{height:"40px"}}>
        <th style={{textAlign:"left", paddingLeft:"20px"}}>Name <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Location  <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Industry  <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Email  <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Viewed On  <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Action</th>
      </thead>
      <tbody style={{textAlign:"center"}}>
      {currentItems.map((items, id)=>{
        return(
          <tr key={id}>
          <td>{items.name}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.location}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.industry}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.email}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.viewed_on}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.action}</td>
        </tr>
        )
      })}
        
       
        
      </tbody>
    </table>
   
    <div className='paginationSection'>
    <div style={{float:"left"}}>
       
      </div>
      <div style={{float:"right", marginRight:"5%"}}>
      <button className='pageBtn' onClick={perPage}><ArrowBackIosNewIcon fontSize='10px' />Previous</button>
        {pageNumbers.map(number => (
          
     
          <button className={`${currentPage === number ? 'clickButon':''} pageBtn`} key={number} onClick={() => handlePageChange(number)} disabled={number === currentPage}>
            {number}
          </button>
        
        ))}
        <button className='pageBtn' onClick={nextPage}>Next <ArrowForwardIosIcon fontSize='10px' /></button>
      </div>
      {/* Page size dropdown */}
      
    </div>
    </div>
  )
}

export default ProfileViews;
