import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const logoutFunc = () => {
    const {history} = props
    Cookies.remove('vijayToken')
    history.replace('/login')
  }

  const redirectToHomeRoute = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <nav className="header-container">
      <img
        onClick={redirectToHomeRoute}
        className="header-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
      />
      <div className="content-button-container">
        <div className="content-container">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/jobs">
            <p className="link">Jobs</p>
          </Link>
        </div>
        <button onClick={logoutFunc} className="logout-button" type="button">
          Logout
        </button>
      </div>
      <div className="mobile-icons-container">
        <Link className="link" to="/">
          <AiFillHome />
        </Link>
        <Link className="link" to="/jobs">
          <BsBriefcaseFill />
        </Link>
        <button
          onClick={logoutFunc}
          className="icon-delete-button"
          type="button"
        >
          <FiLogOut />
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
