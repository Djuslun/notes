import { AiFillEdit } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'
import { VscGraph } from 'react-icons/vsc'
import { FiSettings } from 'react-icons/fi'
import './sideBar.scss'

const SideBar = ({ }) => {

  return (
    <aside className='aside'>
      <div className="aside__icon-wrapper active">
        <VscGraph color='white' className='aside__icon' />
      </div>
      <div className="aside__icon-wrapper">
        <AiFillEdit color='white' className='aside__icon' />
      </div>
      <div className="aside__icon-wrapper">
        <MdDashboard color='white' className='aside__icon' />
      </div>
      <div className="aside__icon-wrapper">
        <FiSettings color='white' className='aside__icon' />
      </div>
    </aside>
  )
}

export default SideBar