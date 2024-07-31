import toast from "react-hot-toast";

////////// login validator

const verifyLogin = (errors = {}, values) => {
  if (!values.username) {
    errors.username = toast.error("username required");
  } else if (!values.password) {
    errors.password = toast.error("password required");
  }
  return errors;
};

// valdate

export const validateLogin = (values) => {
  const errors = verifyLogin({}, values);
  return errors;
};

///// VALIDATE INSTITUTION

const verifyInstitution = (errors = {}, values) => {
  if (!values.institutionName) {
    errors.institutionName = toast.error("Institution name required");
  } else if (!values.institutionCode) {
    errors.institutionCode = toast.error("Institution Code required");
  }
  return errors;
};

/// validate instituition

export const validateInstitution = (values) => {
  const errors = verifyInstitution({}, values);
  return errors;
};
