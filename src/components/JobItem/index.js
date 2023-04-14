import {Component} from 'react'

import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'

import './index.css'

export default class JobItem extends Component {
  render() {
    const {jobObject, key} = this.props

    const {
      companyLogoUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
    } = jobObject

    return (
      <li key={key} className="job-item-container">
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
          <hr className="horizontal-lines" />
        </div>
        <div className="box3">
          <h1 className="description-heading">Description</h1>
          <p className="description-para">{jobDescription}</p>
        </div>
      </li>
    )
  }
}
