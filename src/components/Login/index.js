import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  changeUserName = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  successView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 40, path: '/'})
    history.replace('/')
  }

  failureView = errorMsg => {
    this.setState({errorMsg})
  }

  submitFormData = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const profile = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(profile),
    }

    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.successView(data.jwt_token)
      console.log('success')
    } else {
      this.failureView(data.error_msg)
      console.log('failure')
    }
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-container">
        <div className="login-card">
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
          <form onSubmit={this.submitFormData} className="form-container">
            <div className="input-container">
              <label htmlFor="username">USERNAME</label>
              <input
                value={username}
                onChange={this.changeUserName}
                className="input-element"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">PASSWORD</label>
              <input
                value={password}
                onChange={this.changePassword}
                className="input-element"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="form-button" type="submit">
              Login
            </button>
            <p className="error-msg">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}
