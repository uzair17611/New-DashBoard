import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='Navbar'>
  <div className="logo">
  <img src="logo.svg" alt="" />
  <span>UZAIR</span>
  </div>
  <div className="icon">
    <img src="search.svg" alt="" />
    <img src="expand.svg" alt="" />
    <img src="app.svg" alt="" />
  <div className='notification'>
    <img src="/notifications.svg" alt="" />
    <span>1</span>
    </div>
    <div className="user">
<img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" />
<span>Uzair</span>
    </div>
    <img  src='/settings.svg'></img>
  </div>
    </div>
  )
}

export default Navbar
