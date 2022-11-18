import { AgGridReact } from 'ag-grid-react'
import { useState, useEffect, useMemo } from 'react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'



function App() {
  const [rowData, setRowData] = useState([])

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

  useEffect(() => {
    fetch('https://localhost:7192/api/users/Europa')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);

  return (
    <div className='ag-theme-alpine' style={{height: 500}}>
    <AgGridReact
       rowData={rowData}
       columnDefs={columnDefs}
       defaultColDef={defaultColDef}
       animateRows={true}
    />
    </div>
  )
}

export default App
