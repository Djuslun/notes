import { Link } from "react-router-dom"
import './notFoundPage.scss'

const NotFoundPage = ({ }) => {

  return (
    <div className="not-found-page">
      <h2 className="not-found-page__title" >404</h2>
      <p className="not-found-page__subtitle">page not found</p>
      <Link className="not-found-page__link" to={'/'}>Back to main page</Link>
    </div>
  )
}

export default NotFoundPage