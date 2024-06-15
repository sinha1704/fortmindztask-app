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
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';

const AppliedList = () => {
  const Data = [
    {
      id:"01",
      company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
      <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
     </div>
    </div>,
      listing:"Fitness Influencer",
      platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
      <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
     <div style={{textAlign:"left"}}>
     <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
     </div>
    </div>,
      industry:"Apparel",
      applied_date :"March 20, 2024",
      Status:<div >
      <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
     
    
    </div>,
    },
    {
        id:"02",
        company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
        <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
       </div>
      </div>,
        listing:"Fitness Influencer",
        platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
        <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
       </div>
      </div>,
        industry:"Apparel",
        applied_date :"March 20, 2024",
        Status:<div >
        <button style={{color:"#DE4141", borderRadius:"4px", border:"1px solid #DE4141", background:"#FEF6F6", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Closed</button>
       
      
      </div>,
      },
      {
        id:"03",
        company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
        <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
       </div>
      </div>,
        listing:"Fitness Influencer",
        platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
        <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
       </div>
      </div>,
        industry:"Apparel",
        applied_date :"March 20, 2024",
        Status:<div >
        <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
       
      
      </div>,
      },
      {
        id:"04",
        company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
        <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
       </div>
      </div>,
        listing:"Fitness Influencer",
        platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
        <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
       </div>
      </div>,
        industry:"Apparel",
        applied_date :"March 20, 2024",
        Status:<div >
        <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
       
      
      </div>,
      },
      {
        id:"05",
        company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
        <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
       </div>
      </div>,
        listing:"Fitness Influencer",
        platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
        <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
       </div>
      </div>,
        industry:"Apparel",
        applied_date :"March 20, 2024",
        Status:<div >
        <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
       
      
      </div>,
      },
    
      {
        id:"06",
        company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
        <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
       </div>
      </div>,
        listing:"Fitness Influencer",
        platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
        <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
       </div>
      </div>,
        industry:"Apparel",
        applied_date :"March 20, 2024",
        Status:<div >
        <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
       
      
      </div>,
      },
      {
          id:"07",
          company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
          <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
         <div style={{textAlign:"left"}}>
         <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
         </div>
        </div>,
          listing:"Fitness Influencer",
          platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
          <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
         <div style={{textAlign:"left"}}>
         <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
         </div>
        </div>,
          industry:"Apparel",
          applied_date :"March 20, 2024",
          Status:<div >
          <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
         
        
        </div>,
        },
        {
          id:"08",
          company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
          <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
         <div style={{textAlign:"left"}}>
         <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
         </div>
        </div>,
          listing:"Fitness Influencer",
          platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
          <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
         <div style={{textAlign:"left"}}>
         <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
         </div>
        </div>,
          industry:"Apparel",
          applied_date :"March 20, 2024",
          Status:<div >
          <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
         
        
        </div>,
        },
        {
          id:"09",
          company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
          <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
         <div style={{textAlign:"left"}}>
         <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
         </div>
        </div>,
          listing:"Fitness Influencer",
          platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
          <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
         <div style={{textAlign:"left"}}>
         <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
         </div>
        </div>,
          industry:"Apparel",
          applied_date :"March 20, 2024",
          Status:<div >
          <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
         
        
        </div>,
        },
        {
          id:"10",
          company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
          <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
         <div style={{textAlign:"left"}}>
         <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
         </div>
        </div>,
          listing:"Fitness Influencer",
          platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
          <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
         <div style={{textAlign:"left"}}>
         <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
         </div>
        </div>,
          industry:"Apparel",
          applied_date :"March 20, 2024",
          Status:<div >
          <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
         
        
        </div>,
        },
        {
            id:"11",
            company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
            <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
           <div style={{textAlign:"left"}}>
           <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
           </div>
          </div>,
            listing:"Fitness Influencer",
            platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
            <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
           <div style={{textAlign:"left"}}>
           <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
           </div>
          </div>,
            industry:"Apparel",
            applied_date :"March 20, 2024",
            Status:<div >
            <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
           
          
          </div>,
          },
          {
              id:"12",
              company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
              <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
             <div style={{textAlign:"left"}}>
             <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
             </div>
            </div>,
              listing:"Fitness Influencer",
              platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
              <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
             <div style={{textAlign:"left"}}>
             <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
             </div>
            </div>,
              industry:"Apparel",
              applied_date :"March 20, 2024",
              Status:<div >
              <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
             
            
            </div>,
            },
            {
              id:"13",
              company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
              <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
             <div style={{textAlign:"left"}}>
             <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
             </div>
            </div>,
              listing:"Fitness Influencer",
              platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
              <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
             <div style={{textAlign:"left"}}>
             <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
             </div>
            </div>,
              industry:"Apparel",
              applied_date :"March 20, 2024",
              Status:<div >
              <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
             
            
            </div>,
            },
            {
              id:"14",
              company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
              <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
             <div style={{textAlign:"left"}}>
             <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
             </div>
            </div>,
              listing:"Fitness Influencer",
              platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
              <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
             <div style={{textAlign:"left"}}>
             <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
             </div>
            </div>,
              industry:"Apparel",
              applied_date :"March 20, 2024",
              Status:<div >
              <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
             
            
            </div>,
            },
            {
              id:"15",
              company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
              <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
             <div style={{textAlign:"left"}}>
             <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
             </div>
            </div>,
              listing:"Fitness Influencer",
              platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
              <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
             <div style={{textAlign:"left"}}>
             <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
             </div>
            </div>,
              industry:"Apparel",
              applied_date :"March 20, 2024",
              Status:<div >
              <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
             
            
            </div>,
            },
            {
                id:"16",
                company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
                <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
               <div style={{textAlign:"left"}}>
               <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
               </div>
              </div>,
                listing:"Fitness Influencer",
                platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
                <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
               <div style={{textAlign:"left"}}>
               <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
               </div>
              </div>,
                industry:"Apparel",
                applied_date :"March 20, 2024",
                Status:<div >
                <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
               
              
              </div>,
              },
              {
                  id:"17",
                  company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
                  <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
                 <div style={{textAlign:"left"}}>
                 <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
                 </div>
                </div>,
                  listing:"Fitness Influencer",
                  platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
                  <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
                 <div style={{textAlign:"left"}}>
                 <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
                 </div>
                </div>,
                  industry:"Apparel",
                  applied_date :"March 20, 2024",
                  Status:<div >
                  <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
                 
                
                </div>,
                },
                {
                  id:"18",
                  company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
                  <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
                 <div style={{textAlign:"left"}}>
                 <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
                 </div>
                </div>,
                  listing:"Fitness Influencer",
                  platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
                  <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
                 <div style={{textAlign:"left"}}>
                 <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
                 </div>
                </div>,
                  industry:"Apparel",
                  applied_date :"March 20, 2024",
                  Status:<div >
                  <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
                 
                
                </div>,
                },
                {
                  id:"19",
                  company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
                  <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
                 <div style={{textAlign:"left"}}>
                 <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
                 </div>
                </div>,
                  listing:"Fitness Influencer",
                  platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
                  <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
                 <div style={{textAlign:"left"}}>
                 <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
                 </div>
                </div>,
                  industry:"Apparel",
                  applied_date :"March 20, 2024",
                  Status:<div >
                  <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
                 
                
                </div>,
                },
                {
                  id:"20",
                  company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
                  <div style={{height:"40px", width:"40px", borderRadius:"30%", background:"gray"}}></div>
                 <div style={{textAlign:"left"}}>
                 <p style={{ marginTop:"8px", fontSize:"15px", color:"#3F4B63"}}>Nike</p> 
                 </div>
                </div>,
                  listing:"Fitness Influencer",
                  platform:<div style={{display:"flex", gap:"4px", justifyContent:"center"}}>
                  <div style={{height:"30px", width:"30px", borderRadius:"30%", background:"gray"}}></div>
                 <div style={{textAlign:"left"}}>
                 <p style={{ marginTop:"6px", fontSize:"15px", color:"#3F4B63"}}>Facebook</p> 
                 </div>
                </div>,
                  industry:"Apparel",
                  applied_date :"March 20, 2024",
                  Status:<div >
                  <button style={{color:"#309269", borderRadius:"4px", border:"1px solid #309269", background:"#F6FEF9", fontSize:"12px", paddingLeft:"4px", paddingRight:"4px"}}>Open</button>
                 
                
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
     <p style={{fontSize:"28px", fontWeight:"500", marginLeft:"5%", marginTop:"80px"}}>Applied Listings</p>

  <div className='topButtonSection' >
     
        <div style={{marginLeft:"10%"}} sx={{ width: '100%', }}><CustomizedInputBase /></div>
       <div style={{display:"flex", gap:"12px"}}>
       <ButtonComp startIcon={<LayersOutlinedIcon fontSize='14px' />} label="Platform" endIcon={<ArrowDropDownOutlinedIcon fontSize='20px' />}/>

       <ButtonComp startIcon={<FactoryOutlinedIcon fontSize='14px' />} label="Industry" endIcon={<ArrowDropDownOutlinedIcon fontSize='20px' />}/>

       <ButtonComp startIcon={<MilitaryTechOutlinedIcon fontSize='14px' />} label="Status" endIcon={<ArrowDropDownOutlinedIcon fontSize='20px' />}/>

       <ButtonComp  label="Sort By" endIcon={<ArrowDropDownOutlinedIcon fontSize='20px' />}/>

       </div>
    
    </div>
    <br />

    <table style={{width:"90%", border:"1px solid #E3E3E5", borderRadius:"10px", marginLeft:"auto", marginRight:"auto"}}>
      <thead style={{height:"40px"}}>
        <th style={{textAlign:"left", paddingLeft:"20px"}}>Company <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Listing  <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Platform  <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Industry  <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Applied Date <ArrowUpwardIcon fontSize='6px'/> <ArrowDownwardIcon fontSize='6px' /></th>
        <th>Status</th>
      </thead>
      <tbody style={{textAlign:"center"}}>
      {currentItems.map((items, id)=>{
        return(
          <tr key={id}>
          <td>{items.company}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.listing}</td>
          <td>{items.platform}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.industry}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.applied_date}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.Status}</td>
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

export default AppliedList;
