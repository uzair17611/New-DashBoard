import './Add.scss'


type Props={
slug:string;
columns:GridColDef[];
setOpen:React.Dispatch<React.SetStateAction<boolean>>
}


const Add = (props:Props) => {
  return (
    <div className="Add">
        <div className="model">

            <span className="close" onClick={()=>props.setOpen(false)}>
             X
            </span>
            <h1>Add new  {props.slug}</h1>
            <form>
              {
                props.columns.filter(item=>item.field !== "id"  && item.field !== "avatar" ).map((column)=>(
                    <div className="item">
                        <label >{column.header}</label>
                        <input type={column.type}  placeholder={column.field} />
                    </div>
                ))
              }


            </form>
        </div>
      
    </div>
  )
}

export default Add
