import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import EmptyMessages from "../../Key/EmptyMessages/EmptyMessages";
import axios from "axios";
import { Await } from "react-router-dom";
import Isloading from "../../../Loading/Loading";
import ServerError from "../../../Loading/ServerError";

function ManageInstitution() {
  const BASE_URL = "/api/admin/institution/delete/";
  const GET_ALL = "/api/admin/institution/get/all";
  const dispatch = useDispatch();
  const [institutions, setInstitutions] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  // handle submit

  const { InstitutionInformation } = useSelector(
    (state) => state.institutionData
  );

  // delete instiitution

  const deleteInstitute = async (id) => {
    const respose = await axios.delete(BASE_URL + id);
    const updatedInstitution = institutions.filter(
      (institutions) =>
        institutions.institutionID !== respose.data.institutionID
    );
    setInstitutions(updatedInstitution);
  };

  useEffect(() => {
    setLoading(true);
    const fetchAll = async () => {
      const response = await axios.get(GET_ALL).catch((err) => {
        if (err) {
          setLoading(false);
          setServerError(true);
        }
      });

      if (response) {
        setInstitutions(response.data);

        setLoading(false);
        setServerError(false);
      }
    };
    fetchAll();
  }, []);

  if (!loading && institutions?.length < 1 && !serverError)
    return <EmptyMessages />;
  // if not istititution
  if (InstitutionInformation?.length < 1) return <EmptyMessages />;
  if (loading) return <Isloading />;

  if (serverError) return <ServerError />;

  return (
    <div className="bg-white grid grid-cols-1 container mx-auto p-4 mt-12 justify-items-center pb-12">
      <h2 className="text-xl font-semibold mb-4 text-blue-400">
        List Of Available Institutions
      </h2>

      {/* input field */}
      <table className="w-full border ">
        <thead className="w-full">
          <tr className="font-bold">
            <td className="p-4">Name</td>
            <td className="p-4">Code</td>
            <td className="p-4">Key</td>
          </tr>
        </thead>
        <tbody className="mt-4">
          {institutions?.map(
            ({ institutionName, institutionCode, institutionID }, i) => (
              <tr
                key={i}
                className="manage group/items h-[4rem] text-slate-600 w-full border float-none"
              >
                <td className="pb-4 p-4 uppercase">{institutionName}</td>
                <td className="pb-4 p-4">{institutionID}</td>
                <td className="pb-4 p-4 uppercase">{institutionCode}</td>

                <td>
                  <MdDelete
                    className="group/items relative right-8 top-1 text-[1.3rem] text-red-500 cursor-pointer invisible group-hover/items:visible transition duration-300 ease-in-out hover:scale-125"
                    onClick={async () => {
                      await deleteInstitute(institutionID);
                    }}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ManageInstitution;
