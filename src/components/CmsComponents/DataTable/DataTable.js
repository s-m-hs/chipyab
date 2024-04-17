import React from 'react'
import './DataTable.css'
export default function DataTable({title,children}) {
  return (
    <div className='container datatable-container'>

        <div className='row'>
            <div className='col'>
<h3>{title}</h3>
{children}
            </div>
        </div>
    </div>
  )
}
