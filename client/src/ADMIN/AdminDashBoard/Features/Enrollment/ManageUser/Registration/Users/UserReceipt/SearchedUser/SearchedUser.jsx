import { useEffect } from "react";
import { useSelector } from "react-redux";

function SearchedUser() {
  /// getting the state

  const {
    firstname,
    lastname,
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
  } = useSelector((state) => state.userData.searchedUser);

  useEffect(() => {
    console.log(userId);
  });

  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="w-full mx-auto p-4 border border-blue-500 rounded shadow-lg bg-white flex flex-col items-center justify-center">
          <ul role="list" className="divide-y p-4 first:pb-0 last:pb-0 pb-4">
            <div className="grid grid-cols-2 gap-24 p-4">
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">First Name:</span>
                {firstname}
              </li>
              {/*  */}
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">Last Name:</span>{" "}
                {lastname}
              </li>
            </div>
            {/* ... */}
            <div className="grid grid-cols-2  gap-24 p-4">
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">Email:</span>{" "}
                {email}
              </li>
              {/* ... */}
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">
                  Date of Birth:
                </span>{" "}
                {dateOfBirth}
              </li>
            </div>
            {/* ... */}
            <div className="grid grid-cols-2  gap-24 p-4">
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">LGA:</span> {lga}
              </li>
              {/* ... */}
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">
                  Blood Group:
                </span>{" "}
                {bloodGroup}
              </li>
            </div>
            {/* ... */}
            <div className="grid grid-cols-2  gap-24 p-4">
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">Genotype:</span>{" "}
                {genotype}
              </li>
              {/* ... */}
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">Tribe:</span>{" "}
                {tribe}
              </li>
            </div>
            {/* ... */}
            <div className="grid grid-cols-2  gap-24 p-4">
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">Height:</span>{" "}
                {height}
              </li>
              {/* ... */}
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">Occupation:</span>{" "}
                {occupation}
              </li>
            </div>
            {/* ... */}
            <div className="grid grid-cols-2  gap-24 p-4">
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">
                  Phone Number:
                </span>{" "}
                {phoneNumber}
              </li>
              {/* ... */}
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">
                  Marital Status:
                </span>{" "}
                {maritalStatus}
              </li>
            </div>
            {/*  */}
            <div className="grid grid-cols-1  gap-24 p-4">
              <li className="mb-4 flex gap-4 items-center justify-between">
                <span className="font-semibold text-gray-600">ID:</span>{" "}
                <span className="relative right-[9.5rem]">{userId}</span>
              </li>
              {/* ... */}
            </div>
          </ul>
          {/* ... */}
        </div>
      </div>
    </>
  );
}

export default SearchedUser;
