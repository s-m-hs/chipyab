import React from 'react'
import './CmsMenu.css'
import MainMenu from '../../../components/CmsComponents/MainMenu/MainMenu'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function CmsMenu() {


  return (
    <div className='container'>
        <>
     
        <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
     
    >
      <Tab eventKey="home" title="منوی اصلی" style={{background:'inherit'}}>
        
      <MainMenu/>  
      </Tab>
      <Tab eventKey="profile" title="منو آیتم ها">
      </Tab>
      <Tab eventKey="longer-tab" title=" نمایش منوها">
      </Tab>
      
    </Tabs>

        </>


    </div>
  )
}
