export const institutionValidator = {
  institutionName: {
    notEmpty: {
      errorMessage: "please provide institution name",
    },
  },
  institutionCode: {
    isLength: {
      options: {
        min: 4,
        max: 4,
      },
      errorMessage: "CODE must be four Digits",
    },
  },
};
