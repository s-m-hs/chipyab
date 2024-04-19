import React, { useEffect, useState } from 'react'
import './CmsIndex.css'
import CmsHeader from '../../../components/CmsComponents/CmsHeader/CmsHeader';
import CmsSidebar from '../../../components/CmsComponents/CmsSidebar/CmsSidebar';
import { CmsContext } from '../../../context/CmsContext';
import { Outlet } from 'react-router-dom'


export default function CmsIndex() {
  const [isValid,setIsValid]=useState(false)
  const [flagResetInput,setFlagResetInput]=useState(false)
  const [ sideMenueFlag,setSideMenueFlag]=useState(false)
  const [flagClass, setFlagClass] = useState(true)
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [flag1, setFlag1] = useState('')
  const [flag2, setFlag2] = useState('')
  const [flag3, setFlag3] = useState('')




  // useEffect(() => {   ///<<< to control sidemenue on mobileSize
  //  if(sideMenueFlag){
  //   setSideMenueFlag(false)
  //  } 
  // },[])


  return (

    <>
      <CmsContext.Provider value={{
        isValid,setIsValid,
        flagResetInput,setFlagResetInput,
       sideMenueFlag,setSideMenueFlag,
        flagClass, setFlagClass,
        value1, setValue1,
        value2, setValue2,
        value3, setValue3,
        flag1, setFlag1,
        flag2, setFlag2,
        flag3, setFlag3,
      }}>
        <div className="cms-container">

          <CmsHeader />

          <div className="container app-container">
            <div className="row">
              <div className="col col-1 col-md-2"><CmsSidebar /></div>
              <div className="col col-10 col-md-10">
                <div className={flagClass ? 'cmsindex-maincontainer-div' : 'cmsindex-maincontainer-div-hidden'}   >
                  <h4>خانه</h4>
                </div>

                <Outlet />


              </div>
            </div>
          </div>
        </div>

      </CmsContext.Provider>




    </>

  )
}
