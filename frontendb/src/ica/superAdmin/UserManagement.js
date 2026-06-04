
import React, { useState, useEffect } from "react";
import { Email, UserFeatch, adminBlock } from "../../Apis/SuperAdminApis";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Sidebar from "../../component/Sidebar";
import LanguageSelector from "../../component/Language_selecter";
import TimeZone from "../../component/TImeZone";
import GridViewIcon from '@mui/icons-material/GridView';
import Navbar from "../../component/Navbar";

function UserManagement() {
  const tailwindInputBtn = " w-96 h-10 border border-gray-300 rounded-lg px-3 text-black outline-none"

  const menuItems = [
    {
      icon: < GridViewIcon />,
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard"

    },
    {
      id: "users",
      label: "User Management",
      children: [
        { name: "Pending Request", path: "/userManagement" }
      ],
    },
    {
      id: "logout",
      label: "Logout",
    },
  ];

  const { t } = useTranslation();

  const [search, setSearch] = useState('');
  const [adminData, setAdminData] = useState([]);
  const [isAvailablepopup, setAvailablepopup] = useState(false);
  const [sendEmailMsg, setSendEmailMsg] = useState("");
  const [popupData, setpopupData] = useState({
    email: "",
    password: "",
    role: "",
    id: "",
  });
  const [status, setStatus] = useState(new Set());

  const tailwindsubmitbtn =
    "text-black bg-slate-800 h-8 px-4 mb-6 rounded ";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await UserFeatch();
      const pendingUsers = res.data.data.filter(
        (user) => user.status !== "blocked"
      );
      setAdminData(pendingUsers);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const sendEmail = async (email, id) => {
    setpopupData({ email, password: "", role: "Admin", id });
    setAvailablepopup(true);
  };

  const handleBlockUser = async (id) => {
    if (!window.confirm("Are you sure you want to block this user?")) return;

    try {
      const res = await adminBlock(id);
      if (res.data.success) {
        alert("User blocked successfully!");
        fetchData();
      }
    } catch (error) {
      console.log("Error blocking user:", error);
    }
  };

  const getMessageColor = () => {
    if (sendEmailMsg.includes("successfully")) return "green";
    if (sendEmailMsg.includes("Failed")) return "red";
    return "blue";
  };

  const onChangePop = (e) => {
    setpopupData({ ...popupData, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://crm-softwere.onrender.com/adminPopupUpdate/update/${popupData.id}`,
        popupData,

      );

      setSendEmailMsg("Sending email...");

      await Email(popupData.email, popupData.password);

      setSendEmailMsg(`Email sent successfully to ${popupData.email}`);
      setTimeout(() => setSendEmailMsg(""), 3000);

      setAvailablepopup(false);
      setpopupData({ email: "", password: "", role: "", id: "" });

    } catch (error) {
      console.log(error);
      setSendEmailMsg("Failed to send email");
      setTimeout(() => setSendEmailMsg(""), 3000);
    }
  };


  const cancel = () =>{
    setAvailablepopup(false);
  }



  const filteredData = adminData.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <div className='main-screen'>
      <Navbar />
      <div className='text-balance  '>
        <Sidebar menuItems={menuItems} />
      </div>
      <div className=' screen-right card mx-[10px] my-[18px] p-2'>

        {/* <div className='text-black flex  justify-between'>
          <h1 >{t("greeting")}</h1>
          <h1>  < LanguageSelector /></h1>
        </div> */}

        <input
        type="text"
        placeholder="Search by name..."
        className="border border-gray-300 p-2 mb-4 rounded "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      

        {sendEmailMsg && (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: getMessageColor(),
            }}
          >
            {sendEmailMsg}
          </p>
        )}

        {adminData.length > 0 ? (
          <div className="overflow-x-auto p-4 card ">
            <table className="min-w-full border border-gray-300 text-sm text-center">

              <thead className="bg-slate-400">
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Mobile</th>
                  <th className="border px-4 py-2">Category</th>
                  <th className="border px-4 py-2">Comment</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-200">

                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.email}</td>
                    <td className="border px-4 py-2">{item.mobile}</td>
                    <td className="border px-4 py-2">{item.category}</td>
                    <td className="border px-4 py-2">{item.comment}</td>
                    <td className="border px-4 py-2">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>

                    <td className="border px-2 space-x-2">

                      <button
                        onClick={() => sendEmail(item.email, item._id)}
                        disabled={status.has(item._id)}
                        className="px-3 py-1 bg-blue-600 text-black rounded"
                      >
                        Send Email
                      </button>

                      <button
                        onClick={() => handleBlockUser(item._id)}
                        className="px-3 py-1 bg-red-600 text-black rounded"
                      >
                        Block
                      </button>

                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        ) : (
          <p className="text-center text-black mt-4">No Data Found</p>
        )}


        {isAvailablepopup && (
          <div
            className=" fixed  inset-0 flex items-center justify-center z-50"
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <form
              className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 "
              onSubmit={submit}
              onClick={(e) => e.stopPropagation()}
            >

              <input
                className={tailwindInputBtn}
                type="text"
                name="email"
                disabled
                value={popupData.email}
              />
              <select required
                className="w-96 h-10 border border-gray-300 rounded-lg px-3 text-black outline-none my-3"
                name="role"
                onChange={onChangePop}
              >

                <option value="">User</option>
                <option value="Admin">Admin</option>
                <option value="SuperAuditor">SuperAuditor</option>
                <option value="CXO">Chief X officer</option>
              </select>
              <input
                className={tailwindInputBtn}
                type="text"
                name="password"
                placeholder="password"
                required
                onChange={onChangePop}
              />
              <div className="flex">              
                  <button
                className="bg-blue-600 h-8 mx-8 my-4 w-80 rounded"
                type="submit"
              >
                Submit
              </button>
                <button onClick={cancel}
                  className="border border-gray-600 h-8 mx-8 my-4 w-80 rounded hover:bg-slate-300"
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        )}
        <div><TimeZone /></div>
      </div>

    </div>

  );
}

export default UserManagement;