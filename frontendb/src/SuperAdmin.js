// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Email, UserFeatch, adminBlock } from './Apis/SuperAdminApis';
// import axios from 'axios';
// import TimeZone from './component/TImeZone';
// import Sidebar from './component/Sidebar';
// import LanguageSelector from './component/Language_selecter';
// import { useTranslation } from 'react-i18next';

// function Home() {
//   const { t } = useTranslation();
//   const tailwindsubmitbtn = "text-white bg-slate-800 h-8 px-4 mb-6 rounded ";

//   const [showPendingBtn, setShowPendingBtn] = useState(true);
//   const [showTable, setShowTable] = useState(false);
//   const [isAvailablepopup, setAvailablepopup] = useState(false);
//   const [adminData, setAdminData] = useState([]);
//   const [sendEmailMsg, setSendEmailMsg] = useState("");
//   const [popupData, setpopupData] = useState({ email: "", password: "", role: "", id: "" });
//   const [status, setStatus] = useState(new Set());
//   const [StatusBtn, setStatusBtn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleUserManagement = () => {
//     setShowPendingBtn(true);
//     setShowTable(false);
//   };

//   const sendEmail = async (email, id) => {
//     setpopupData({ email: email, password: "", role: "Admin", id: id });
//     setAvailablepopup(true);
//   };

//   const handlePendingRequest = async () => {
//     setShowTable(true);
//     try {
//       const res = await UserFeatch();
//       const pendingUsers = res.data.data.filter(user => user.status !== 'blocked');
//       setAdminData(pendingUsers);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   };

//   const handleBlockUser = async (id) => {
//     if (!window.confirm("Are you sure you want to block this user?")) return;
//     try {
//       const res = await adminBlock(id);
//       if (res.data.success) {
//         alert("User blocked successfully!");
//         handlePendingRequest();
//       }
//     } catch (error) {
//       console.log("Error blocking user:", error);
//       alert("Failed to block user");
//     }
//   };

//   // const Logout = () => {
//   //   localStorage.removeItem("userId");
//   //   localStorage.removeItem("email");
//   //   localStorage.removeItem("role");
//   //   navigate("/", { replace: true });
//   // };

//   const getMessageColor = () => {
//     if (sendEmailMsg.includes("successfully")) return "green";
//     if (sendEmailMsg.includes("Failed")) return "red";
//     return "blue";
//   };

//   const onChangePop = (e) => {
//     setpopupData({ ...popupData, [e.target.name]: e.target.value });
//   };

//   // const submit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.put(
//   //       `http://localhost:5000/adminPopupUpdate/update/${popupData.id}`,
//   //       popupData, {
//   //       btnStatus: true
//   //     }
//   //     );

//   //     setSendEmailMsg("Sending email...");

//   //     await Email(popupData.email, popupData.password);

//   //     setSendEmailMsg(`Email sent successfully to ${popupData.email}`);
//   //     setTimeout(() => setSendEmailMsg(""), 3000);
//   //     setAvailablepopup(false);

//   //     setpopupData({ email: "", password: "", role: "", id: "" });

