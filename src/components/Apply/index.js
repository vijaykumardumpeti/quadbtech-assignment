import {useState} from 'react'
import {useHistory} from 'react-router-dom'

import {useDispatch} from 'react-redux'

import submitFormDetailsToStore from '../../redux/user/userActions'

import './index.css'

const Apply = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null,
  })

  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    setFormData({...formData, resume: file})
  }

  const handleSubmit = e => {
    e.preventDefault()
    /* add details to redux store and redirect to another sucess route */
    dispatch(submitFormDetailsToStore(formData))
    history.push('/success')
  }

  return (
    <div style={{fontFamily: 'Arial, sans-serif'}}>
      <div
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        <h2>Job Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="container" style={{marginBottom: '20px'}}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="container" style={{marginBottom: '20px'}}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="container" style={{marginBottom: '20px'}}>
            <label htmlFor="coverLetter">Cover Letter Note</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="4"
              value={formData.coverLetter}
              onChange={handleInputChange}
            />
          </div>
          <div className="container" style={{marginBottom: '20px'}}>
            <label htmlFor="resume">Resume (PDF)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default Apply
