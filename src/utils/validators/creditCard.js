const constraints = {
  cardNumber: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
    format: {
      pattern: /\d{4}-\d{4}-\d{4}-\d{4}/,
      message: '^Valid card number required',
    },
  },
  
  expMonth: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
  },
  
  expYear: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
  },
  
  secureCode: {
    presence: {
      allowEmpty: false,
      message: '^This field is required',
    },
    length: {
      is: 3,
      message: '^Must contain 3 digits',
    },
    numericality: {
      onlyInteger: true,
      message: '^Must contain only digits',
    },
  },
}

export default constraints
