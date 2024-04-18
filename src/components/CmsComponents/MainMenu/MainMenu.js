import React, { useState,useEffect,useContext } from 'react'
import './MainMenu.css'
import Input1 from '../../InputComponent/Input1/Input1'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { CmsContext } from '../../../context/CmsContext';
import { requiedValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../../Validators/rules'
import DataTable from '../DataTable/DataTable';



export default function MainMenu() {
  const cmsContext = useContext(CmsContext)
 let obj={
    "id": 0,
    "text": `${cmsContext.value1}`,
    "nameCode": `${cmsContext.value2}`,
    "imageUrl": `${cmsContext.value3}`
  }
  console.log(obj)
const registerHandler=()=>{
   console.log(cmsContext.value1)
  console.log(cmsContext.value2)

  // let obj={
  //   "id": 0,
  //   "text": `${cmsContext.value1}`,
  //   "nameCode": `${cmsContext.value1}`,
  //   "imageUrl": `${cmsContext.value1}`
  // }
  let obj={
    id:0,
    text:"ese",
    nameCode:"ssr",
    imageUrl:"tddd"
  }
  async function myApp(){
    const res=await fetch(`http://wapi.chipyab.ir/api/CyMenus`,{
      mode: 'no-cors',
      method:'POST',
      headers :{
        //  "accept":  "text/plain",
        "Content-Type":"application/json",
    
      },
      
      body:JSON.stringify(obj)
    }).then(res=>console.log(res))
  }

  
  // myApp()
  console.log(JSON.stringify(obj))
  console.log(obj)
}


  return (

    <div className='container'>
      <div className='row'>
        <div className='col-3 mainmenu-col3'>

          <Input1
            element='input'
            label='عنوان منو'
            id='nameMenu'
            type='text'
            validPropTo={[
              requiedValidator(),
              minValidator(2),
            ]}
          />

          <Input1
            element='input'
            id='nameCode'
            label='کد منو'
            type='text'
            validPropTo={[
              requiedValidator(),
              minValidator(2),
            ]}
          />
          <Input1
            element='input'
            id='imageUrl'
            label='imageUrl '
            type='text'
            validPropTo={[
              requiedValidator(),

            ]}
          />
          <Button className='mainmenu-regbutton' type='submit' fullWidth
            variant="contained" 
            endIcon={<SendIcon />}
            onClick={registerHandler}
            >
            <span>
              Register
            </span>
          </Button>





        </div>
        
         <div className='col-9'>

      <DataTable title={'لیست منوها :'}>

<table className='table table-striped'>
<thead>
  <tr>
    <th>شماره</th>
    <th>نام منوی </th>
    <th>کد منو</th>
    <th>ID</th>
  </tr>
</thead>

<tbody>
<tr>
  <td>1</td>
  <td>منوی الف</td>
  <td>m1</td>
  <td>1</td>
</tr>

<tr>
  <td>1</td>
  <td>منوی الف</td>
  <td>m1</td>
  <td>1</td>
</tr>

<tr>
  <td>1</td>
  <td>منوی الف</td>
  <td>m1</td>
  <td>1</td>
</tr>
</tbody>

</table>

      </DataTable>
      </div>
        </div>
     
    </div>

  )
}
