import React, { useState, useEffect, useContext } from 'react'
import './ItemMenuB.css'
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
import { Link, useParams } from 'react-router-dom';




export default function ItemMenuB() {
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
    const [titleSelectMenuB, setTitleSelectMenuB] = useState('')
    const [rootIdA, setRootIdA] = useState(0)
let arryId=[]
    const cmsContext = useContext(CmsContext)
    const param = useParams()

    console.log(cmsContext.flagResetInput);
    /////////////////////////////
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
 
    /////////////////////////  api Method===>
    const deletHandler = (id) => {
        swalWithBootstrapButtons.fire({
            title: "آیا از حذف اطمینان دارید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر ",
            reverseButtons: true
        }).then((result => {
            if (result.isConfirmed) {
                async function myAppDelet() {
                    const res = await fetch(`http://wapi.chipyab.ir/api/CyMenuItems/${id}`, {
                        method: 'DELETE'
                    }).then(
                        res => console.log(res)
                    ).then(result => {
                        swalWithBootstrapButtons.fire({
                            title: "حذف انجام شد!",
                            icon: "success"
                        }).then(result => {
                            registerGetItem()
                        })
                    })
                }
                myAppDelet()

            } else if (

                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "حذف انجام نشد",
                    icon: "error"
                });
            }
        }))

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
            cyMenuId: idSelect,
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
                    registerGetItem()
                    cmsContext.setFlagResetInput(prev => !prev)
                }
            })
        }
        myAppPost()

    }
    /////////////////////////////
    useEffect(() => {
        registerGetMenu()
        registerGetItem()

    }, [])
    ////////////////////// 
    useEffect(() => {
        setRootIdA(param.id)
// let y=cmsContext.arrayIdParam.filter(item=>item === param.id)
// y.length =0 ? cmsContext.setArrayIdParam(prev=>[...prev,param.id]) : null
        // console.log((mMenuArrayB));
        // console.log(param);
        // console.log(cmsContext.arrayIdParam);
    },
        [param])
    /////////////////////////
    useEffect(() => {
        if (mMenuArrayB) {
            let y = mMenuArrayB.filter(item => item.id == param.id)
            if (y.length != 0) {
                setRootIdA(0)
                setIdSelect(param.id)
                setTitleSelectMenuB(y[0].text)
            }
            else if (itemArrayB.length != 0) {
                let z = itemArrayB.filter(item => item.id == param.id)
                setRootIdA(param.id)
                setIdSelect(z[0].cyMenuId)
                setTitleSelectMenuB(z[0].text)
            }
        }

    })
    return (
        <>
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
{titleSelectMenuB &&    <Button color="secondary">{titleSelectMenuB}</Button>}
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12 col-sm-3 itemmenu-col3'>

                            <>
                   
                                <form>
                                    <Input1
                                        element='input'
                                        label='ItemMenu Title '
                                        id='menuItem'
                                        type='text'
                                        validPropTo={[
                                            requiedValidator(),
                                        ]}
                                    />

                                    <Input1
                                        element='input'
                                        id='itemOrderValue'
                                        label='OrderValue '
                                        type='text'
                                        validPropTo={[
                                            requiedValidator(),
                                        ]}
                                    />

                                    <Input1
                                        element='input'
                                        id='meta'
                                        label='Meta'
                                        type='text'
                                        validPropTo={[
                                            requiedValidator(),

                                        ]}
                                    />
                                    <Input1
                                        element='input'
                                        id='itemPageUrl'
                                        label='PageUrl '
                                        type='file'
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
                        </div>
                        <div className='col-12 col-sm-9'> { titleSelectMenuB  &&  
                            <DataTable   title={`لیست منوی :${titleSelectMenuB}` }>
                           

                                <table className='table table-striped  itemmenu-table'>
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
                                        {itemArrayB && rootIdA == 0 && itemArrayB.filter(item => {
                                            return (item.rootId == 0 && item.cyMenuId == param.id)
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
                                                <td>
                                                    <Link to={`${item.id}`}>
                                                    <button className='btn btn-primary itemmenu-editbut'
                                                    >گروه جدید</button></Link>
                                                    <button className='btn btn-info itemmenu-editbut'
                                                    //    onClick={() => editHandler(item.id, item.text, item.nameCode, item.imageUrl)}
                                                    >ویرایش</button>
                                                    <button className='btn btn-danger itemmenu-deletbut'

                                                        onClick={() => deletHandler(item.id)}
                                                    >حذف</button>
                                                </td>
                                            </tr>
                                        )))}




                                        {itemArrayB && itemArrayB.filter(item => {
                                            return (item.rootId == param.id)
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
                                                <td>
                                                    <Link to={`${item.id}`}>add</Link>

                                                    <button className='btn btn-info itemmenu-editbut'
                                                    //    onClick={() => editHandler(item.id, item.text, item.nameCode, item.imageUrl)}
                                                    >ویرایش</button>
                                                    <button className='btn btn-danger itemmenu-deletbut'

                                                        onClick={() => deletHandler(item.id)}
                                                    >حذف</button>
                                                </td>
                                            </tr>
                                        )))}
                                    </tbody>

                                </table>

                            </DataTable>}

                        </div>
                    </div>


                </div>
            </ItemContext.Provider>


        </>

    )
}
