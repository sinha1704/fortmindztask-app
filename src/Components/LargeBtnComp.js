import React from 'react'

const LargeBtnComp = ({startIcon, label, count}) => {
  return (
 <button style={{display:"flex", gap:"20px", background:"#fff", borderRadius:"8px", border:"1px solid #E3E3E5", padding:"16px"}}>
  <div style={{fontSize:"50px", width:"60px", marginTop:"20px"}}> {startIcon}</div>
  <div style={{textAlign:"left"}}>
  <p style={{fontSize:"16px", color:"#0F1D3B"}}> {label}</p>
     <p style={{fontSize:"28px", color:"#0F1D3B", fontWeight:"550", marginTop:"-10px"}}> {count}</p>
     <p style={{color:"#5A86FC", fontSize:"14px", marginTop:"-20px"}}>view all</p>
  </div>
   
 </button>
  )
}

export default LargeBtnComp
