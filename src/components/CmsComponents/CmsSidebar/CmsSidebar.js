import React, { useContext } from 'react'
import { NavLink,Link } from 'react-router-dom';
import './CmsSidebar.css'
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
import { CmsContext } from '../../../context/CmsContext';


export default function CmsSidebar() {

    const cmsContext=useContext(CmsContext)
    return (
        <div className='cmssidebar-container'>
            <div className="cmssidebar-maindiv">
                <h8 className='cmssidebar-h8'>Dashboard</h8>
                <Link className='cmssidebar-div ' to={'/p-admin'}>
                    <FenceIcon /><span>خانه</span></Link>
                <div className='cmssidebar-div'> <TimelineIcon /><span>آنالیز</span> </div>
                <div className='cmssidebar-div'><TrendingUpIcon /><span>فروش</span> </div>
                <hr />
                <h8 className='cmssidebar-h8'>Quick menu</h8>

                <NavLink className='cmssidebar-div' to={'/userlist'}>
                    <GroupIcon /><span> کاریران</span></NavLink>

                <NavLink className='cmssidebar-div' to={'/cmsnewyouser'}>
                    <PersonIcon /> <span> کاریران جدید</span>
                </NavLink>

                <NavLink className='cmssidebar-div' to={'/products'}>
                   <StorefrontIcon /> <span>محصولات</span> </NavLink>

                <div className='cmssidebar-div'><PaidIcon /> <span>محصولات جدید</span> </div>

                <NavLink className='cmssidebar-div' to={'menu'}> 
                <AssessmentIcon /> <span>دسته بندی</span>
                </NavLink>

                <hr />
                <h8 className='cmssidebar-h8'>Notifications</h8>
                <div className='cmssidebar-div'><EmailOutlinedIcon /><span>ایمیل</span> </div>
                <div className='cmssidebar-div'> <LowPriorityOutlinedIcon /><span>بازخورد</span> </div>
                <div className='cmssidebar-div'><ChatBubbleOutlineOutlinedIcon /><span>پیام ها</span>  </div>
                <hr />
                <h8 className='cmssidebar-h8'>Staff</h8>
                <div className='cmssidebar-div'><ManageAccountsOutlinedIcon /><span>تنظیمات</span> </div>
                <div className='cmssidebar-div'> <MiscellaneousServicesOutlinedIcon /><span>خدمات</span> </div>
                <div className='cmssidebar-div'><InfoOutlinedIcon /><span>درباره </span>  </div>
                <hr />
            </div>

            {/* /////// to control sidemenue on mobileSize */}
           {cmsContext.sideMenueFlag && <div className='sidemenue'>
            <div className="cmssidebar-maindivb">
                <h8 className='cmssidebar-h8'>Dashboard</h8>
                <NavLink className='cmssidebar-div ' to={'/cmshome'}>
                    <FenceIcon /><span>خانه</span></NavLink>
                <div className='cmssidebar-div'> <TimelineIcon /><span>آنالیز</span> </div>
                <div className='cmssidebar-div'><TrendingUpIcon /><span>فروش</span> </div>
                <hr />
                <h8 className='cmssidebar-h8'>Quick menu</h8>

                <NavLink className='cmssidebar-div' to={'/userlist'}>
                    <GroupIcon /><span> کاریران</span></NavLink>

                <NavLink className='cmssidebar-div' to={'/cmsnewyouser'}>
                    <PersonIcon /> <span> کاریران جدید</span>
                </NavLink>

                <NavLink className='cmssidebar-div' to={'/products'}>
                   <StorefrontIcon /> <span>محصولات</span> </NavLink>

                <div className='cmssidebar-div'><PaidIcon /> <span>محصولات جدید</span> </div>
                <div className='cmssidebar-div'><AssessmentIcon /> <span>گزارشات</span> </div>
                <hr />
                <h8 className='cmssidebar-h8'>Notifications</h8>
                <div className='cmssidebar-div'><EmailOutlinedIcon /><span>ایمیل</span> </div>
                <div className='cmssidebar-div'> <LowPriorityOutlinedIcon /><span>بازخورد</span> </div>
                <div className='cmssidebar-div'><ChatBubbleOutlineOutlinedIcon /><span>پیام ها</span>  </div>
                <hr />
                <h8 className='cmssidebar-h8'>Staff</h8>
                <div className='cmssidebar-div'><ManageAccountsOutlinedIcon /><span>تنظیمات</span> </div>
                <div className='cmssidebar-div'> <MiscellaneousServicesOutlinedIcon /><span>خدمات</span> </div>
                <div className='cmssidebar-div'><InfoOutlinedIcon /><span>درباره </span>  </div>
                <hr />
            </div>
            </div>} 
           

        </div>
    )
}
