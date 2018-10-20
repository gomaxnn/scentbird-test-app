const constraints = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
  },

  lastName: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
  },

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

  phone: {
    format: {
      pattern: /^$|^[+]1\s\d{3}\s\d{3}\s\d{2}\s\d{2}/,
      message: '^Valid phone number required',
    },
  },
}

export default constraints
