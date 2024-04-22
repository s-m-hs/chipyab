import React, { useContext, useEffect, useState } from 'react'
import './CmsMenu.css'
import MainMenu from '../../../components/CmsComponents/MainMenu/MainMenu'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ItemMenu from '../../../components/CmsComponents/ItemMenu/ItemMenu';
import MainShow from '../../../components/CmsComponents/MainShow/MainShow';
import { CmsContext } from '../../../context/CmsContext';
import { MainMenuContext } from '../../../context/CmsMaimMenuContext';

export default function CmsMenu() {
  const [flagResetInput, setFlagResetInput] = useState(false)
const [tabId,setTabId]=useState('')

  const cmsContext = useContext(CmsContext)

  useEffect(() => {
    cmsContext.setFlagClass(false)
    cmsContext.setSideMenueFlag(false)
    return () => cmsContext.setFlagClass(true)
  }, [])

  const ffc=(tabName)=>{
    cmsContext.setFlagResetInput(true)
    console.log('ffc')
    setTabId(tabName)
  }
    return (
<MainMenuContext.Provider  value={{
    flagResetInput, setFlagResetInput,
tabId,setTabId
}}>
      <div className='container'>
      <>

        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-2"
        // fill
        onSelect={ffc}
        // onClick={()=>ffc(id)}
        >
          <Tab eventKey="home" title="منوی اصلی" style={{ background: 'inherit' }}>

            <MainMenu />
          </Tab>


          <Tab eventKey="profile" title="منو آیتم ها" style={{ background: 'inherit' }} >
            <ItemMenu />
          </Tab>

         
          <Tab eventKey="longer-tab" title=" نمایش منوها" style={{ background: 'inherit' }}>
             <MainShow/>
          </Tab>

        </Tabs>

      </>


    </div>
</MainMenuContext.Provider>




  )
}
