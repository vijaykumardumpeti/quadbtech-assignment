import {BiSearchAlt} from 'react-icons/bi'

import {Component} from 'react'
import Header from '../Header'
import JobItem from '../JobItem'

import './index.css'

const profile = {
  name: 'Rahul Attuluri',
  profileImageUrl:
    'https://assets.ccbp.in/frontend/react-js/male-avatar-img.png',
  shortBio: 'Lead Software Developer and AI-ML expert',
}

const job = {
  companyLogoUrl:
    'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png',
  employmentType: 'Full Time',
  id: 'd6019453-f864-4a2f-8230-6a9642a59466',
  jobDescription:
    'We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.',
  location: 'Bangalore',
  packagePerAnnum: '21 LPA',
  rating: 4,
  title: 'Backend Engineer',
}

export default class Jobs extends Component {
  render() {
    const {name, profileImageUrl, shortBio} = profile

    return (
      <>
        <Header />
        <div className="job-bg-container">
          <div className="first-container">
            <div className="profile-container">
              <img
                className="profile-image"
                alt="profile"
                src={profileImageUrl}
              />
              <h1 className="profile-heading">{name}</h1>
              <p className="profile-para">{shortBio}</p>
            </div>
            <div>
              <hr className="horizontal-line" />
            </div>

            <div className="filter-container">
              <h1 className="filter-heading">Type of Employment</h1>
              <div className="input-para-container">
                <input
                  className="input-type-element"
                  id="fulltime"
                  type="checkbox"
                />
                <label htmlFor="fulltime">Full Time</label>
              </div>
              <div className="input-para-container">
                <input
                  className="input-type-element"
                  id="parttime"
                  type="checkbox"
                />
                <label htmlFor="parttime">Part Time</label>
              </div>
              <div className="input-para-container">
                <input
                  className="input-type-element"
                  id="freelance"
                  type="checkbox"
                />
                <label htmlFor="freelance">Freelance</label>
              </div>
              <div className="input-para-container">
                <input
                  className="input-type-element"
                  id="internship"
                  type="checkbox"
                />
                <label htmlFor="internship">Internship</label>
              </div>
            </div>

            <div>
              <hr className="horizontal-line" />
            </div>

            <div className="filter-container">
              <h1 className="filter-heading">Salary Range</h1>
              <div className="input-para-container">
                <input
                  name="salary"
                  className="input-type-element"
                  id="10"
                  type="radio"
                />
                <label htmlFor="10">10LPA and above</label>
              </div>
              <div className="input-para-container">
                <input
                  name="salary"
                  className="input-type-element"
                  id="20"
                  type="radio"
                />
                <label htmlFor="20">20LPA and above</label>
              </div>
              <div className="input-para-container">
                <input
                  name="salary"
                  className="input-type-element"
                  id="30"
                  type="radio"
                />
                <label htmlFor="30">30LPA and above</label>
              </div>
              <div className="input-para-container">
                <input
                  name="salary"
                  className="input-type-element"
                  id="40"
                  type="radio"
                />
                <label htmlFor="40">40LPA and above</label>
              </div>
            </div>
            <div className="search-container">
              <input
                className="search-input-element"
                type="search"
                placeholder="Search"
              />

              <div className="search-icon">
                <BiSearchAlt />
              </div>
            </div>
          </div>

          <div className="second-container">
            <JobItem job={job} />
            <JobItem job={job} />
            <JobItem job={job} />
          </div>
        </div>
      </>
    )
  }
}
