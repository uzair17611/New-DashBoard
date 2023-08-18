import './DataTable.scss'
// import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams,GridToolbar } from '@mui/x-data-grid';
import { userRows } from '../../data';

type Props ={
    columns:GridColDef,
    row:object[]
}




const DataTable = (props:Props) => {
    
    //   const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,status:true },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,status:true  },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,status:true  },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,status:true },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ];
      
  return (
    <div className='DataTable'>
        <DataGrid
        className='Datagrid'
        rows={props.row}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={
          {
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}
            }
          }
        }
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable
