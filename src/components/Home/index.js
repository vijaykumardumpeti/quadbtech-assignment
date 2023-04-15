import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>

          <p className="home-para">
            Millions of people are searching for jobs, salary, Information,
            company reviews. Find the job that fits your abilities and potential
          </p>
          <Link to="/jobs">
            <button className="home-button" type="submit">
              Find Jobs
            </button>
          </Link>
        </div>
      </>
    )
  }
}
