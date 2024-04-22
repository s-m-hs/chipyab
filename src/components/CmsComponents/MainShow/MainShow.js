import React, {useState, useEffect , useContext} from 'react'
import './MainShow.css'
import DataTable from '../DataTable/DataTable'
import { MainMenuContext } from '../../../context/CmsMaimMenuContext';




export default function MainShow() {
  const [mMenuArray, setMMenuArray] = useState([])
  const [itemMenuArray, setitemMenuArray] = useState([])
  const [itemMenuArrayB, setitemMenuArrayB] = useState([])

  const mainMenuContext = useContext(MainMenuContext)

//////////////////////// to get mainMenu
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
///////////////////////////
const registerGetMenu = () => {
  async function myAppGet() {
      const res = await fetch(`http://wapi.chipyab.ir/api/CyMenuItems`, {
          method: 'GET', 
      }).then(res => res.json()).
          then((result) => {
            setitemMenuArray(result)
            setitemMenuArrayB(result)
          }) 
  }
  myAppGet()
}

let array=[]
  useEffect(()=>{
let y=  itemMenuArray.map(item=>array.push(item.id))
console.log(array); 
    registerGet()
    registerGetMenu()
    console.log(mMenuArray)
    console.log(itemMenuArray)
  },[mainMenuContext.tabId]) 


  return (

    <>
{/* {itemMenuArray.filter(item=>item.rootId)} */}





       {mMenuArray &&   <>  <div className='container'>
        <div className='row'>
          <div className='col'>

          <DataTable title={'لیست منوها :'}>
            <table className='table table-striped  mainmenu-table'>
              <thead>
                <tr>
                <th>شماره</th>
            <th>نام منوی </th>
            <th>ID</th>
            <th>ImageUrl</th>
                </tr>
              </thead>
              <tbody>
                {mMenuArray.map((item, index) => (
                  <tr key={item.id}>
                   <td>{index + 1}</td>
                <td> {item.text}</td>
                <td>{item.id}</td>
                <td>{item.imageUrl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>

          <DataTable title={'لیست منوی اصلی :'}>

<table className='table table-striped  itemmenu-table'>
    <thead>
        <tr>
             <th>شماره</th>
            <th>عنوان منو </th>
            <th>اولویت</th>
            <th>سرگروه</th>
            <th>زیرگروه</th>
            <th>متا</th>
            <th>ID</th>
            <th>PageUrl</th>
            <th>ImageUrl</th>
        </tr>
    </thead>

    <tbody>
        { itemMenuArray &&itemMenuArray.filter(item=>item.rootId==0).map(((item, index) => (
            <tr key={item.id}>
                  <td>{index + 1}</td>
                <td> {item.text}</td>
                <td>{item.orderValue}</td>
                <td>{item.cyMenuId}</td>
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

<table className='table table-striped  itemmenu-table'>
    <thead>
        <tr>
             <th>شماره</th>
            <th>عنوان منو </th>
            <th>اولویت</th>
            <th>سرگروه</th>
            <th>زیرگروه</th>
            <th>متا</th>
            <th>ID</th>
            <th>PageUrl</th>
            <th>ImageUrl</th>
        </tr>
    </thead>

    <tbody>
        { itemMenuArray &&itemMenuArray.filter(item=>item.rootId !== 0).map(((item, index) => (
            <tr key={item.id}>
                 <td>{index + 1}</td>
                <td> {item.text}</td>
                <td>{item.orderValue}</td>
                <td>{item.cyMenuId}</td>
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

          </div>
        </div>
       </div>
       
       
       <div></div>
       </>
    }   
    
    </>

  )
}














// import React, { useState, useEffect, useContext } from 'react'
// import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
     


// export default function MainShow() {
//   const [mMenuArray, setMMenuArray] = useState([])
//   const [mMenuArrayb, setMMenuArrayb] = useState([])


// let  data2={ value: 5, label: 's' }
  
// useEffect(()=>{
  
//   setMMenuArrayb((prev)=>[...prev ,  { value: 5, label: m }] )
// },[]) 


// console.log(mMenuArrayb)

   
// const data = [
//   { value: 5, label: 's' },  
//   // { value: 10, label: mMenuArray[0].text },
//   // { value: 15, label: mMenuArray[1].text },
//   { value: 20, label: 'D' },
// ];

// const size = {
//   width: 400, 
//   height: 200,
// };

// /////////////////////////
// useEffect(()=>{
//   const registerGet = () => {
//     async function myAppGet() {
//       const res = await fetch(`http://wapi.chipyab.ir/api/CyMenus`, {
//         method: 'GET',
//       }).then(res => res.json()).
//         then((result) => {
//           setMMenuArray(result)
//           console.log(mMenuArray)
//         })
//     }
//     myAppGet()
//   }
//   registerGet()
// },[ ])

//   return (
//     <PieChart
//       series={[
//         {
//           arcLabel: (item) => `${item.label} (${item.value})`,
//           arcLabelMinAngle: 45,
//           data,
//         },
//       ]}
//       sx={{
//         [`& .${pieArcLabelClasses.root}`]: {
//           fill: 'white',
//           fontWeight: 'bold',
//         },
//       }}
//       {...size}
//     />
//   );
// }