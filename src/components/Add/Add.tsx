import './Add.scss'


type Props={
slug:string;
columns:GridColDef[];
setOpen:React.Dispatch<React.SetStateAction<boolean>>
}


const Add = (props:Props) => {
    const handleSubmit =(e: React.FormHTMLAttributes<HTMLFormElement>)=>{
        e.preventDefault();

    }
  return (
    <div className="Add">
        <div className="model">

            <span className="close" onClick={()=>props.setOpen(false)}>
             X
            </span>
            <h1>Add new  {props.slug}</h1>
            <form onSubmit={handleSubmit }>
              {
                props.columns.filter(item=>item.field !== "id"  && item.field !== "avatar" ).map((column)=>(
                    <div className="item">
                        <label >{column.headerName}</label>
                        <input type={column.type}  placeholder={column.field} />
                    </div>
                   
                ))
              }
               <button>send</button>

            </form>
        </div>
      
    </div>
  )
}

export default Add
