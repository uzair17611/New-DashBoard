import "./user.scss"
import DataTable from "../../components/DataTable/DataTable"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/Add/Add";




const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {field :"avatar " ,headerName:"Avatar" , width:100,
  renderCell :(params)=>{
      return <img src={params.row.img || "/noavatar.png"}></img>
  }
},
{field :"Action" ,headerName:"Action" , width:100,
renderCell :(params)=>{
  return <div className="action">
      <div className="view">View</div>
      <div className="delete">Delete</div>
  </div>
}
},
{
  field:"status" ,headerName:"status" , width:100 ,type :"boolean"
},

  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



const User = () => {
const [open ,setOpen] =useState(false)

  
  
  return (
    <div className='user'>
     <div className="info">
      <h1>User</h1>
      <button  onClick={()=>setOpen(true)}>
        Add New User
      </button>
     

     </div>
     <DataTable slug="user" rows={userRows } columns={columns}  />
     {open && <Add  slug="user"  columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default User
