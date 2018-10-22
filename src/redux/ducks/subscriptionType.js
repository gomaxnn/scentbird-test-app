// Actions
const SWITCH = '@@subscriptionType/SWITCH'
const SET_ERRORS = '@@subscriptionType/SET_ERRORS'

const initialState = {
  type: null,
  errors: {
    type: null,
  },
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH:
      return {
        ...state,
        type: action.data,
      }

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
export const switchType = data => ({
  type: SWITCH,
  data,
})

export const typeSetErrors = (errors = {}) => ({
  type: SET_ERRORS,
  errors,
})
