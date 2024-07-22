import { useState } from "react";

const RegistionHelperFunction = () => {
  const [registrationError, setRegistrationError] = useState({
    firstnameError: "dave",
    lastnameError: "",
    emailError: "",
    dateOfBirthError: "",
    lgaError: "",
    bloodGroupError: "",
    genotypeError: "",
    tribeError: "",
    heightError: "",
    occupationError: "",
    phoneNumberError: "",
    maritalStatusError: "",
  });

  return [registrationError, setRegistrationError];
};

export default RegistionHelperFunction;
