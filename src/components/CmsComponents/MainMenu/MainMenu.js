import React, { useState, useEffect, useContext } from 'react'
import './MainMenu.css'
import Input1 from '../../InputComponent/Input1/Input1'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {MenuContext} from '../../../context/CmsMaimMenuContext';
import {MainMenuContext} from '../../../context/CmsMaimMenuContext';
import { requiedValidator, minValidator } from '../../../Validators/rules'
import DataTable from '../DataTable/DataTable';
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';

export default function MainMenu() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [flag1, setFlag1] = useState('')
  const [flag2, setFlag2] = useState('')
  const [flag3, setFlag3] = useState('')
  const [mMenuArray, setMMenuArray] = useState([])
  const [putValue1, setPutValue1] = useState('')
  const [putValue2, setPutValue2] = useState('')
  const [putValue3, setPutValue3] = useState('')
  const [putId, setPutId] = useState('')

  const mainMenuContext = useContext(MainMenuContext)


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // cmsContext.setFlagResetInput(true)
  }
  //////////////////////
  const changeInputHandlerA = (e) => {
    setPutValue1(e.target.value)
  }
  const changeInputHandlerB = (e) => {
    setPutValue2(e.target.value)
  }
  const changeInputHandlerC = (e) => {
    setPutValue3(e.target.value)
  }
  /////////////////////////

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  ////////////////////////////
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
          const res = await fetch(`http://wapi.chipyab.ir/api/CyMenus/${id}`, {
            method: 'DELETE'
          }).then(
            res => console.log(res)
          ).then(result => {
            swalWithBootstrapButtons.fire({
              title: "حذف انجام شد!",
              icon: "success"
            }).then(result => {
              registerGet()
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
  ////////////////////////////button on table ==>
  const editHandler = (id, text, mcode, url) => {
    handleShow()
    setPutValue1(text)
    setPutValue2(mcode)
    setPutValue3(url)
    setPutId(id)
  }

  const editHandlerA = () => {
    let obj = {
      id: putId,
      text: putValue1,
      nameCode: putValue2,
      imageUrl: putValue3
    }
    async function myAppPut() {
      const res = await fetch(`http://wapi.chipyab.ir/api/CyMenus/${putId}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
      }).then(res => {
        if (res.ok) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "منو با موفقیت ویرایش شد",
            showConfirmButton: false,
            timer: 1000,
          }).then(result => {
            registerGet()
            handleClose()
          })

        }
      })
    }
    myAppPut()
  }


  //////////////////////////
  const registerGet = () => {
    async function myAppGet() {
      const res = await fetch(`http://wapi.chipyab.ir/api/CyMenus`, {
        method: 'GET',
      }).then(res => res.json()).
        then((result) => {
          setMMenuArray(result)
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
      nameCode: value2,
      imageUrl: value3
    }
    console.log(obj)
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
          registerGet()
          mainMenuContext.setFlagResetInput(prev=>!prev)
         }
      })
    }
    myAppPost()


  }
  //////////////////////
  useEffect(() => { 
    registerGet()
  }, [value1])
  ///////////////////
  useEffect(() => {
    mainMenuContext.setTabId('home')

  }, [])

  return (

<MenuContext.Provider value={{
      value1, setValue1,
      value2, setValue2,
      value3, setValue3,
      flag1, setFlag1,
      flag2, setFlag2,
      flag3, setFlag3,
}}>

     <div className='container'>
      <div className='row'>
        <div className='col-12 col-sm-3 mainmenu-col3'>
          {mainMenuContext.tabId === 'home' &&


            <>

              <form action="">
                <Input1
                  // value={value1}
                  element='input'
                  label='MenuTitle'
                  id='nameMenu'
                  type='text'
                  validPropTo={[
                    requiedValidator(),
                    minValidator(2),
                  ]}
                />
                <Input1
                  // value={value2}
                  element='input'
                  id='menuCode'
                  label='MenuCode'
                  type='text'
                  validPropTo={[
                    requiedValidator(),
                    minValidator(2),
                  ]}
                />
                <Input1
                  // value={value3}
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
                    افزودن
                  </span>
                </Button>
              </form>



            </>
          }
          {/* } */}



        </div>
        <div className='col-12 col-sm-9'>
          <DataTable title={'لیست منوها :'}>
            <table className='table table-striped  mainmenu-table'>
              <thead>
                <tr>
                  <th>شماره</th>
                  <th>نام منوی </th>
                  <th>کد منو</th>
                  <th>imageUrl</th>
                  <th>ID</th>
                  <th>ویرایش/حذف</th>
                </tr>
              </thead>
              <tbody>
                {mMenuArray.map((item, index) => (
                  <tr key={item.id} v>
                    <td>{index + 1}</td>
                    <td>{item.text} </td>
                    <td>{item.nameCode}</td>
                    <td>{item.imageUrl}</td>
                    <td>{item.id}</td>
                    <td>
                      <button className='btn btn-info mainmenu-editbut' onClick={() => editHandler(item.id, item.text, item.nameCode, item.imageUrl)} >ویرایش</button>
                      <button className='btn btn-danger mainmenu-deletbut' onClick={() => deletHandler(item.id)} >حذف</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
        </div>
      </div>
      <>

        {/* put Modal ===>>> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className=' mainmenu-modal'>
              <div className="login-label-float">
                <input
                  type='text'
                  value={putValue1}
                  onChange={changeInputHandlerA} />
                <label htmlFor=""> MenuTitle</label>
              </div>
              <div className="login-label-float">
                <input
                  type='text'
                  value={putValue2}
                  onChange={changeInputHandlerB} />
                <label htmlFor=""> MenuCode</label>
              </div>
              <div className="login-label-float">
                <input
                  type='text'
                  value={putValue3}
                  onChange={changeInputHandlerC} />
                <label htmlFor="">  ImageUrl </label>
              </div>
              <Button className='mainmenu-regbutton' type='submit' fullWidth
                variant="contained"
                color='info'
                onClick={editHandlerA}
              >
                <span>
                  ویرایش
                </span>
              </Button>

            </div>

          </Modal.Body>
        </Modal>
      </>
    </div>

</MenuContext.Provider>

 
  )
}
