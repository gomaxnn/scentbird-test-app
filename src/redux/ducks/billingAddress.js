// Actions
const SET_STREET_ADDRESS = '@@billingAddress/SET_STREET_ADDRESS'
const SET_APT_SUITE = '@@billingAddress/SET_APT_SUITE'
const SET_ZIP_CODE = '@@billingAddress/SET_ZIP_CODE'
const SET_STATE = '@@billingAddress/SET_STATE'
const SET_CITY = '@@billingAddress/SET_CITY'
const SET_COUNTRY = '@@billingAddress/SET_COUNTRY'

const SET_STREET_ADDRESS_ERR = '@@billingAddress/SET_STREET_ADDRESS_ERR'
const SET_ZIP_CODE_ERR = '@@billingAddress/SET_ZIP_CODE_ERR'
const SET_STATE_ERR = '@@billingAddress/SET_STATE_ERR'
const SET_CITY_ERR = '@@billingAddress/SET_CITY_ERR'
const SET_COUNTRY_ERR = '@@billingAddress/SET_COUNTRY_ERR'

const SET_VISIBILITY = '@@billingAddress/SET_VISIBILITY'
const RESET = '@@billingAddress/RESET'
const SET_ERRORS = '@@billingAddress/SET_ERRORS'

const initialState = {
  visible: false,
  streetAddress: '',
  aptSuite: '',
  zipCode: '',
  country: '',
  state: '',
  city: '',
  errors: {
    streetAddress: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
  },
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /* Visibility */
    case SET_VISIBILITY:
      return {
        ...state,
        visible: action.data,
      }

    /* Street address */
    case SET_STREET_ADDRESS:
      return {
        ...state,
        streetAddress: action.data,
      }

    case SET_STREET_ADDRESS_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          streetAddress: action.error,
        },
      }

    /* Apt/suite */
    case SET_APT_SUITE:
      return {
        ...state,
        aptSuite: action.data,
      }

    /* Zip code */
    case SET_ZIP_CODE:
      return {
        ...state,
        zipCode: action.data,
      }

    case SET_ZIP_CODE_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          zipCode: action.error,
        },
      }

    /* City */
    case SET_CITY:
      return {
        ...state,
        city: action.data,
      }

    case SET_CITY_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          city: action.error,
        },
      }

    /* State */
    case SET_STATE:
      return {
        ...state,
        state: action.data,
      }

    case SET_STATE_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          state: action.error,
        },
      }

    /* Country */
    case SET_COUNTRY:
      return {
        ...state,
        country: action.data,
      }

    case SET_COUNTRY_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          country: action.error,
        },
      }

    /* Reset to initial */
    case RESET:
      return initialState
    
    /* Errors */
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

/* Visibility */
export const setBillVisibility = data => ({
  type: SET_VISIBILITY,
  data,
})

/* Street address */
export const setBillStreetAddress = data => ({
  type: SET_STREET_ADDRESS,
  data,
})

export const setStreetAddressErr = error => ({
  type: SET_STREET_ADDRESS_ERR,
  error,
})

/* Apt/suite */
export const setBillAptSuite = data => ({
  type: SET_APT_SUITE,
  data,
})

/* Zip code */
export const setBillZipCode = data => ({
  type: SET_ZIP_CODE,
  data,
})

export const setZipCodeErr = error => ({
  type: SET_ZIP_CODE_ERR,
  error,
})

/* City */
export const setBillCity = data => ({
  type: SET_CITY,
  data,
})

export const setCityErr = error => ({
  type: SET_CITY_ERR,
  error,
})

/* State */
export const setBillState = data => ({
  type: SET_STATE,
  data,
})

export const setStateErr = error => ({
  type: SET_STATE_ERR,
  error,
})

/* Country */
export const setBillCountry = data => ({
  type: SET_COUNTRY,
  data,
})

export const setCountryErr = error => ({
  type: SET_COUNTRY_ERR,
  error,
})

/* Reset to initial */
export const reset = () => ({
  type: RESET,
})

/* Errors */
export const billingSetErrors = errors => ({
  type: SET_ERRORS,
  errors,
})
