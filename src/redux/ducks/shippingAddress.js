// Actions
const SET_FIRST_NAME = '@@shippingAddress/SET_FIRST_NAME'
const SET_LAST_NAME = '@@shippingAddress/SET_LAST_NAME'
const SET_STREET_ADDRESS = '@@shippingAddress/SET_STREET_ADDRESS'
const SET_APT_SUITE = '@@shippingAddress/SET_APT_SUITE'
const SET_ZIP_CODE = '@@shippingAddress/SET_ZIP_CODE'
const SET_STATE = '@@shippingAddress/SET_STATE'
const SET_CITY = '@@shippingAddress/SET_CITY'
const SET_COUNTRY = '@@shippingAddress/SET_COUNTRY'
const SET_PHONE = '@@shippingAddress/SET_PHONE'
const SET_MY_BILLING_ADDR = '@@shippingAddress/SET_MY_BILLING_ADDR'

const SET_FIRST_NAME_ERR = '@@shippingAddress/SET_FIRST_NAME_ERR'
const SET_LAST_NAME_ERR = '@@shippingAddress/SET_LAST_NAME_ERR'
const SET_STREET_ADDRESS_ERR = '@@shippingAddress/SET_STREET_ADDRESS_ERR'
const SET_ZIP_CODE_ERR = '@@shippingAddress/SET_ZIP_CODE_ERR'
const SET_STATE_ERR = '@@shippingAddress/SET_STATE_ERR'
const SET_CITY_ERR = '@@shippingAddress/SET_CITY_ERR'
const SET_COUNTRY_ERR = '@@shippingAddress/SET_COUNTRY_ERR'
const SET_PHONE_ERR = '@@shippingAddress/SET_PHONE_ERR'

const initialState = {
  firstName: '',
  lastName: '',
  streetAddress: '',
  aptSuite: '',
  zipCode: '',
  country: '',
  state: '',
  city: '',
  phone: '',
  myBillingAddress: true,
  errors: {
    firstName: null,
    lastName: null,
    streetAddress: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    phone: null,
  },
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /* First name */
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.data,
      }

    case SET_FIRST_NAME_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          firstName: action.error,
        },
      }

    /* Last name */
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.data,
      }

    case SET_LAST_NAME_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          lastName: action.error,
        },
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

    /* Phone */
    case SET_PHONE:
      return {
        ...state,
        phone: action.data,
      }

    case SET_PHONE_ERR:
      return {
        ...state,
        errors: {
          ...state.errors,
          phone: action.error,
        },
      }

    /* Use as billing address */
    case SET_MY_BILLING_ADDR:
      return {
        ...state,
        myBillingAddress: action.data,
      }

    default:
      return state
  }
}

// Action creators

/* First name */
export const setFirstName = data => ({
  type: SET_FIRST_NAME,
  data,
})

export const setFirstNameError = error => ({
  type: SET_FIRST_NAME_ERR,
  error,
})

/* Last name */
export const setLastName = data => ({
  type: SET_LAST_NAME,
  data,
})

export const setLastNameError = error => ({
  type: SET_LAST_NAME_ERR,
  error,
})

/* Street address */
export const setStreetAddress = data => ({
  type: SET_STREET_ADDRESS,
  data,
})

export const setStreetAddressError = error => ({
  type: SET_STREET_ADDRESS_ERR,
  error,
})

/* Apt/suite */
export const setAptSuite = data => ({
  type: SET_APT_SUITE,
  data,
})

/* Zip code */
export const setZipCode = data => ({
  type: SET_ZIP_CODE,
  data,
})

export const setZipCodeError = error => ({
  type: SET_ZIP_CODE_ERR,
  error,
})

/* City */
export const setCity = data => ({
  type: SET_CITY,
  data,
})

export const setCityError = error => ({
  type: SET_CITY_ERR,
  error,
})

/* State */
export const setState = data => ({
  type: SET_STATE,
  data,
})

export const setStateError = error => ({
  type: SET_STATE_ERR,
  error,
})

/* Country */
export const setCountry = data => ({
  type: SET_COUNTRY,
  data,
})

export const setCountryError = error => ({
  type: SET_COUNTRY_ERR,
  error,
})

/* Phone */
export const setPhone = data => ({
  type: SET_PHONE,
  data,
})

export const setPhoneError = error => ({
  type: SET_PHONE_ERR,
  error,
})

/* Use as billing address */
export const setMyBillingAddress = data => ({
  type: SET_MY_BILLING_ADDR,
  data,
})
