// Actions
const SWITCH = '@@subscriptionType/SWITCH'
const ERROR = '@@subscriptionType/ERROR'

const initialState = {
  type: null,
  error: null,
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH:
      return {
        ...state,
        type: action.data,
      }

    case ERROR:
      return {
        ...state,
        error: action.error,
      }

    default:
      return state
  }
}

// Action creators
export const switchType = data => ({
  type: SWITCH,
  data,
})

export const setTypeError = error => ({
  type: ERROR,
  error,
})
