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
          <span className="font-semibold text-gray-600">First Name:</span>
          {firstname || "Dauda"}
        </li>
        {/*  */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Last Name:</span>{" "}
          {lastname || "Richard"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Middle Name:</span> {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">{middlename || "None"}</li>
      </div>
      {/*  */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Email:</span>{" "}
          {email || "daudarichard04@gmail.com"}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Date of Birth:</span>{" "}
          {dateOfBirth || "11/05/2004"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">LGA:</span>{" "}
          {lga || "keffi"}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Blood Group:</span>{" "}
          {bloodGroup || "AA"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Genotype:</span>{" "}
          {genotype | "A"}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Tribe:</span>{" "}
          {tribe || "mada"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Height:</span>{" "}
          {height || "12.6"}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Occupation:</span>{" "}
          {occupation || "student"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Contact:</span>{" "}
          {phoneNumber || "09068842993"}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">Marital Status:</span>{" "}
          {maritalStatus || "Single"}
        </li>
      </div>
      {/*  */}
      <div className="grid grid-cols-2  gap-24 p-4">
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600">ID:</span> {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">{userId || "Single"}</li>
      </div>
    </ul>
  );
}

export default Slip;
