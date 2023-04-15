import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const logoutFunc = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const redirectToHomeRoute = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <nav className="header-container">
      <Link className="link" to="/">
        <img
          onClick={redirectToHomeRoute}
          className="header-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />
      </Link>
      <div className="content-button-container">
        <ul className="content-container">
          <li>
            <Link to="/">
              <p className="link">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <p className="link">Jobs</p>
            </Link>
          </li>
        </ul>
        <button onClick={logoutFunc} className="logout-button" type="button">
          Logout
        </button>
      </div>
      <ul className="mobile-icons-container">
        <li>
          <Link className="link" to="/">
            <AiFillHome />
          </Link>
        </li>
        <li>
          <Link className="link" to="/jobs">
            <BsBriefcaseFill />
          </Link>
        </li>
        <li>
          <button
            onClick={logoutFunc}
            className="icon-delete-button"
            type="button"
          >
            <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
