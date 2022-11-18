
import { AgGridReact } from 'ag-grid-react'
import { useState, useEffect, useMemo } from 'react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const Grid = ({resultAPI}) => {

    const rowData = resultAPI
    const [columnDefs, setColumnDefs] = useState([
      {field: 'employeeId'},
      {field: 'firstName'},
      {field: 'lastName'},
      {field: 'age'},
      {field: 'address'},
      {field: 'email'},
      {field: 'city'},
      {field: 'timeWorkingInCompany'}
    ])
  
    const defaultColDef = useMemo(() => ({
      sortable: true,
      filter: true
    }), [])  
  
    return (
      <div className='ag-theme-alpine-dark' style={{height: 400, width: 1600, marginLeft: 150, marginTop: 40}}>
      <AgGridReact
         rowData={rowData}
         columnDefs={columnDefs}
         defaultColDef={defaultColDef}
         animateRows={true}
         enableCellTextSelection={true}
      />
      </div>
    )
}

export default Grid