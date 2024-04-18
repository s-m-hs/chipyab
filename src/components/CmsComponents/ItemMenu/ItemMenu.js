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



export default function ItemMenu() {

    const registerHandler = () => { }


    return (
        <div className='container'>
            <div className='row row-cols-4 itemmenu-select-row'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl
                    autoWidth
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
                            <option value={10}>منوی الف</option>
                            <option value={20}>منوی ب</option>
                            <option value={30}>منوی ج</option>
                        </NativeSelect>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl
                    autoWidth
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
                <div className='col-3 itemmenu-col3'>

                    <Input1
                        element='input'
                        label='ItemMeni Title '
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
                        label='orderValue '
                        type='text'
                        validPropTo={[
                            requiedValidator(),
                            minValidator(2),
                        ]}
                    />
                    <Input1
                        element='input'
                        id='imageUrl'
                        label='PageUrl '
                        type='text'
                        validPropTo={[
                            requiedValidator(),

                        ]}
                    />
                    <Input1
                        element='input'
                        id='imageUrl'
                        label='RootId '
                        type='text'
                        validPropTo={[
                            requiedValidator(),

                        ]}
                    />
                    <Input1
                        element='input'
                        id='imageUrl'
                        label='MainMenuId '
                        type='text'
                        validPropTo={[
                            requiedValidator(),

                        ]}
                    />
                    <Input1
                        element='input'
                        id='imageUrl'
                        label='Meta '
                        type='text'
                        validPropTo={[
                            requiedValidator(),

                        ]}
                    />
                    <Input1
                        element='input'
                        id='imageUrl'
                        label='ImageUrl '
                        type='text'
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
