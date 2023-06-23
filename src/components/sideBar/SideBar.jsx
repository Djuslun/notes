import { AiFillEdit } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'
import { VscGraph } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom';
import './sideBar.scss'

const SideBar = ({ }) => {
  const activeClass = ({ isActive }) => isActive ? "aside__icon-wrapper aside__icon-wrapper--active" : "aside__icon-wrapper"

  return (
    <aside className='aside'>
      <NavLink to={'/'} className={activeClass}>
        <VscGraph color='white' className='aside__icon' />
      </NavLink>
      <NavLink to={'/new-note'} className={activeClass}>
        <AiFillEdit color='white' className='aside__icon' />
      </NavLink>
      <NavLink to={'/notes'} className={activeClass}>
        <MdDashboard color='white' className='aside__icon' />
      </NavLink>
    </aside>
  )
}

export default SideBar