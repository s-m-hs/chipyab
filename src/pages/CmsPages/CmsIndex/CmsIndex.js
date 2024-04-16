import React, { useContext, useEffect } from 'react'
import './CmsIndex.css'
import CmsHeader from '../../../components/CmsComponents/CmsHeader/CmsHeader';
import CmsSidebar from '../../../components/CmsComponents/CmsSidebar/CmsSidebar';
import { CmsContext } from '../../../context/CmsContext';
import {Outlet} from 'react-router-dom'

export default function CmsIndex() {
    const cmsContext=useContext(CmsContext)



    useEffect(()=>{   ///<<< to control sidemenue on mobileSize
        cmsContext.setSideMenueFlag(false)
    },[])
    
    
      return (

        <>
         <div className="cms-container">

                <CmsHeader/>

<div className="container app-container">
  <div className="row">
    <div className="col col-1 col-md-2"><CmsSidebar/></div>
    <div className="col col-10 col-md-10">
   
    <Outlet/>


     </div>
  </div>
</div>
         </div>
  
        
         
        </>
       
      )
}
