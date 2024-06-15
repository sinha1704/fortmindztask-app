import * as React from 'react';
import "./Sidebar.css"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import MailIcon from '@mui/icons-material/Mail';
import { Collapse, Link } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CampaignIcon from '@mui/icons-material/Campaign';
import ExploreIcon from '@mui/icons-material/Explore';
import BadgeIcon from '@mui/icons-material/Badge';
import MessageIcon from '@mui/icons-material/Message';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import image30 from "../Images/image30.jpg"
import image31 from "../Images/image31.png"
import Upgrade from "../Images/Upgrade.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [isCollapse , setIsCollapse] = React.useState (false)
const [isCollapseAccount , setIsCollapseAccount] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
 const handelCollapse = () =>{
    setIsCollapse(!isCollapse)
 }
 const handelCollapseAccount = () =>{
    setIsCollapseAccount(!isCollapseAccount)
 }
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box  sx={{ display: 'flex',  }} >
      <CssBaseline />
   
      <AppBar position="fixed" open={open} style={{background:"#fff"}}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography> */}
     
              <button style={{borderRadius:"10px", background:"#F4F4F4", border:"none", paddingTop:"4px", marginLeft:"750px", }}>
              <MessageOutlinedIcon fontSize='14px'/>
                        </button>
                        <button  style={{borderRadius:"10px", background:"#F4F4F4", border:"none", paddingTop:"4px",marginLeft:"10px",}}>
              <NotificationsNoneOutlinedIcon fontSize='14px'/>
                        </button>
                        <div style={{display:"flex", gap:"5px", marginLeft:"30px", }}><div style={{width:"40px", height:"40px", borderRadius:"50%", background:"gray"}}></div><div>
                        <p style={{fontSize:"17px", color:"black",marginTop:"-1px"}}>Shatadal <ArrowDropDownIcon fontSize='14px' /></p>
                        <p  style={{fontSize:"13px", color:"#898B97", marginTop:"-25px"}}>Admin</p>
                        </div>
        </div>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:"#E3E3E5"
          },
          
        }}
        variant="persistent"
        // variant = "temporary"
        // ModelProps = {{keepMounted : true}}
        anchor="left"
        open={open}
      >

        <DrawerHeader>
        <img src={image31} alt='logo'/>

        <img src={image30} alt='logo'/>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon  style={{background:"black"}}/>}
          </IconButton>

        </DrawerHeader>
        <List className='sidebarList'>
          {['Dashboard'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon  className='sidebarListText'>
                  {index % 2 === 0 ? <DashboardIcon /> : <DashboardIcon />}
                </ListItemIcon>
                <Link id='LinkClass'  href={"/dashboard"}><ListItemText className='sidebarListText'  primary={text} /></Link>  
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List  className='sidebarList'>
        <ListItem disablePadding onClick={handelCollapse}>
              <ListItemButton>
                <ListItemIcon className='sidebarListText'>
                  {<FormatListBulletedIcon />}
                </ListItemIcon>
                <ListItemText className='sidebarListText' primary="Listings" />
                {isCollapse ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem> 
            <Collapse in={isCollapse} timeout="auto" unmountOnExit>
          {['Applied Listing', 'Saved Listing', 'Collaboration History'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className='sidebarListText'>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
               <Link  id ="listingSunmenu" href={text}><p> <ListItemText className='sidebarListText' primary={text} /></p> </Link>
              </ListItemButton>
            </ListItem>
          ))}
          </Collapse>
        </List>
        <List  className='sidebarList'>
          {['Campaigns'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className='sidebarListText'>
                  {index % 2 === 0 ? <CampaignIcon /> : <CampaignIcon />}
                </ListItemIcon>
                <Link id='Campaigns'  href={text}><p><ListItemText className='sidebarListText'  primary={text} /> </p></Link>  
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List  className='sidebarList'>
          {['Explore Band Deals'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className='sidebarListText'>
                  {index % 2 === 0 ? <ExploreIcon /> : <ExploreIcon />}
                </ListItemIcon>
                <Link id='Explore_Band_Deals'  href={text}><p><ListItemText className='sidebarListText' primary={text} /> </p></Link>  
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List  className='sidebarList'>
          {['Profile Activity'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className='sidebarListText'>
                  {index % 2 === 0 ? <BadgeIcon /> : <BadgeIcon />}
                </ListItemIcon>
                <Link id='Profile_Activity'  href={text}><p><ListItemText  primary={text}  className='sidebarListText'/> </p></Link>  
              </ListItemButton>
            </ListItem>
          ))}
        </List> 
        <List  className='sidebarList'>
          {['Messages'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className='sidebarListText'>
                  {index % 2 === 0 ? <MessageIcon /> : <MessageIcon />}
                </ListItemIcon>
                <Link id='Messages'  href={text}><p><ListItemText className='sidebarListText'  primary={text} /> </p></Link>  
              </ListItemButton>
            </ListItem>
          ))}
        </List> 
        <List  className='sidebarList'>
          {['Reviews'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className='sidebarListText'>
                  {index % 2 === 0 ? <StarOutlineIcon /> : <StarOutlineIcon />}
                </ListItemIcon>
                <Link id='Reviews'  href={text}><p><ListItemText className='sidebarListText'  primary={text} /> </p></Link>  
              </ListItemButton>
            </ListItem>
          ))}
        </List> 
       
        <List  className='sidebarList'>
        <ListItem disablePadding onClick={handelCollapseAccount}>
              <ListItemButton>
                <ListItemIcon className='sidebarListText'>
                  {<PermIdentityIcon />}
                </ListItemIcon>
                <ListItemText className='sidebarListText' primary="Account Setting" />
                {isCollapseAccount ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem> 
            <Collapse in={isCollapseAccount} timeout="auto" unmountOnExit>
          {/* {['Allmail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
               <Link href={text}> <ListItemText primary={text} /> </Link>
              </ListItemButton>
            </ListItem>
          ))} */}
          </Collapse>
        </List>
        <List  className='sidebarList'>
          {['Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className='sidebarListText'>
                  {index % 2 === 0 ? <LogoutIcon /> : <LogoutIcon />}
                </ListItemIcon>
               <Link id='Logout'  href={text}><p><ListItemText  className='sidebarListText' primary={text} /> </p></Link>  
              </ListItemButton>
            </ListItem>
          ))}
        </List>

       <div style={{marginTop:"10px", padding:"6px"}}>
       <img src={Upgrade} alt='Upgrade'/>
       </div>
      </Drawer>
    <Main open = {open}>
        {children}
    </Main>
    </Box>
  );
}
