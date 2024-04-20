import React, { useState, useEffect, useContext } from 'react'
import './ItemMenu.css'
import Input1 from '../../InputComponent/Input1/Input1'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { CmsContext } from '../../../context/CmsContext';
import { requiedValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../../Validators/rules'
import DataTable from '../DataTable/DataTable';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Swal from 'sweetalert2'




export default function ItemMenu() {
    const [mMenuArrayB, setMMenuArrayB] = useState([])

    const cmsContext=useContext(CmsContext)

     //////////////////////////
     const registerGet = () => {
        async function myAppGet() {
          const res = await fetch(`http://wapi.chipyab.ir/api/CyMenus`, {
            method: 'GET',
          }).then(res => res.json()).
            then((result) => {
              setMMenuArrayB(result)
            })
        }
        myAppGet()
      }
  //////////////////////////
    const registerHandler = (e) => {
        e.preventDefault()
        let obj = {
            id: 0,
            text: cmsContext.value1,
            orderValue: cmsContext.value2,
            pageUrl: cmsContext.value3,
            rootId: cmsContext.value4,
            cyMenuId: 0,
            meta:cmsContext.value5,
            imageUrl:cmsContext.value6
          }
          async function myAppPost() {
            const res = await fetch(`http://wapi.chipyab.ir/api/CyMenus`, {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(obj)
            }).then((res) => {
              console.log(res.json())
              if (res.ok) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "منو با موفقیت اضافه شد",
                  showConfirmButton: false,
                  timer: 1500,
                });
      }
            })
          }
        //   myAppPost()
          return cmsContext.setFlagResetInput(true)
     }
  //////////////////////
  useEffect(() => {
    registerGet()
  }, [cmsContext.flagResetInput, cmsContext.value1])


    return (
        <div className='container'>
            <div className='row row-cols-4 itemmenu-select-row'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl

                    >
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            منوی اصلی
                        </InputLabel>
                        <NativeSelect
                            defaultValue=''
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        > <option value=''> </option>
                        {mMenuArrayB &&  mMenuArrayB.map(((item,index)=>(
                            <option key={item.id} value={index+1}> {item.text}</option>
                        )))}
                            
                            {/* <option value={20}>منوی ب</option>
                            <option value={30}>منوی ج</option> */}
                        </NativeSelect>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl

                    >
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            منوی فرعی                             </InputLabel>
                        <NativeSelect
                            defaultValue=''
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        > <option value=''> </option>
                            <option value={10}>آتم منوی الف</option>
                            <option value={20}>آیتم منوی ب</option>
                            <option value={30}>آیتم منوی ج</option>
                        </NativeSelect>
                    </FormControl>
                </Box>

            </div>

            <div className='row mt-3'>
                <div className='col-12 col-sm-3 itemmenu-col3'>
<form>
      <Input1
                    value={cmsContext.value1}
                        element='input'
                        label='ItemMenu Title '
                        id='menuItem'
                        type='text'
                        validPropTo={[
                            requiedValidator(),
                        ]}
                    />

                    <Input1
                     value={cmsContext.value2}
                        element='input'
                        id='itemOrderValue'
                        label='OrderValue '
                        type='text'
                        validPropTo={[
                            requiedValidator(),
                        ]}
                    />
                    <Input1
                     value={cmsContext.value3}
                        element='input'
                        id='itemPageUrl'
                        label='PageUrl '
                        type='text'
                        validPropTo={[
                            requiedValidator(),

                        ]}
                    />
                    <Input1
                     value={cmsContext.value4}
                        element='input'
                        id='mainMenuid'
                        label='RootId '
                        type='text'
                        validPropTo={[
                            requiedValidator(),

                        ]}
                    />
                    <Input1
                     value={cmsContext.value5}
                        element='input'
                        id='meta'
                        label='Meta'
                        type='text'
                        validPropTo={[
                            requiedValidator(),

                        ]}
                    />
                    <Input1
                     value={cmsContext.value6}
                        element='input'
                        id='itemImageUrl'
                        label='ImageUrl '
                        type='file'
                        validPropTo={[
                            requiedValidator(),

                        ]}
                    />
                    <Button className='itemmenu-regbutton' type='submit' fullWidth
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={registerHandler}
                    >
                        <span>
                            افزودن
                        </span>
                    </Button>
</form>
                  
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
