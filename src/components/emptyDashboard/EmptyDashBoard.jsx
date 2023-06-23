import { Link } from "react-router-dom"
import './emptyDashboard.scss'

const EmptyDashBoard = ({ }) => {

  return (
    <div className="emptyDashBoard">
      <h2 className="emptyDashBoard__title" >There are still no notes</h2>
      <p className="emptyDashBoard__subtitle">But you can create them</p>
      <Link className="emptyDashBoard__link" to={'/new-note'}>Create note</Link>
    </div>
  )
}

export default EmptyDashBoard