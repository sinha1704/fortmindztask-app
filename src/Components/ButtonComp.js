import React from 'react'

const ButtonComp = ({startIcon, label, endIcon}) => {
  return (
 <button style={{display:"flex", gap:"4px", background:"#fff", borderRadius:"8px", border:"1px solid #E3E3E5", padding:"6px", height:"36px"}}>
  <span style={{color:"#2870FB"}}> {startIcon}</span>
     <span style={{fontSize:"16px"}}> {label}</span>
     <span> {endIcon}</span>
 </button>
  )
}

export default ButtonComp
