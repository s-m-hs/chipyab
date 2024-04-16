import React ,{useContext, useEffect,useState}from 'react'
import './CmsHeader.css'
import GridViewIcon from '@mui/icons-material/GridView';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
import { CmsContext } from '../../../context/CmsContext';
import MenuIcon from '@mui/icons-material/Menu';



export default function CmsHeader() {
  const[flagThem,setFlagThem]=useState(false)
  const cmsContext=useContext(CmsContext)

  const sideMenueHandler=()=>{  ///<<< to control sidemenue on mobileSize   
    cmsContext.setSideMenueFlag(prev=>!prev)
    console.log(cmsContext.sideMenueFlag);
  }

  const changeTheme=()=>{
    setFlagThem(prev=>!prev)
    }
  
  
    useEffect(()=>{
  if(flagThem){
      document.documentElement.style.setProperty('--white','#464646')
    document.documentElement.style.setProperty('--white1','#2e2e2e')
    document.documentElement.style.setProperty('--gray3','#9b9b9b')
    document.documentElement.style.setProperty('--white2','#d6d6d6')
  }else{
    document.documentElement.style.setProperty('--white','#ffffff')
    document.documentElement.style.setProperty('--white1','#fafaff')
    document.documentElement.style.setProperty('--gray3','#555')
    document.documentElement.style.setProperty('--white2','#ffffff')
  }
    },[flagThem])

  return (
    <div className='container cmsheader-container'>
        <div className="row cmsheader-row">
            <div className="col col-6 cmsheader-col1">
            <h4 className='cmsheader-gridviewIcon'><GridViewIcon/>پنل مدیریت </h4>

            </div>
            <div className="col col-1 col-sm-2 cmsheader-col2"></div>
            <div className="col cmsheader-col3 cmsheader-col3">
<button  className='cmsheader-sidemenue-button' onClick={sideMenueHandler}><MenuIcon/></button>
            <div className='cmsheader-div'><NotificationsIcon /> <span className='cmsheader-span' >2</span></div>
          <div className='cmsheader-div'>   <LanguageIcon /> <span className='cmsheader-span' >2</span></div>
          <SettingsIcon className='cmsheader-icon' />
          <button className='cmsheader-icon' onClick={changeTheme}><LightModeIcon/></button>
          <Avatar sx={{ width: 30, height: 30 }} className='cmsheader-icon' alt="Travis Howard" src="/images/images 3.jpg" />
            </div>
        </div>
    </div>
  )
}




