const constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
    email: {
      message: '^Valid email address required',
    },
  },

  password: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
    length: {
      minimum: 10,
      message: '^Must contain at least 10 characters',
    },
  },
}

export default constraints
