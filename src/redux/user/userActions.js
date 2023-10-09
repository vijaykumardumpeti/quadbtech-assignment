import SUBMIT_FORM_DETAILS from './userTypes'

const submitFormDetailsToStore = formDetails => ({
  type: SUBMIT_FORM_DETAILS,
  payload: formDetails,
})

export default submitFormDetailsToStore
