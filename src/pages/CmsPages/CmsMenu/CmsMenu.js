import React, { useContext, useEffect } from 'react'
import './CmsMenu.css'
import MainMenu from '../../../components/CmsComponents/MainMenu/MainMenu'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ItemMenu from '../../../components/CmsComponents/ItemMenu/ItemMenu';
import { CmsContext } from '../../../context/CmsContext';


export default function CmsMenu() {
  const cmsContext=useContext(CmsContext)

  useEffect(()=>{
    cmsContext.setFlagClass(false)
     return()=>cmsContext.setFlagClass(true)
  },[])

  return (
    <div className='container'>
        <>
     
        <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-2"
      // fill
     
    >
      <Tab eventKey="home" title="منوی اصلی" style={{background:'inherit'}}>
        
      <MainMenu/>  
      </Tab>


      <Tab eventKey="profile" title="منو آیتم ها" style={{background:'inherit'}}>
        <ItemMenu/>
      </Tab>


      <Tab eventKey="longer-tab" title=" نمایش منوها">
      </Tab>
      
    </Tabs>

        </>


    </div>
  )
}
