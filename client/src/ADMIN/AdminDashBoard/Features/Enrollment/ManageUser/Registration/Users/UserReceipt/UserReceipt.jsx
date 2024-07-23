import { useEffect } from "react";
import { useSelector } from "react-redux";
import Slip from "../../../../../../SLIP/Slip";

function UserReceipt() {
  /// getting the data from the store
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
  } = useSelector((state) => state.userData.userInfo);

  // print slip

  useEffect(() => {
    console.log(firstname);
  });

  const printSlip = () => {
    window.print();
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="w-full mx-auto p-4 border border-blue-500 rounded shadow-lg bg-white flex flex-col items-center justify-center overflow-auto">
        <h1 className="text-2xl font-semibold mb-4 text-blue-500">
          Identity Slip
        </h1>
        <Slip
          firstname={firstname}
          lastname={lastname}
          email={email}
          dateOfBirth={dateOfBirth}
          lga={lga}
          bloodGroup={bloodGroup}
          genotype={genotype}
          tribe={tribe}
          height={height}
          occupation={occupation}
          phoneNumber={phoneNumber}
          maritalStatus={maritalStatus}
          userId={userId}
        />
        {/* ... */}

        <button
          className="bg-blue-500 w-full text-white py-4 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={printSlip}
        >
          Print Slip
        </button>
      </div>
    </div>
  );
}

export default UserReceipt;
