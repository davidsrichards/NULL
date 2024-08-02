import { Routes, Route } from "react-router-dom";
import AdminDashBoard from "./ADMIN/AdminDashBoard/AdminDashBoard";
import AdminLogin from "./ADMIN/AdminLogin/Adminlogin";
import UserRegistrationForm from "./ADMIN/AdminDashBoard/Features/Enrollment/ManageUser/Registration/Users/RegisterUser/RegisterUser";
import VerifyUser from "./ADMIN/AdminDashBoard/Features/Enrollment/ManageUser/Registration/Users/UpdateUser/Verifyuser";
import UpdateUser from "./ADMIN/AdminDashBoard/Features/Enrollment/ManageUser/Registration/Users/UpdateUser/UpdateUser";
import ManageUser from "./ADMIN/AdminDashBoard/Features/Enrollment/ManageUser/Registration/Users/ManageUser/ManageUser";
import Enrollment from "./ADMIN/AdminDashBoard/Features/Enrollment/Enrollment";
import Institutiton from "./ADMIN/AdminDashBoard/Features/Institution/Institution";
import RegisterInstitution from "./ADMIN/AdminDashBoard/Features/Institution/RegisterInstitution/RegisterInstitution";
import VerifyInstitution from "./ADMIN/AdminDashBoard/Features/Institution/UpdateInstitution/Verifyinstitution/Verifyinstitution";
import VerifyInstitutionCode from "./ADMIN/AdminDashBoard/Features/Institution/FindUser/VerifyInstitutionCode";
import UpdateInstition from "./ADMIN/AdminDashBoard/Features/Institution/UpdateInstitution/UpdateInstitution";
import FindUserByInstitutionCode from "./ADMIN/AdminDashBoard/Features/Institution/FindUser/FindUser";
import InstitutionUserDetails from "./ADMIN/AdminDashBoard/Features/Institution/FindUser/UserDetails";
import ManageInstitution from "./ADMIN/AdminDashBoard/Features/Institution/ManageInstitution/ManageInstitution";
import UserReceipt from "./ADMIN/AdminDashBoard/Features/Enrollment/ManageUser/Registration/Users/UserReceipt/UserReceipt";
import SearchedUser from "./ADMIN/AdminDashBoard/Features/Enrollment/ManageUser/Registration/Users/UserReceipt/SearchedUser/SearchedUser";
import SearchedInstitution from "./ADMIN/AdminDashBoard/Features/Institution/UpdateInstitution/SearchedInstitution/SearchedInstitution";
import EmptyMessages from "./ADMIN/AdminDashBoard/Features/Key/EmptyMessages/EmptyMessages";
import AdminProfile from "./ADMIN/AdminDashBoard/Features/Profile/Profile";

function App() {
  return (
    <div className="w-full h-screen items-center justify-center">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashBoard />}>
          <Route path="enrollment" element={<Enrollment />}>
            <Route path="create-user" element={<UserRegistrationForm />} />
            <Route path="verify-user" element={<VerifyUser />} />
            <Route path="update-user" element={<UpdateUser />} />
            <Route path="manage-user" element={<ManageUser />} />
            <Route path="slip" element={<UserReceipt />} />
            <Route path="searched-user" element={<SearchedUser />} />
            <Route path="empty" element={<EmptyMessages />} />
            <Route index element={<ManageUser />} />
          </Route>
          <Route path="institution" element={<Institutiton />}>
            <Route
              path="create-institution"
              element={<RegisterInstitution />}
            />
            <Route path="verify-institution" element={<VerifyInstitution />} />
            <Route path="update-institution" element={<UpdateInstition />} />
            <Route path="manage-institution" element={<ManageInstitution />} />
            <Route
              path="verify-institution-code"
              element={<VerifyInstitutionCode />}
            />
            <Route path="find-user" element={<FindUserByInstitutionCode />} />
            <Route path="user-detail" element={<InstitutionUserDetails />} />
            <Route
              path="searched-institution"
              element={<SearchedInstitution />}
            />
            <Route index element={<ManageInstitution />} />
          </Route>
          <Route path="profile" element={<AdminProfile />} />
          <Route index element={<ManageUser />} />
        </Route>
        <Route path="*" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
