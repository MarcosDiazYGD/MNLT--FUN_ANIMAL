import svgs from '../assets/svg/svgs'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='invisible'></div>
      <div className='container--search'>
        <div className='c--search'><input type="text" placeholder="search"></input></div>
        <div className='c--mag_glss'> <img src={svgs.search} /></div>
      </div>
      <div className='c--b_menu'><img className='bx-tada' src={svgs.menu}/></div>
    </nav>
  )
}

export default Navbar