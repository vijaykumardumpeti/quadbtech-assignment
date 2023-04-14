import Cookies from 'js-cookie'

import {BiSearchAlt} from 'react-icons/bi'

import Loader from 'react-loader-spinner'

import {Component} from 'react'
import Header from '../Header'
import JobItem from '../JobItem'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export default class Jobs extends Component {
  state = {
    profileData: '',
    jobsList: [],
    apiStatus: apiConstants.initial,
    profileApiStatus: apiConstants.initial,

    employmentTypeList: ['FULLTIME', 'PARTTIME'],
    minimumPackage: '',
    searchInput: '',
  }

  componentDidMount() {
    this.getProfileData()
    this.getJobsData()
  }

  getProfileData = async () => {
    this.setState({profileApiStatus: apiConstants.inProgress})

    const jwtToken = Cookies.get('vijayToken')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = 'https://apis.ccbp.in/profile'
    const response = await fetch(url, options)

    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      const profileData = {
        profileImageUrl: data.profile_details.profile_image_url,
        name: data.profile_details.name,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({profileData, profileApiStatus: apiConstants.success})
    } else {
      this.setState({
        profileApiStatus: apiConstants.failure,
      })
    }
  }

  getJobsData = async () => {
    const {employmentTypeList, minimumPackage, searchInput} = this.state
    this.setState({apiStatus: apiConstants.inProgress})

    const jwtToken = Cookies.get('vijayToken')
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentTypeList.join()}&minimum_package=${minimumPackage}&search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const arrayOfJobs = data.jobs.map(o => ({
        companyLogoUrl: o.company_logo_url,
        employmentType: o.employment_type,
        id: o.id,
        jobDescription: o.job_description,
        location: o.location,
        packagePerAnnum: o.package_per_annum,
        rating: o.rating,
        title: o.title,
      }))

      this.setState({jobsList: arrayOfJobs, apiStatus: apiConstants.success})
    }
    if (response.ok === false) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  retryApiCall = () => {
    this.getProfileData()
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader className="loader" type="ThreeDots" color="#ffffff" />
    </div>
  )

  failureView = () => (
    <div className="failure-container">
      <img
        className="failure-image"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      />
      <h1 className="api-heading">Oops! Something Went Wrong</h1>
      <p className="api-para">
        We cannot seem to find the page you are looking for.
      </p>
      <button onClick={this.getJobsData} className="retry-button" type="button">
        Retry
      </button>
    </div>
  )

  successView = jobsList => {
    if (jobsList.length !== 0) {
      return jobsList.map(jobObject => (
        <JobItem key={jobObject.id} jobObject={jobObject} />
      ))
    }
    return (
      <div className="failure-container">
        <img
          className="failure-image"
          alt="no jobs"
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        />
        <h1 className="api-heading">No Jobs Found</h1>
        <p className="api-para">
          We could not find any jobs. Try other filters.
        </p>
      </div>
    )
  }

  profileSuccessView = profileData => (
    <div className="profile-container">
      <img
        className="profile-image"
        alt="profile"
        src={profileData.profileImageUrl}
      />
      <h1 className="profile-heading">{profileData.name}</h1>
      <p className="profile-para">{profileData.shortBio}</p>
    </div>
  )

  profileFailureView = () => (
    <button
      onClick={this.getProfileData}
      className="retry-button"
      type="button"
    >
      Retry
    </button>
  )

  profileRenderLoader = () => (
    <div className="profile-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  enterFunc = event => {
    if (event.keydown === 'Enter') {
      this.getJobsData()
    }
  }

  changeInput = event => {
    this.setState({searchInput: event.target.value})
    this.enterFunc(event)
  }

  render() {
    const {
      profileData,
      profileApiStatus,
      apiStatus,
      jobsList,
      searchInput,
    } = this.state

    console.log(profileData)
    console.log(apiStatus)
    console.log(jobsList)

    this.switchMethod = () => {
      switch (apiStatus) {
        case apiConstants.inProgress:
          return this.renderLoader()

        case apiConstants.failure:
          return this.failureView()

        case apiConstants.success:
          return this.successView(jobsList)

        default:
          return null
      }
    }

    this.profileSwith = () => {
      switch (profileApiStatus) {
        case apiConstants.inProgress:
          return this.profileRenderLoader()

        case apiConstants.failure:
          return this.profileFailureView()

        case apiConstants.success:
          return this.profileSuccessView(profileData)

        default:
          return null
      }
    }

    return (
      <>
        <Header />
        <div className="job-bg-container">
          <div className="first-container">
            <div className="profile-error-container">{this.profileSwith()}</div>
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
                onChange={this.changeInput}
                value={searchInput}
                className="search-input-element"
                type="search"
                placeholder="Search"
              />

              <button
                onClick={this.getJobsData}
                className="search-button"
                type="button"
              >
                <div className="search-icon">
                  <BiSearchAlt />
                </div>
              </button>
            </div>
          </div>

          <ul className="second-container">{this.switchMethod()}</ul>
        </div>
      </>
    )
  }
}
