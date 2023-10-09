import SUBMIT_FORM_DETAILS from './userTypes'

const initialState = {
  formDetails: {},
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM_DETAILS:
      return {
        formDetails: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
