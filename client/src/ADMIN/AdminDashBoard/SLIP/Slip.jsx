function Slip({
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
}) {
  return (
    <ul role="list" className="divide-y p-4 first:pb-0 last:pb-0 pb-4">
      <div className="grid grid-cols-2 gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            First Name:
          </span>
          {firstname || "Dauda"}
        </li>
        {/*  */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Last Name:
          </span>{" "}
          {lastname || "Richard"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-60 text-nowrap">
            Middle Name:
          </span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">{middlename || "None"}</li>
      </div>
      {/*  */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Email:
          </span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          {email || "daudarichard04@gmail.com"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Date Of Birth:
          </span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">{dateOfBirth || "11/05/2024"}</li>
      </div>
      {/*  */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">LGA:</span>{" "}
          {lga || "keffi"}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Blood Group:
          </span>{" "}
          {bloodGroup || "AA"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Genotype:
          </span>{" "}
          {genotype | "A"}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Tribe:
          </span>{" "}
          {tribe || "mada"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Height:
          </span>{" "}
          {height || "12.6"}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Occupation:
          </span>{" "}
          {occupation || "student"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Contact:
          </span>{" "}
          {phoneNumber || "09068842993"}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Marital Status:
          </span>{" "}
          {maritalStatus || "Single"}
        </li>
      </div>
      {/*  */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">ID:</span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">{userId || "Single"}</li>
      </div>
    </ul>
  );
}

export default Slip;
