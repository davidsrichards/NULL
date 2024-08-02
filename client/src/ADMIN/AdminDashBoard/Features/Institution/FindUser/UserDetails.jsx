import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slip from "../../../SLIP/Slip";
import { getUserDetails } from "../InstitutionHelperFunction/InstitutionHelperFunction";

function InstitutionUserDetails() {
  const [userData, setUserData] = useState([]);
  const { getUserId, getUsersCode } = useSelector(
    (state) => state.institutionData
  );

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await getUserDetails({
          code: getUsersCode,
          userId: getUserId,
        });
        if (response) {
          setUserData(response);
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    };
    fetchUserInformation();
  }, []);

  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="w-full mx-auto p-2 border border-blue-500 rounded shadow-lg bg-white flex flex-col items-center justify-center overflow-auto">
          <h1 className="text-2xl font-semibold mb-4 text-blue-500">
            User Information
          </h1>

          {/* ... */}
          <Slip
            firstname={userData?.firstname}
            lastname={userData?.lastname}
            middlename={userData?.middlename}
            email={userData?.email}
            dateOfBirth={userData?.dateOfBirth}
            lga={userData?.lga}
            tribe={userData?.tribe}
            height={userData?.height}
            occupation={userData?.occupation}
            phoneNumber={userData?.phoneNumber}
            maritalStatus={userData?.maritalStatus}
            userId={userData?.userId}
          />

          <button
            className="bg-blue-500 w-full text-white py-3 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={() => window.print()}
          >
            Print Slip
          </button>
        </div>
      </div>
    </>
  );
}

export default InstitutionUserDetails;
