import {useSelector} from 'react-redux'
import './index.css'

const Success = () => {
  const formData = useSelector(state => state.user.formDetails)

  // Check if formData exists
  if (!formData) {
    return null // Return null or any other fallback component if formData is undefined
  }

  const {name, email, coverLetter, resume} = formData
  console.log(resume)

  return (
    <div className="success">
      {/* Render data from the store */}
      <h2>Details Preview</h2>
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Email:</span> {email}
      </p>
      <div>
        <span>Cover Letter Description:</span>
        <p>{coverLetter}</p>
      </div>
      <p>
        <span>Resume:</span> {resume.name}
      </p>

      {/* Other fields here */}
    </div>
  )
}

export default Success
