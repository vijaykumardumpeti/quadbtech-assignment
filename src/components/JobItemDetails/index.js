import {Component} from 'react'

import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'

import {BiLinkExternal} from 'react-icons/bi'

import Header from '../Header'

import './index.css'

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

export default class JobItemDetails extends Component {
  render() {
    const {
      id,
      companyLogoUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
      skills,
      lifeAtCompany,
    } = jobObject

    const {description, imageUrl} = lifeAtCompany

    return (
      <>
        <Header />
        <div className="job-item-details-container">
          <li key={id} className="job-detail-container">
            <div className="box1">
              <img className="company-logo" alt="job" src={companyLogoUrl} />
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

              <div className="link-container">
                <p>Visit</p>
                <BiLinkExternal />
              </div>
            </div>

            <div>
              <p className="description-para-item">{jobDescription}</p>
            </div>

            <div className="skills-container">
              <h1 className="skills-heading">Skills</h1>
              <ul className="unordered-skills-container">
                {skills.map(o => (
                  <li className="skill-list-item">
                    <img
                      className="skill-image"
                      alt={o.name}
                      src={o.imageUrl}
                    />
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
              <img className="company-room" alt="s" src={imageUrl} />
            </div>
          </li>
          <div className="similar-bg-container">
            <h1 className="j-heading">Similar Jobs</h1>
            <ul className="similar-jobs-container">
              <li key={id} className="similar-job-detail-container">
                <div className="box1">
                  <img
                    className="company-logo"
                    alt="job"
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

                <div className="box3-item">
                  <h1 className="similar-description-heading">Description</h1>
                </div>

                <div>
                  <p className="similar-description-para-item">
                    {jobDescription}
                  </p>
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
                </div>
              </li>

              <li key={id} className="similar-job-detail-container">
                <div className="box1">
                  <img
                    className="company-logo"
                    alt="job"
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

                <div className="box3-item">
                  <h1 className="similar-description-heading">Description</h1>
                </div>

                <div>
                  <p className="similar-description-para-item">
                    {jobDescription}
                  </p>
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
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}
