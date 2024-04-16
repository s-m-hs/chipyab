
import React ,{useState} from 'react';
import './App.css'
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { CmsContext } from './context/CmsContext';


export default function App() {
  const[sideMenueFlag,setSideMenueFlag]=useState(false)

let router=useRoutes(routes)


  return (
    <>
    <CmsContext.Provider  value={{
  sideMenueFlag,setSideMenueFlag   ///<<< to control sidemenue on mobileSize
}}>
<div className='App' >

  {router}



</div>

</CmsContext.Provider>


    </>


  )

}


