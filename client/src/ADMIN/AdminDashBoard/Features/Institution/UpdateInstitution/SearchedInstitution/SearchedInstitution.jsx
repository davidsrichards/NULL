import { useEffect } from "react";
import { useSelector } from "react-redux";

function SearchedInstitution() {
  const { institutionName, institutionCode } = useSelector(
    (state) => state.institutionData.searchedInstitution
  );

  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="w-full mx-auto p-4 border border-blue-500 rounded shadow-lg bg-white flex flex-col items-center justify-center">
          <ul role="list" className="divide-y p-4 first:pb-0 last:pb-0 pb-4">
            <div className="grid grid-cols-2 gap-24 p-4">
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">
                  Institution Name:
                </span>
                {institutionName}
              </li>
              {/*  */}
              <li className="mb-4 flex gap-4">
                <span className="font-semibold text-gray-600">
                  Institution Code:
                </span>{" "}
                {institutionCode}
              </li>
            </div>
            {/* ... */}
          </ul>
          {/* ... */}
        </div>
      </div>
    </>
  );
}

export default SearchedInstitution;
