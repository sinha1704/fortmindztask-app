import React from 'react'
import "./index.css"
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import LargeBtnComp from '../../Components/LargeBtnComp';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import StarIcon from '@mui/icons-material/Star';
import { LineChart } from '@mui/x-charts/LineChart';
import ButtonComp from '../../Components/ButtonComp';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    function valuetext(value) {
        return `${value}°C`;
      }
     const profileData =[
        {   id:"01",
            name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
            <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"gray"}}></div>
           <div style={{textAlign:"left"}}>
           <p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
            <p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
           </div>
          </div>,
            location:"Mesa, New Jersey ",
            viewed_on:"24 Mar, 2024"
        },
        {   id:"02",
        name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
        <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"gray"}}></div>
       <div style={{textAlign:"left"}}>
       <p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
        <p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
       </div>
      </div>,
        location:"Mesa, New Jersey ",
        viewed_on:"24 Mar, 2024"
    },
    {   id:"03",
    name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
    <div style={{height:"40px", width:"40px", borderRadius:"50%", background:"gray"}}></div>
   <div style={{textAlign:"left"}}>
   <p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
    <p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
   </div>
  </div>,
    location:"Mesa, New Jersey ",
    viewed_on:"24 Mar, 2024"
},
{   id:"04",
name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"40px", width:"40px", borderRadius:"50%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
<p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
</div>
</div>,
location:"Mesa, New Jersey ",
viewed_on:"24 Mar, 2024"
},
{   id:"05",
name:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"40px", width:"40px", borderRadius:"50%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
<p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
</div>
</div>,
location:"Mesa, New Jersey ",
viewed_on:"24 Mar, 2024"
}
        
     ]

