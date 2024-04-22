import React, { useState, useEffect, useContext } from 'react'
import './ItemMenu.css'
import Input1 from '../../InputComponent/Input1/Input1'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { CmsContext } from '../../../context/CmsContext';
import { MainMenuContext } from '../../../context/CmsMaimMenuContext';
import { ItemContext } from '../../../context/CmsMaimMenuContext';
import { requiedValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../../Validators/rules'
import DataTable from '../DataTable/DataTable';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Swal from 'sweetalert2'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



export default function ItemMenu() {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    const [value5, setValue5] = useState('')
    const [value6, setValue6] = useState('')
    const [flag1, setFlag1] = useState('')
    const [flag2, setFlag2] = useState('')
    const [flag3, setFlag3] = useState('')
    const [flag4, setFlag4] = useState('')
    const [flag5, setFlag5] = useState('')
    const [flag6, setFlag6] = useState('')
    const [flag, setFlag] = useState(false)
    const [mMenuArrayB, setMMenuArrayB] = useState([])
    const [itemArrayB, setItemArrayB] = useState([])
    const [idSelect, setIdSelect] = useState('')
    const [idSelectMenu, setIdSelectMenu] = useState('')
    const [idSelectMenuB, setIdSelectMenuB] = useState('')
    const [titleSelectMenu, setTitleSelectMenu] = useState('')
    const [rootIdA, setRootIdA] = useState(0)





    const mainMenuContext = useContext(MainMenuContext)

    //////////////////////////////
    const handleChange = (event) => {
        console.log(event.target.value);
        setRootIdA(0)
        setIdSelectMenu(event.target.value[0])
        let x = mMenuArrayB.filter(item => item.id == idSelectMenu)
        console.log(x)
        if (x.length != 0) {
            setTitleSelectMenu(x[0].text)
            setFlag(prev => !prev)
        }
    };
    ////////////////////////
    const handleChangeB = (event) => {
        setRootIdA(event.target.value)
        setIdSelectMenuB(event.target.value)
    }

    ////////////////////////
    const registerGetMenu = () => {
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
    const registerGetItem = () => {
        async function myAppGet() {
            const res = await fetch(`http://wapi.chipyab.ir/api/CyMenuItems`, {
                method: 'GET',
            }).then(res => res.json()).
                then((result) => {

                    setItemArrayB(result)
                    console.log(itemArrayB)
                })
        }
        myAppGet()
    }
    //////////////////////////
    const registerHandler = (e) => {
        e.preventDefault()
        let obj = {
            id: 0,
            text: value1,
            orderValue: value2,
            pageUrl: value3,
            rootId: rootIdA,
            cyMenuId: idSelectMenu,
            meta: value5,
            imageUrl: value6
        }
        async function myAppPost() {
            console.log(obj)
            const res = await fetch(`http://wapi.chipyab.ir/api/CyMenuItems`, {
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
                        title: "آیتم با موفقیت اضافه شد",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    // registerGet()
                    mainMenuContext.setFlagResetInput(prev => !prev)

                }
            })
        }
        myAppPost()

    }
    //////////////////////
    useEffect(() => {
        registerGetMenu()
        registerGetItem()
    }, [mainMenuContext.flagResetInput, mainMenuContext.tabId])
    ///////////////////////
    useEffect(() => {
        console.log(titleSelectMenu);
    }, [flag])

    return (
        <ItemContext.Provider value={{

            value1, setValue1,
            value2, setValue2,
            value3, setValue3,
            value4, setValue4,
            value5, setValue5,
            value6, setValue6,
            flag1, setFlag1,
            flag2, setFlag2,
            flag3, setFlag3,
            flag4, setFlag4,
            flag5, setFlag5,
            flag6, setFlag6,
        }}>

            <div className='container'>
                <div className='row row-cols-4 itemmenu-select-row'>



                    <Box sx={{ minWidth: 150 }}>
                        <FormControl fullWidth

                        >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                منوی سرگروه
                            </InputLabel>
                            <NativeSelect
                                defaultValue=''
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                                onChange={handleChange}  >
                                <option value=''> </option>
                                {mMenuArrayB && mMenuArrayB.map(((item, index) => (
                                    <option key={item.id} value={item.id} > {item.text}</option>
                                )))}
                            </NativeSelect>
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 150 }}>
                        <FormControl fullWidth

                        >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                منوی اصلی                             </InputLabel>
                            <NativeSelect

                                defaultValue=''
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                    'aria-label': 'Without label'
                                }}
                                onChange={handleChangeB}
                            > <option value=''> </option>
                                {itemArrayB && itemArrayB.filter(item => {
                                    return (item.cyMenuId == idSelectMenu && item.rootId == 0)
                                }).map(((item, index) => (
                                    <option key={item.id} value={item.id}  > {item.text}</option>
                                )))}
                            </NativeSelect>
                        </FormControl>
                    </Box>


                    <Box sx={{ minWidth: 150 }}>
                        <FormControl fullWidth

                        >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                منوی فرعی                             </InputLabel>
                            <NativeSelect

                                defaultValue=''
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                    'aria-label': 'Without label'
                                }}
                            // onChange={handleChangeC}
                            > <option value=''> </option>
                                {itemArrayB && itemArrayB.filter(item => {
                                    console.log(item);
                                    return (item.cyMenuId == idSelectMenu && item.rootId !== 0 && item.rootId == rootIdA)
                                }).map(((item, index) => (
                                    <option key={item.id} value={item.id}  > {item.text}</option>
                                )))}
                            </NativeSelect>
                        </FormControl>
                    </Box>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-sm-3 itemmenu-col3'>
                        {mainMenuContext.tabId === 'profile' &&
                            <>
                                {/* <h1>{titleSelectMenu}</h1> */}
                                <h1>{idSelectMenu}</h1>
                                <h2>{rootIdA}</h2>
                                <form>
                                    <Input1
                                        // value={cmsContextB.value1}
                                        element='input'
                                        label='ItemMenu Title '
                                        id='menuItem'
                                        type='text'
                                        validPropTo={[
                                            requiedValidator(),
                                        ]}
                                    />

                                    <Input1
                                        // value={cmsContextB.value2}
                                        element='input'
                                        id='itemOrderValue'
                                        label='OrderValue '
                                        type='text'
                                        validPropTo={[
                                            requiedValidator(),
                                        ]}
                                    />
                                    <Input1
                                        // value={cmsContextB.value3}
                                        element='input'
                                        id='itemPageUrl'
                                        label='PageUrl '
                                        type='text'
                                        validPropTo={[
                                            requiedValidator(),

                                        ]}
                                    />
                                    <Input1
                                        // value={cmsContextB.value4}
                                        element='input'
                                        id='mainMenuid'
                                        label='RootId '
                                        type='text'
                                        validPropTo={[
                                            requiedValidator(),

                                        ]}
                                    />
                                    <Input1
                                        // value={cmsContextB.value5}
                                        element='input'
                                        id='meta'
                                        label='Meta'
                                        type='text'
                                        validPropTo={[
                                            requiedValidator(),

                                        ]}
                                    />
                                    <Input1
                                        s element='input'
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
                            </>
                        }
                    </div>
                    <div className='col-12 col-sm-9'>
                        <DataTable title={'لیست منوی اصلی :'}>

                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>شماره</th>
                                        <th>نام منوی </th>
                                        <th>اولویت</th>
                                        <th>زیرگروه</th>
                                        <th>متا</th>
                                        <th>ID</th>
                                        <th>PageUrl</th>
                                        <th>ImageUrl</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {itemArrayB && itemArrayB.filter(item => {
                                        return (item.cyMenuId == idSelectMenu && item.rootId == 0)
                                    }).map(((item, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td> {item.text}</td>
                                            <td>{item.orderValue}</td>
                                            <td>{item.rootId}</td>
                                            <td>{item.meta}</td>
                                            <td>{item.id}</td>
                                            <td>{item.pageUrl}</td>
                                            <td>{item.imageUrl}</td>
                                        </tr>
                                    )))}
                                </tbody>

                            </table>

                        </DataTable>

                        <DataTable title={'لیست منوی فرعی :'}>

                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>شماره</th>
                                        <th>نام منوی </th>
                                        <th>اولویت</th>
                                        <th>زیرگروه</th>
                                        <th>متا</th>
                                        <th>ID</th>
                                        <th>PageUrl</th>
                                        <th>ImageUrl</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {itemArrayB && itemArrayB.filter(item => {
                                        console.log(item);
                                        return (item.cyMenuId == idSelectMenu && item.rootId !== 0 && item.rootId == rootIdA)
                                    }).map(((item, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td> {item.text}</td>
                                            <td>{item.orderValue}</td>
                                            <td>{item.rootId}</td>
                                            <td>{item.meta}</td>
                                            <td>{item.id}</td>
                                            <td>{item.pageUrl}</td>
                                            <td>{item.imageUrl}</td>
                                        </tr>)))}

                                </tbody>

                            </table>

                        </DataTable>
                    </div>
                </div>


            </div>
        </ItemContext.Provider>




    )
}