//   //   } catch (error) {
//   //     console.log(error);
//   //     setSendEmailMsg("Failed to send email");
//   //     setTimeout(() => setSendEmailMsg(""), 3000);
//   //   }
//   // };

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:5000/adminPopupUpdate/update/${popupData.id}`,
//         {
//           popupData,
//           // btnStatus: true
//         }
//       );
  
//       setSendEmailMsg("Sending email...");
  
//       await Email(popupData.email, popupData.password);
  
//       setSendEmailMsg(`Email sent successfully to ${popupData.email}`);
//       setTimeout(() => setSendEmailMsg(""), 3000);
  
//       setAvailablepopup(false);
//       setpopupData({ email: "", password: "", role: "", id: "" });
  
//       handlePendingRequest();
  
//     } catch (error) {
//       console.log(error.response?.data || error.message);
//       setSendEmailMsg("Failed to send email");
//       setTimeout(() => setSendEmailMsg(""), 3000);
//     }
//   };


//   return (
//     <>
      
//       <div className='flex align-middle h-screen '>

//         <div className='text-balance ml-2 my-1 '> <Sidebar /></div>
//         <div className=' w-full bg-slate-700 rounded-2xl mx-2 my-1 p-6'>

//           <div className='text-white flex  justify-between'> 
//           <h1 >{t("greeting")}</h1>
//           <LanguageSelector />
           
//             </div>

//           <div className=' text-black  '>
//             <div >
//               {/* <button className={tailwindsubmitbtn} onClick={handleUserManagement}>User Management</button> */}
              
//               {showPendingBtn && (
//                 <button className={tailwindsubmitbtn} onClick={handlePendingRequest}>Pending Request</button>
//               )}
//             </div>

//             {/* <div >
//               <button className={tailwindsubmitbtn} onClick={Logout}>Logout</button>
//             </div> */}

//             {sendEmailMsg && (
//               <p style={{ textAlign: "center", fontWeight: "bold", color: getMessageColor() }}>
//                 {sendEmailMsg}
//               </p>
//             )}

//             {showTable && (
//               adminData.length > 0 ? (
//                 <div className="overflow-x-auto p-10 ">
//                   <table className="min-w-full border border-gray-300 text-sm text-center">

//                     {/* Header */}
//                     <thead className="bg-slate-400">
//                       <tr>
//                         <th className="border px-4 py-2">Name</th>
//                         <th className="border px-4 py-2">Email</th>
//                         <th className="border px-4 py-2">Mobile</th>
//                         <th className="border px-4 py-2">Category</th>
//                         <th className="border px-4 py-2">Comment</th>
//                         <th className="border px-4 py-2">Date</th>
//                         <th className="border px-4 py-2">Action</th>
//                       </tr>
//                     </thead>

//                     {/* Body */}
//                     <tbody >
//                       {adminData.map((item) => (
//                         <tr key={item._id} className="hover:bg-gray-200">

//                           <td className="border px-4 py-2">{item.name}</td>
//                           <td className="border px-4 py-2">{item.email}</td>
//                           <td className="border px-4 py-2">{item.mobile}</td>
//                           <td className="border px-4 py-2">{item.category}</td>
//                           <td className="border px-4 py-2">{item.comment}</td>
//                           <td className="border px-4 py-2">
//                             {item.createdAt
//                               ? new Date(item.createdAt).toLocaleDateString()
//                               : "N/A"}
//                           </td>

//                           <td className="border px-2 space-x-2 ">

//                             <button
//                               onClick={() => sendEmail(item.email, item._id)}
//                               disabled={status.has(item._id)}
//                               className={`${tailwindsubmitbtn} text-white `}
//                             >
//                               Send Email
//                             </button>

//                             {/* Cancel Button */}
//                             <button
//                               onClick={() => handleBlockUser(item._id)}
//                               className="px-3 py-1 rounded bg-gray-950 text-white hover:bg-gray-700"
//                             >
//                               Block
//                             </button>

//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <p className="text-center mt-4">No Data Found</p>
//               )
//             )}


//             {isAvailablepopup && (
//               <div
//                 className="fixed inset-0 flex items-center justify-center z-50"
//                 style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0,0,0,0.5)' }}
//               >
//                 <form
//                   className='bg-slate-900 grid align-middle py-4 w-96 rounded-2xl text-white'
//                   onSubmit={submit}
//                   onClick={(e) => e.stopPropagation()} // form click se close na ho
//                 >
//                   <input className='h-8 my-2 mx-8 px-2' onChange={onChangePop} type="text" name="email" disabled value={popupData.email} />
//                   <select className='h-8 my-2 mx-8 px-2 text-slate-950' name="role" onChange={onChangePop}>
//                     <option value="Admin">Admin</option>
//                   </select>
//                   <input className='h-8 my-2 mx-8 px-2 text-black' onChange={onChangePop} type="text" name="password" placeholder="password" required />
//                   <button className={`${tailwindsubmitbtn}h-8 my-6 mx-8`} type="submit">Submit</button>
//                 </form>
//               </div>
//             )}
//           </div>
//           <div className='text-white grid align-bottom justify-end'> 
         
//              <TimeZone />
//             </div>
//         </div>
        
//       </div>
//     </>
//   );
// }

// export default Home;