const CampaignsData = [
    {   id:"01",
    company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
    <div style={{height:"40px", width:"40px", borderRadius:"20%", background:"gray"}}></div>
   <div style={{textAlign:"left"}}>
   <p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
    <p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
   </div>
  </div>,
  Platform :<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
  <div style={{height:"30px", width:"30px", borderRadius:"20%", background:"gray"}}></div>
 <div style={{textAlign:"left"}}>
 <p style={{ marginTop:"6px", fontSize:"12px", color:"#3F4B63"}}>Linkdin</p> 
 </div>
</div>,
    Status: <Box sx={{ width: 100 }}>
    <Slider
      aria-label="Temperature"
      defaultValue={30}
      getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      shiftStep={30}
      step={10}
      marks
      min={10}
      max={110}
    />
  </Box>,
    due_date:"24 Mar, 2024"
},
{   id:"02",
company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"40px", width:"40px", borderRadius:"20%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
<p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
</div>
</div>,
Platform :<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"30px", width:"30px", borderRadius:"20%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"12px", color:"#3F4B63"}}>Linkdin</p> 
</div>
</div>,
Status: <Box sx={{ width: 100 }}>
<Slider
  aria-label="Temperature"
  defaultValue={40}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  shiftStep={30}
  step={10}
  marks
  min={10}
  max={110}
/>
</Box>,
due_date:"24 Mar, 2024"
},
{   id:"03",
company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"40px", width:"40px", borderRadius:"20%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
<p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
</div>
</div>,
Platform :<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"30px", width:"30px", borderRadius:"20%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"12px", color:"#3F4B63"}}>Linkdin</p> 
</div>
</div>,
Status: <Box sx={{ width: 100 }}>
<Slider
  aria-label="Temperature"
  defaultValue={70}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  shiftStep={30}
  step={10}
  marks
  min={10}
  max={110}
/>
</Box>,
due_date:"24 Mar, 2024"
},
{   id:"04",
company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"40px", width:"40px", borderRadius:"20%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
<p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
</div>
</div>,
Platform :<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"30px", width:"30px", borderRadius:"20%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"12px", color:"#3F4B63"}}>Linkdin</p> 
</div>
</div>,
Status: <Box sx={{ width: 100 }}>
<Slider
  aria-label="Temperature"
  defaultValue={60}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  shiftStep={30}
  step={10}
  marks
  min={10}
  max={110}
/>
</Box>,
due_date:"24 Mar, 2024"
},
{   id:"05",
company:<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"40px", width:"40px", borderRadius:"20%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"13px", color:"#3F4B63"}}>Raj</p> 
<p style={{fontSize:"10px",marginTop:"-20px", color:"#2870FB"}}>Acme Co. <LaunchIcon  fontSize='16px'/></p>
</div>
</div>,
Platform :<div style={{display:"flex", gap:"4px", paddingLeft:"20px"}}>
<div style={{height:"30px", width:"30px", borderRadius:"20%", background:"gray"}}></div>
<div style={{textAlign:"left"}}>
<p style={{ marginTop:"6px", fontSize:"12px", color:"#3F4B63"}}>Linkdin</p> 
</div>
</div>,
Status: <Box sx={{ width: 100 }}>
<Slider
  aria-label="Temperature"
  defaultValue={60}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  shiftStep={30}
  step={10}
  marks
  min={10}
  max={110}
/>
</Box>,
due_date:"24 Mar, 2024"
},
]


    const data = [
      
        { value: 20, },
        { value: 5, },
      ];
      
      const size = {
        width: 300,
        height: 150,
      };
      
      const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
      }));

      function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
          </StyledText>
        );
      }
      
  return (
    <div>
      <p style={{fontSize:"28px", fontWeight:"500", marginLeft:"5%", marginTop:"80px"}}>Dashboard</p>

      <div style={{width:"90%", marginLeft:"5%", borderRadius:"20px", display:"grid", gridTemplateColumns:"48% 4% 48%"}} className='topSection'>

<div>
<p style={{fontSize:"22px", fontWeight:"500", marginLeft:"20px"}}>Search  Score</p>
<div className='topSubSection' style={{padding:"4px"}}>
<div style={{}}>
<PieChart series={[{ data, innerRadius: 50 }]} {...size}>
      <PieCenterLabel>90</PieCenterLabel>
    </PieChart>
</div>
<div style={{marginLeft:"-80px"}}>
    <p style={{fontSize:"24px", fontWeight:"550", color:"#0F1D3B"}}>Great Job!</p>
    <p style={{fontSize:"16px", fontWeight:"450", color:"#898B97",marginTop:"-20px"}}>Your Profile is appearing in all relevant searches</p>
    <button style={{background:"#fff", fontSize:"14px", borderRadius:"8px", border:"1px solid #E3E3E5", color:"#0F1D3B", height:"40px", width:"150px", marginTop:"-20px"}}>Improve your Score</button>
</div>
</div>
</div>
<div>
<p style={{ height:"80%", width:"0.001px", border:"1px solid #E3E3E5"}}>

</p>
</div>
<div style={{paddingTop:"30px"}}>
<p style={{fontWeight:"550", fontSize:"22px", color:"#0F1D3B", }}>Introducing Search Score</p>
<p style={{fontWeight:"450", color:"#898B97", fontSize:"16px"}}>Search Score measures how your profile will perform in a search. Profiles with higher scores are more likely to get chosen by brands to collaborate with.</p>
</div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"25% 25% 25% 25%", gap:"20px", width:"90%", marginLeft:"2%", marginTop:"40px"}}>
     
        <LargeBtnComp 
        startIcon = {<div style={{background:"#E3B8F0", color:"#9A4CFB", borderRadius:"8px", }}>
<RemoveRedEyeOutlinedIcon fontSize='30px'/>
        </div>}
        label = {"Profile Views"}
        count = {"1200"}
         />
       
          <LargeBtnComp 
        startIcon = {<div style={{background:"#F7CFBB", color:"#F88064", borderRadius:"8px", }}>
<DescriptionOutlinedIcon fontSize='30px'/>
        </div>}
        label = {"Applied Listings"}
        count = {"44"}
         />
          <LargeBtnComp 
        startIcon = {<div style={{background:"#93EBBC", color:"#41E985", borderRadius:"8px", }}>
<BookmarkBorderOutlinedIcon fontSize='30px'/>
        </div>}
        label = {"Saved Listings"}
        count = {"17"}
         />
          <LargeBtnComp 
        startIcon = {<div style={{background:"#A8C2F7", color:"#2870FB", borderRadius:"8px", }}>
<StarIcon fontSize='30px'/>
        </div>}
        label = {"Featured Listings"}
        count = {"5633"}
         />
      </div>
      <div style={{display:"grid", gridTemplateColumns:"60% 40%", marginTop:"40px", padding:"20px", gap:"10px"}}>
      <div style={{borderRadius:"12px", padding:"10px", border:"1px solid #E3E3E5"}}
     >
    <div style={{marginLeft:"80%"}}>
    <ButtonComp
    startIcon={<LayersOutlinedIcon fontSize="16px" />}
    label={"Monthly"}
    endIcon={<ArrowDropDownOutlinedIcon fontSize='12px' />}
    
