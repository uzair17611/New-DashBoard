import './Menu.scss'
import { Link } from 'react-router-dom'
import {menu}  from "../../data"

const Menu = () => {
  return (
    <div className='Menu'>

     
       {menu.map((item)=>(
       
       <div className="item"  key={item.id}>
 
          <span className="tilte">
            {item.title}
          </span>
    {item.listItems.map((items)=>
    <Link  to="/"  className='listItem'>
     <img src={items.icon} alt="" />
     <span  className='ListItemTitle'>
        {items.title}
     </span>
    </Link>
    )
   }

       </div>
       
       
       
       
       
       )
       )

}
       
       
       
       
     
    </div>
  )
}

export default Menu
