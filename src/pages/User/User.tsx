import "./user.scss"
import DataTable from "../../components/DataTable/DataTable"
const User = () => {
  return (
    <div className='user'>
     <div className="info">
      <h1>User</h1>
      <button>
        Add New User
      </button>
     <DataTable/>

     </div>
    </div>
  )
}

export default User