/>
    </div>
      <LineChart
      xAxis={[{ data: [0, 50, 100, 150, 200, 250] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          color: '#B79ACE'
        },
      ]}
      width={500}
      height={300}
    />
      </div>
      <div  style={{borderRadius:"12px", padding:"10px", border:"1px solid #E3E3E5"}}>
<div style={{display:"flex"}}>
<p style={{fontSize:"20px", fontWeight:"550", marginTop:'-5px'}}>Notifications</p>
<div style={{marginLeft:"40%"}}> 
<ButtonComp
    startIcon={<LayersOutlinedIcon fontSize="16px" />}
    label={"Recent"}
    endIcon={<ArrowDropDownOutlinedIcon fontSize='12px' />}
    
/>
</div>



</div>
<ul style={{color:"blue"}}>
  <li> <p style={{fontSize:"12px", color:"#898B97"}}>Toady 11:34 pm</p>
  <p style={{fontSize:"14px", color:"#0F1D3B", marginTop:"-8px"}}>Lorem ipsum dolor sit amet consectetur. Netus condimentum leo imperdiet vitae diam. Nunc diam at arcu massa.<span style={{color:"blue"}}> Tristique lobortis laoreet</span>.</p></li>
  <li> <p style={{fontSize:"12px", color:"#898B97"}}>Toady 11:34 pm</p>
  <p style={{fontSize:"14px", color:"#0F1D3B", marginTop:"-8px"}}>Lorem ipsum dolor sit amet consectetur. Netus condimentum leo imperdiet vitae diam. Nunc diam at arcu massa.<span style={{color:"blue"}}> Tristique lobortis laoreet</span>.</p></li>
  <li> <p style={{fontSize:"12px", color:"#898B97"}}>Toady 11:34 pm</p>
  <p style={{fontSize:"14px", color:"#0F1D3B", marginTop:"-8px"}}>Lorem ipsum dolor sit amet consectetur. Netus condimentum leo imperdiet vitae diam. Nunc diam at arcu massa.<span style={{color:"blue"}}> Tristique lobortis laoreet</span>.</p></li>
  
</ul>
      </div>
      </div>

      <div>

      </div>
      <div  style={{display:"grid", gridTemplateColumns:"50% 50%", marginTop:"40px", padding:"20px", gap:"10px"}}>
<div style={{borderRadius:"12px", padding:"10px", border:"1px solid #E3E3E5"}}>
<div style={{display:"flex"}}>
    <p style={{fontSize:"20px", fontWeight:"550", marginLeft:"20px"}}>Profile Activity</p>
    <p style={{color:"#2870FB",fontSize:"16px", marginLeft:"50%"}}>view all</p>
</div>
<table style={{width:"90%", borderRadius:"10px", marginLeft:"auto", marginRight:"auto"}}>
      <thead style={{height:"40px"}}>
        <th style={{textAlign:"left", paddingLeft:"20px"}}>Name </th>
        <th>Location </th>
        <th  style={{textAlign:"right", paddingRight:"20px"}}>Viewed On</th>
       
      </thead>
      <tbody style={{textAlign:"center"}}>
      {profileData.map((items, id)=>{
        return(
          <tr key={id}>
          <td>{items.name}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.location}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.viewed_on}</td>
         
        </tr>
        )
      })}
        
       
        
      </tbody>
    </table>
</div>
<div  style={{borderRadius:"12px", padding:"10px", border:"1px solid #E3E3E5"}}>
<div style={{display:"flex"}}>
    <p style={{fontSize:"20px", fontWeight:"550", marginLeft:"20px"}}>Campaigns</p>
    <p style={{color:"#2870FB",fontSize:"16px", marginLeft:"50%"}}>view all</p>
</div>
<table style={{width:"90%",  borderRadius:"10px", marginLeft:"auto", marginRight:"auto"}}>
      <thead style={{height:"40px"}}>
      <th style={{textAlign:"left", paddingLeft:"20px"}}>Company </th>
        <th>Platform  </th>
        <th>Status </th>
        <th  style={{textAlign:"right", paddingRight:"20px"}}>Due Date</th>
       
      </thead>
      <tbody style={{textAlign:"center"}}>
      {CampaignsData.map((items, id)=>{
        return(
          <tr key={id}>
          <td>{items.company}</td>
          <td>{items.Platform}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.Status}</td>
          <td style={{fontSize:"15px", color:"#3F4B63"}}>{items.due_date}</td>
        </tr>
        )
      })}
        
       
        
      </tbody>
    </table>
</div>
      </div>
      <p style={{textAlign:"center", fontSize:"17px", color:"#898B97"}}>Copyright©2024 Cheeky</p>
    </div>
  )
}

export default DashBoard
