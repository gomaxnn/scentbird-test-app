// Actions
const SET_CARD_NUMBER = '@@creditCard/SET_CARD_NUMBER'
const SET_CARD_MONTH = '@@creditCard/SET_CARD_MONTH'
const SET_CARD_YEAR = '@@creditCard/SET_CARD_YEAR'
const SET_CARD_CODE = '@@creditCard/SET_CARD_CODE'

const SET_CARD_NUMBER_ERR = '@@creditCard/SET_CARD_NUMBER_ERR'
const SET_CARD_MONTH_ERR = '@@creditCard/SET_CARD_MONTH_ERR'
const SET_CARD_YEAR_ERR = '@@creditCard/SET_CARD_YEAR_ERR'
const SET_CARD_CODE_ERR = '@@creditCard/SET_CARD_CODE_ERR'

const initialState = {
  cardNumber: '',
  expMonth: '',
  expYear: '',
  secureCode: '',
  errors: {
    cardNumber: null,
    expMonth: null,
    expYear: null,
    secureCode: null,
  },
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /* Card number */
    case SET_CARD_NUMBER:
      return {
        ...state,
        cardNumber: action.data,
      }

    case SET_CARD_NUMBER_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          cardNumber: action.error,
        },
      }

    /* Expiration month */
    case SET_CARD_MONTH:
      return {
        ...state,
        expMonth: action.data,
      }

    case SET_CARD_MONTH_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          expMonth: action.error,
        },
      }

    /* Expiration year */
    case SET_CARD_YEAR:
      return {
        ...state,
        expYear: action.data,
      }

    case SET_CARD_YEAR_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          expYear: action.error,
        },
      }

    /* Secure code */
    case SET_CARD_CODE:
      return {
        ...state,
        secureCode: action.data,
      }

    case SET_CARD_CODE_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          secureCode: action.error,
        },
      }

    default:
      return state
  }
}

// Action creators

/* Card number */
export const setCardNumber = data => ({
  type: SET_CARD_NUMBER,
  data,
})

export const setCardNumberError = error => ({
  type: SET_CARD_NUMBER_ERR,
  error,
})

/* Expiration month */
export const setCardMonth = data => ({
  type: SET_CARD_MONTH,
  data,
})

export const setCardMonthError = error => ({
  type: SET_CARD_MONTH_ERR,
  error,
})

/* Expiration year */
export const setCardYear = data => ({
  type: SET_CARD_YEAR,
  data,
})

export const setCardYearError = error => ({
  type: SET_CARD_YEAR_ERR,
  error,
})

/* Secure code */
export const setCardCode = data => ({
  type: SET_CARD_CODE,
  data,
})

export const setCardCodeError = error => ({
  type: SET_CARD_CODE_ERR,
  error,
})
