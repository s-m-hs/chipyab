import React from 'react'
import './CmsSidebar.css'
import { NavLink, Link } from 'react-router-dom';
import FenceIcon from '@mui/icons-material/Fence';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LowPriorityOutlinedIcon from '@mui/icons-material/LowPriorityOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function CmsSidebarContent() {
  return (
    <>
     <h6 className='cmssidebar-h6'>Dashboard</h6>
                <Link className='cmssidebar-div ' to={'/p-admin'} >
                    <FenceIcon /><span >خانه</span></Link>
                <div className='cmssidebar-div'> <TimelineIcon /><span>آنالیز</span> </div>
                <div className='cmssidebar-div'><TrendingUpIcon /><span>فروش</span> </div>
                <hr />
                <h6 className='cmssidebar-h6'>Quick menu</h6>

                <NavLink className='cmssidebar-div' to={'/userlist'}>
                    <GroupIcon /><span> کاریران</span></NavLink>

                <NavLink className='cmssidebar-div' to={'/cmsnewyouser'}>
                    <PersonIcon /> <span> کاریران جدید</span>
                </NavLink>

                <NavLink className='cmssidebar-div' to={'/products'}>
                    <StorefrontIcon /> <span>محصولات</span> </NavLink>

                <div className='cmssidebar-div'><PaidIcon /> <span>محصولات جدید</span> </div>

                <NavLink className='cmssidebar-div' to={'menu'} >
                    <AssessmentIcon /> <span  >دسته بندی</span>
                </NavLink>

                <hr />
                <h6 className='cmssidebar-h6'>Notifications</h6>
                <div className='cmssidebar-div'><EmailOutlinedIcon /><span>ایمیل</span> </div>
                <div className='cmssidebar-div'> <LowPriorityOutlinedIcon /><span>بازخورد</span> </div>
                <div className='cmssidebar-div'><ChatBubbleOutlineOutlinedIcon /><span>پیام ها</span>  </div>
                <hr />
                <h6 className='cmssidebar-h6'>Staff</h6>
                <div className='cmssidebar-div'><ManageAccountsOutlinedIcon /><span>تنظیمات</span> </div>
                <div className='cmssidebar-div'> <MiscellaneousServicesOutlinedIcon /><span>خدمات</span> </div>
                <div className='cmssidebar-div'><InfoOutlinedIcon /><span>درباره </span>  </div>
                <hr />
    
    </>
  )
}
