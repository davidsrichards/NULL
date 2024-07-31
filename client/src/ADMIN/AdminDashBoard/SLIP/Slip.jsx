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
    <ul role="list" className="divide-y p-2 first:pb-0 last:pb-0 pb-4 w-full">
      <div className="grid grid-cols-2 gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className=" text-gray-600 text-nowrap font-bold">
            First Name:
          </span>
          {firstname || "Dauda"}
        </li>
        {/*  */}
        <li className="mb-4 flex gap-4">
          <span className=" text-gray-600 text-nowrap font-bold">
            Last Name:
          </span>{" "}
          {lastname || "Richard"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-2">
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
      <div className="grid grid-cols-2  gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap">Email:</span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">
          {email || "daudarichard04@gmail.com"}
        </li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap">
            Date Of Birth:
          </span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4 text-nowrap">{dateOfBirth}</li>
      </div>
      {/*  */}
      <div className="grid grid-cols-2  gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap">LGA:</span> {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4">{lga}</li>
      </div>
      {/*  */}
      <div className="grid grid-cols-2 gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap">
            Blood Group:
          </span>
          {bloodGroup}
        </li>
        {/*  */}
        <li className="mb-4 flex gap-4">
          <span className="font-semibold text-gray-600 text-nowrap">
            Genotype:
          </span>{" "}
          {genotype}
        </li>
      </div>
      {/*  */}

      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap">Tribe:</span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4 text-nowrap">{tribe}</li>
      </div>

      {/*  */}
      <div className="grid grid-cols-2  gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap">Height:</span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4 text-nowrap">{height}</li>
      </div>
      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap">
            Occupation:
          </span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4 text-nowrap">{occupation}</li>
      </div>
      {/*  */}
      <div className="grid grid-cols-2  gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap">Contact:</span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4 text-nowrap">{phoneNumber}</li>
      </div>

      {/* ... */}
      <div className="grid grid-cols-2  gap-24 p-2">
        <li className="mb-4 flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap">
            Marital Status:
          </span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4 text-nowrap">{maritalStatus}</li>
      </div>

      {/*  */}
      <div className="grid grid-cols-2  gap-24 p-1 pb-0">
        <li className=" flex gap-4">
          <span className="font-bold text-gray-600 text-nowrap relative top-2">
            ID:
          </span>{" "}
          {""}
        </li>
        {/* ... */}
        <li className="mb-4 flex gap-4 relative top-2">{userId}</li>
      </div>
    </ul>
  );
}

export default Slip;
