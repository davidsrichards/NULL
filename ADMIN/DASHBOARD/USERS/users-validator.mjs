export const userValidator = {
  firstname: {
    notEmpty: {
      errorMessage: "please provide firstname",
    },
  },

  lastname: {
    notEmpty: {
      errorMessage: "please provide lastname",
    },
  },
  middlename: {
    isLength: {
      options: {
        min: 0,
        max: 20,
      },
    },
  },
  email: {
    isEmail: {
      errorMessage: "please provide a valid email address",
    },
  },
  phoneNumber: {
    notEmpty: {
      errorMessage: "please provide phone number",
    },
  },
  dateOfBirth: {
    notEmpty: {
      errorMessage: "please provide date of birth",
    },
  },
  lga: {
    notEmpty: {
      errorMessage: "please provide local government",
    },
  },

  bloodGroup: {
    notEmpty: {
      errorMessage: "please provide blood group",
    },
  },
  genotype: {
    notEmpty: {
      errorMessage: "please provide Genotype",
    },
  },
  tribe: {
    notEmpty: {
      errorMessage: "please provide tribe",
    },
  },
  height: {
    notEmpty: {
      errorMessage: "please provide height",
    },
  },
  occupation: {
    notEmpty: {
      errorMessage: "please provide occupation",
    },
  },

  maritalStatus: {
    notEmpty: {
      errorMessage: "please provide martial status",
    },
  },
};
