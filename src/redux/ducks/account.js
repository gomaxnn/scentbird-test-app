// Actions
const SET_EMAIL = '@@account/SET_EMAIL'
const SET_EMAIL_ERR = '@@account/SET_EMAIL_ERR'

const SET_PASSWORD = '@@account/SET_PASSWORD'
const SET_PASSWORD_ERR = '@@account/SET_PASSWORD_ERR'

const SET_ERRORS = '@account/SET_ERRORS'

const initialState = {
  email: '',
  password: '',
  errors: {
    email: null,
    password: null,
  },
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Email
    case SET_EMAIL:
      return {
        ...state,
        email: action.data,
      }

    case SET_EMAIL_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          email: action.error,
        },
      }

    // Password
    case SET_PASSWORD:
      return {
        ...state,
        password: action.data,
      }

    case SET_PASSWORD_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          password: action.error,
        },
      }

    // Errors
    case SET_ERRORS:
      return {
        ...state,
        errors: {
          ...initialState.errors,
          ...action.errors,
        },
      }

    default:
      return state
  }
}

// Action creators
export const setEmail = data => ({
  type: SET_EMAIL,
  data,
})

export const setEmailError = error => ({
  type: SET_EMAIL_ERR,
  error,
})

export const setPassword = data => ({
  type: SET_PASSWORD,
  data,
})

export const setPasswordError = error => ({
  type: SET_PASSWORD_ERR,
  error,
})

export const accountSetErrors = errors => ({
  type: SET_ERRORS,
  errors,
})
