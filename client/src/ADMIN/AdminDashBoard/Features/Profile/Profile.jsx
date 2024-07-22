import { useSelector } from "react-redux";

function AdminProfile() {
  // getting state
  const { username } = useSelector((state) => state.adminData.information);
  //
  return (
    <div className="container p-4 mx-auto">
      <div className="bg-[#f0f0f0] hover:bg-[#d1d1d1] grid grid-cols-1 container mx-auto p-4 mt-12 pb-6 justify-items-center  rounded-2xl transition duration-300 ease-in-out">
        <img
          src="https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0 "
          alt=""
          className="w-64 rounded-full mx-auto"
        />
        <div className="mt-4 uppercase font-semibold">{username}</div>
      </div>
    </div>
  );
}

export default AdminProfile;
