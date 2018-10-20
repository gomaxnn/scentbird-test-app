const constraints = {
  streetAddress: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
  },

  zipCode: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
    format: {
      pattern: /\d{5}(-\d{4})?/,
      message: '^Valid zip code required',
    },
  },

  city: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
  },

  state: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
  },

  country: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
  },
}

export default constraints
