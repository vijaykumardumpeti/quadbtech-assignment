import {BiSearchAlt} from 'react-icons/bi'

import {Component} from 'react'
import Header from '../Header'

import './index.css'

const profile = {
  name: 'Rahul Attuluri',
  profileImageUrl:
    'https://assets.ccbp.in/frontend/react-js/male-avatar-img.png',
  shortBio: 'Lead Software Developer and AI-ML expert',
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
                  id="fulltime"
                  type="radio"
                />
                <label htmlFor="fulltime">10LPA and above</label>
              </div>
              <div className="input-para-container">
                <input
                  name="salary"
                  className="input-type-element"
                  id="parttime"
                  type="radio"
                />
                <label htmlFor="parttime">20LPA and above</label>
              </div>
              <div className="input-para-container">
                <input
                  name="salary"
                  className="input-type-element"
                  id="freelance"
                  type="radio"
                />
                <label htmlFor="freelance">30LPA and above</label>
              </div>
              <div className="input-para-container">
                <input
                  name="salary"
                  className="input-type-element"
                  id="internship"
                  type="radio"
                />
                <label htmlFor="internship">40LPA and above</label>
              </div>
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
          <div className="second-container">
            <h1>hello</h1>
          </div>
        </div>
      </>
    )
  }
}
