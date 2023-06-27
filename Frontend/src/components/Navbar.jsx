import svgs from '../assets/svg/svgs'
import navbarStyles from '../css/navbar.module.css'


const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.invisible}></div>
      <div className={navbarStyles.container__search}>
        <div className={navbarStyles.c__search}><input type="text" placeholder="search"></input></div>
        <div className={navbarStyles.c__mag_glss}> <img src={svgs.search} /></div>
      </div>
      <div className={navbarStyles.c__b_menu}><img className='bx-tada' src={svgs.menu}/></div>
    </nav>
  )
}

export default Navbar