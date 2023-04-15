import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'

import {BiLinkExternal} from 'react-icons/bi'

import Header from '../Header'

import './index.css'
/*
const jobObject = {
  companyLogoUrl:
    'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png',
  companyWebsite_url: 'https://about.netflix.com/en',
  employmentType: 'Internship',
  id: 'bb95e51b-b1b2-4d97-bee4-1d5ec2b96751',
  jobDescription:
    'We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev',
  skills: [
    {
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
      name: 'Docker',
    },
    {
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
      name: 'Docker',
    },
    {
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
      name: 'Docker',
    },
    {
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
      name: 'Docker',
    },
    {
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
      name: 'Docker',
    },
    {
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
      name: 'Docker',
    },
  ],
  lifeAtCompany: {
    description:
      'Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png',
  },
  location: 'Delhi',
  packagePerAnnum: '10 LPA',
  rating: 4,
  title: 'Backend Engineer',
}
*/

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export default class JobItemDetails extends Component {
  state = {
    jobItemDetailsObject: '',
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getJobItemDetailsObject()
  }

  getJobItemDetailsObject = async () => {
    const jwtToken = Cookies.get('jwt_token')

    this.setState({apiStatus: apiConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    const jobDetails = {
      companyLogoUrl: data.job_details.company_logo_url,
      id: data.job_details.id,
      companyWebsiteUrl: data.job_details.company_website_url,
      employmentType: data.job_details.employment_type,
      jobDescription: data.job_details.job_description,
      lifeAtCompany: {
        description: data.job_details.life_at_company.description,
        imageUrl: data.job_details.life_at_company.image_url,
      },
      packagePerAnnum: data.job_details.package_per_annum,
      location: data.job_details.location,
      rating: data.job_details.rating,
      title: data.job_details.title,
      skills: data.job_details.skills.map(o => ({
        imageUrl: o.image_url,
        name: o.name,
      })),
    }

    const similarJobsList = data.similar_jobs.map(o => ({
      companyLogoUrl: o.company_logo_url,
      employmentType: o.employment_type,
      id: o.id,
      jobDescription: o.job_description,
      location: o.location,
      rating: o.rating,
      title: o.title,
    }))

    const object = {jobDetails, similarJobsList}

    if (response.ok === true) {
      this.setState({
        jobItemDetailsObject: object,
        apiStatus: apiConstants.success,
      })
    }
    if (response.ok === false) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  successView = () => {
    const {jobItemDetailsObject} = this.state
    const {jobDetails, similarJobsList} = jobItemDetailsObject

    const {
      id,
      companyLogoUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
      companyWebsiteUrl,
      skills,
      lifeAtCompany,
    } = jobDetails
    const {description, imageUrl} = lifeAtCompany
    return (
      <>
        <li key={id} className="job-detail-container">
          <div className="box1">
            <img
              className="company-logo"
              alt="job details company logo"
              src={companyLogoUrl}
            />
            <div className="title-rating-container">
              <h1 className="title">{title}</h1>
              <div className="rating-container">
                <AiFillStar className="star" />
                <p>{rating}</p>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="big-container">
              <div className="small-container">
                <GoLocation />
                <p className="s">{location}</p>
              </div>

              <div className="small-container">
                <BsBriefcaseFill />
                <p className="s">{employmentType}</p>
              </div>
            </div>

            <p>{packagePerAnnum}</p>
          </div>
          <div>
            <hr className="horizontal-line-item" />
          </div>
          <div className="box3-item">
            <h1 className="description-heading">Description</h1>

            <a
              className="link-container"
              target="_blank"
              rel="noreferrer"
              href={companyWebsiteUrl}
            >
              <p>Visit</p>
              <BiLinkExternal />
            </a>
          </div>

          <div>
            <p className="description-para-item">{jobDescription}</p>
          </div>

          <div className="skills-container">
            <h1 className="skills-heading">Skills</h1>
            <ul className="unordered-skills-container">
              {skills.map(o => (
                <li key={o.name} className="skill-list-item">
                  <img className="skill-image" alt={o.name} src={o.imageUrl} />
                  <p className="skill-name">{o.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="life-at-company-container">
            <div>
              <h1 className="skills-heading">Life at Company</h1>
              <p className="description-para-item">{description}</p>
            </div>
            <img
              className="company-room"
              alt="life at company"
              src={imageUrl}
            />
          </div>
        </li>
        <div className="similar-bg-container">
          <h1 className="j-heading">Similar Jobs</h1>
          <ul className="similar-jobs-container">
            {similarJobsList.map(similarJobObject => (
              <>
                <li
                  key={similarJobObject.id}
                  className="similar-job-detail-container"
                >
                  <div className="box1">
                    <img
                      className="company-logo"
                      alt="similar job company logo"
                      src={similarJobObject.companyLogoUrl}
                    />
                    <div className="title-rating-container">
                      <h1 className="title">{similarJobObject.title}</h1>
                      <div className="rating-container">
                        <AiFillStar className="star" />
                        <p>{similarJobObject.rating}</p>
                      </div>
                    </div>
                  </div>

                  <div className="box3-item">
                    <h1 className="similar-description-heading">Description</h1>
                  </div>

                  <div>
                    <p className="similar-description-para-item">
                      {similarJobObject.jobDescription}
                    </p>
                  </div>

                  <div className="box2">
                    <div className="big-container">
                      <div className="small-container">
                        <GoLocation />
                        <p className="s">{similarJobObject.location}</p>
                      </div>

                      <div className="small-container">
                        <BsBriefcaseFill />
                        <p className="s">{similarJobObject.employmentType}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </>
    )
  }

  failureView = () => (
    <div className="failure-container">
      <img
        className="failure-image"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      />
      <h1 className="api-heading">Oops! Something Went Wrong</h1>
      <p className="api-para">
        We cannot seem to find the page you are looking for
      </p>
      <button
        onClick={this.getJobItemDetailsObject}
        className="retry-button"
        type="button"
      >
        Retry
      </button>
    </div>
  )

  loaderView = () => (
    <div className="loader-containers" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state

    this.switchMethod = () => {
      switch (apiStatus) {
        case apiConstants.inProgress:
          return this.loaderView()

        case apiConstants.failure:
          return this.failureView()
        case apiConstants.success:
          return this.successView()

        default:
          return null
      }
    }

    return (
      <>
        <Header />
        <div className="job-item-details-container">{this.switchMethod()}</div>
      </>
    )
  }
}
