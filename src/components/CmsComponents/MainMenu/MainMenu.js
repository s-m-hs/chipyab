import React, { useState, useEffect, useContext } from 'react'
import './MainMenu.css'
import Input1 from '../../InputComponent/Input1/Input1'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { CmsContext } from '../../../context/CmsContext';
import { requiedValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../../Validators/rules'
import DataTable from '../DataTable/DataTable';



export default function MainMenu() {
  const [mMenuArray, setMMenuArray] = useState([])
  const cmsContext = useContext(CmsContext)



  const registerHandler = () => {
    let obj = {
      id: 0,
      text: cmsContext.value1,
      nameCode: cmsContext.value2,
      imageUrl: cmsContext.value3
    }
    async function myAppPost() {

      const res = await fetch(`http://wapi.chipyab.ir/api/CyMenus`, {

        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(obj)
      }).then((res) => {
        console.log(res)
      }).then((result) => {
        console.log(result);
      })
    }
    // myAppPost()
    return cmsContext.setFlagResetInput(true),
      console.log(obj)
  }
  ////////////////////////
  useEffect(() => {
    async function myAppGet() {
      const res = await fetch(`http://wapi.chipyab.ir/api/CyMenus`, {
        method: 'GET',
      }).then(res => res.json()).
        then((result) => {
          console.log(result);
          setMMenuArray(result)
          console.log(mMenuArray);
        })
    }
    // myAppGet()
  }, [cmsContext.value1])


  return (

    <div className='container'>
      <div className='row'>
        <div className='col-12 col-sm-3 mainmenu-col3'>

          <Input1
            value={cmsContext.value1}
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

            value={cmsContext.value2}
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
            value={cmsContext.value3}
            element='input'
            id='imageUrl'
            label='imageUrl '
            type='file'
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
        <div className='col-12 col-sm-9'>

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
                {mMenuArray.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.text} </td>
                    <td>{item.nameCode}</td>
                    <td>{item.imageUrl}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </DataTable>
        </div>
      </div>

    </div>

  )
}
