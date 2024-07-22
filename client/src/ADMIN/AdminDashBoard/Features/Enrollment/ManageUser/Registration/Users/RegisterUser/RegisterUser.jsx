import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addUserAction } from "../../../../../../../../REDOX/Features/UsersSlice/UsersSlice";
import axios from "axios";
import Waiting from "../../../../../../../Waiting/Waiting";

function UserRegistrationForm() {
  const BASE_URL = "/api/admin/user/new";
  // getting te dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // decleration of state
  const [users, setUsers] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    dateOfBirth: "",
    lga: "",
    bloodGroup: "",
    genotype: "",
    tribe: "",
    height: "",
    occupation: "",
    phoneNumber: "",
    maritalStatus: "",
    userId: "",
  });
  const [Isloading, setIsLoading] = useState(false);

  /// errors
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [lgaError, setLgaError] = useState("");
  const [bloodGroupError, setBloodGoupError] = useState("");
  const [genotypeError, setGenotypeError] = useState("");
  const [tribeError, setTribeErrror] = useState("");
  const [heightError, setHeightError] = useState("");
  const [occupationError, setOccupationError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [maritalStatusError, setMaritalStatusError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  // handle input changes

  // firstname
  const handleFirstName = (e) => {
    setUsers((user) => ({ ...user, firstname: e.target.value }));
  };
  // lastname
  const handleLastname = (e) => {
    setUsers((user) => ({ ...user, lastname: e.target.value }));
  };
  // middle name
  const handleMiddlename = (e) => {
    setUsers((user) => ({ ...user, middlename: e.target.value }));
  };
  // email
  const handleEmail = (e) => {
    setUsers((user) => ({ ...user, email: e.target.value }));
  };
  // date of birth
  const handleDateOfBirth = (e) => {
    setUsers((user) => ({ ...user, dateOfBirth: e.target.value }));
  };
  // lga
  const handleLga = (e) => {
    setUsers((user) => ({ ...user, lga: e.target.value }));
  };
  // bloodGroup
  const handleBloodGroup = (e) => {
    setUsers((user) => ({ ...user, bloodGroup: e.target.value }));
  };
  // genotype
  const handleGenotype = (e) => {
    setUsers((user) => ({ ...user, genotype: e.target.value }));
  };
  // tribe
  const handleTribe = (e) => {
    setUsers((user) => ({ ...user, tribe: e.target.value }));
  };
  // height
  const handleHeight = (e) => {
    setUsers((user) => ({ ...user, height: e.target.value }));
  };
  // occupation
  const handleOccupation = (e) => {
    setUsers((user) => ({ ...user, occupation: e.target.value }));
  };
  // phone number
  const handlePhoneNumber = (e) => {
    setUsers((user) => ({ ...user, phoneNumber: e.target.value }));
  };
  // marital status
  const handleMaritalStatus = (e) => {
    setUsers((user) => ({ ...user, maritalStatus: e.target.value }));
  };

  // print users
  const {
    firstname,
    lastname,
    middlename,
    email,
    dateOfBirth,
    lga,
    bloodGroup,
    genotype,
    tribe,
    height,
    occupation,
    phoneNumber,
    maritalStatus,
    userId,
  } = users;

  /// handle error

  const handleError = (error, setter, serverMsg) => {
    const findError = error.response.data.find(({ msg }) => msg === serverMsg);
    return findError ? setter(serverMsg) : setter("");
  };

  // clear errors

  const clearErrors = () => {
    setFirstnameError("");
    setLastnameError("");
    setEmailError("");
    setPhoneNumberError("");
    setDateOfBirthError("");
    setLgaError("");
    setBloodGoupError("");
    setGenotypeError("");
    setTribeErrror("");
    setHeightError("");
    setOccupationError("");
    setMaritalStatusError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const response = await axios
      .post(BASE_URL, {
        firstname,
        lastname,
        email,
        middlename,
        dateOfBirth,
        lga,
        bloodGroup,
        genotype,
        tribe,
        height,
        occupation,
        phoneNumber,
        maritalStatus,
      })
      .catch((err) => {
        setIsLoading(false);
        handleError(err, setFirstnameError, "please provide firstname");
        handleError(err, setLastnameError, "please provide lastname");
        handleError(err, setEmailError, "please provide a valid email address");
        handleError(err, setPhoneNumberError, "please provide phone number");
        handleError(err, setLgaError, "please provide local government");
        handleError(err, setDateOfBirthError, "please provide date of birth");
        handleError(err, setBloodGoupError, "please provide blood group");
        handleError(err, setGenotypeError, "please provide Genotype");
        handleError(err, setHeightError, "please provide height");
        handleError(err, setOccupationError, "please provide occupation");
        handleError(err, setTribeErrror, "please provide tribe");
        handleError(
          err,
          setMaritalStatusError,
          "please provide martial status"
        );
      });

    if (response) {
      setIsLoading(false);
      setUsers((prev) => ({ ...prev, userId: response.data.userId }));
      clearErrors();
      setIsVerified((prev) => !prev);
    }
  };

  // dispatch

  const dispatchAll = () => {
    dispatch(
      addUserAction({
        firstname,
        lastname,
        middlename,
        email,
        dateOfBirth,
        lga,
        bloodGroup,
        genotype,
        tribe,
        height,
        occupation,
        phoneNumber,
        maritalStatus,
        userId,
      })
    );
  };

  useEffect(() => {
    if (isVerified) {
      dispatchAll();
      const currentPath = location.pathname;
      const newPath = currentPath.replace("create-user", "slip");
      navigate(newPath, { relative: true, replace: true });
    }
  }, [isVerified]);

  return (
    <div className="container p-4 mx-auto">
      <div className="bg-[#d1d1d1] grid grid-cols-1 container mx-auto p-4 mt-12">
        <h2 className="text-xl font-semibold mb-4 ">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {/* input fields */}
          <div className="mb-4 grid lg:grid-cols-2 lg:gap-2">
            <div>
              <label htmlFor="" className="block text-sm font-medium text-[#]">
                first name
              </label>
              <input
                value={users.firstname}
                onChange={handleFirstName}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1 input"
              />
              <p className="text-red-500">{firstnameError}</p>
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-medium">
                last Name
              </label>
              <input
                value={users.lastname}
                onChange={handleLastname}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1 input"
              />
              <p className="text-red-500">{lastnameError}</p>
            </div>
          </div>
          {/*  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Middle Name / optional
            </label>
            <input
              value={users.middlename}
              onChange={handleMiddlename}
              type="text"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
          </div>
          {/* state */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              email
            </label>
            <input
              value={users.email}
              onChange={handleEmail}
              type="email"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{emailError}</p>
          </div>
          {/* phone */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              phone number
            </label>
            <input
              value={users.phoneNumber}
              onChange={handlePhoneNumber}
              type="number"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{phoneNumberError}</p>
          </div>
          {/* date of birth */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              date of birth
            </label>
            <input
              value={users.dateOfBirth}
              onChange={handleDateOfBirth}
              type="date"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{dateOfBirthError}</p>
          </div>

          {/*  */}

          {/*  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              LGA
            </label>
            <input
              value={users.lga}
              onChange={handleLga}
              type="text"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{lgaError}</p>
          </div>

          {/*  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Blood Group
            </label>
            <input
              value={users.bloodGroup}
              onChange={handleBloodGroup}
              type="text"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{bloodGroupError}</p>
          </div>
          {/*  */}

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Genotype
            </label>
            <input
              value={users.genotype}
              onChange={handleGenotype}
              type="text"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{genotypeError}</p>
          </div>
          {/*  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Height
            </label>
            <input
              value={users.height}
              onChange={handleHeight}
              type="text"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{heightError}</p>
          </div>
          {/*  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Occupation
            </label>
            <input
              value={users.occupation}
              onChange={handleOccupation}
              type="text"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{occupationError}</p>
          </div>
          {/*  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Tribe
            </label>
            <input
              value={users.tribe}
              onChange={handleTribe}
              type="text"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{tribeError}</p>
          </div>
          {/*  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Marital Status
            </label>
            <input
              value={users.maritalStatus}
              onChange={handleMaritalStatus}
              type="text"
              className="mt-1 p-2 border rounded w-full hover:ring-1 input"
            />
            <p className="text-red-500">{maritalStatusError}</p>
          </div>

          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-600 transition duration-300 ease-in-out text-white px-4 py-2 rounded w-full flex items-center justify-center"
          >
            {Isloading ? <Waiting /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegistrationForm;
