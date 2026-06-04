// import React, { useEffect, useState } from 'react'
// import Sidebar from '../../component/Sidebar'
// import { t } from 'i18next';
// import LanguageSelector from '../../component/Language_selecter';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Navbar from '../../component/Navbar';

// function AdminHome() {

//     const initial = {
//         name: "",
//         state: "",
//         city: "",
//         address: "",
//         hospitalLogo: "",
//         hospitalCode: "",
//         contactPerson: "",
//         contactNumber: "",
//         email: ""
//     }

//     const [HospitalUpdate, setHospitalsUpdate] = useState(initial);
//     const [hospitals, setHospitals] = useState([]);
//     const [hospitalsdelete, sethospitalsdelete] = useState();

//     const [isavailable, setisavailable] = useState(false)
//     const [id, setId] = useState("");
//     const menuItems = [
//         {
//           id: "dashboard",
//           label: "Dashboard",
//           path: "/admindashboard"
    
//         },
//         {
//           id: "Hospitals",
//           label: "Hospitals",
//           path: "/hospitals"
    
//         },
//         {
//           id: "Audit_Management",
//           label: "Audit Management",
//           path: "/auditManagement"
    
//         },
    
//         {
//           id: "logout",
//           label: "Logout",
//         },
//       ];

//     useEffect(() => {
//         fetchHospitals();
//     }, []);




//     const fetchHospitals = async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/apihospital/hospital",{
//                 withCredentials: true,
//               });
//             //   console.log("cookierrrrs:", res.cookies);
//             setHospitals(res?.data?.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const edithospital = (hospital) => {
//         setisavailable(true);
//         setHospitalsUpdate(hospital);
//         setId(hospital._id);
//     }

//     const handleChange = (e) => {
//         setHospitalsUpdate({ ...HospitalUpdate, [e.target.name]: e.target.value })
//     }

//     const Submit = async (e) => {
//         try {
//             e.preventDefault();
//             await axios.put(
//                 `http://localhost:5000/apihospital/hospital/${id}`,
//                 HospitalUpdate
//             );

//             setHospitalsUpdate(initial);
//             setisavailable(false);
//             fetchHospitals();

//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const deleteHos = async (id) => {
//         try {
//             const responce = await axios.delete(`http://localhost:5000/apihospital/hospital/${id}`)
//             sethospitalsdelete(responce?.data?.data)
//             fetchHospitals();
//             console.log("hospital deleated", responce?.data?.data)
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     return (
//         <>
 
//             <div className='main-screen'>
//             <div className='navbar'>  <Navbar/></div> 
//                 <div className='ml-2 my-1'>
//                     <Sidebar menuItems={menuItems} />
//                 </div>


//                 <div className='screen-right'>
//                     <div className='flex justify-between text-black mt-4'>
//                         <h1>{t("greeting")}</h1>
//                         <LanguageSelector />
//                     </div>

//                     <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-100'>

//                         {hospitals.length === 0 ? (
//                             <p>No Hospitals Found</p>
//                         ) : (
//                             hospitals.map((e, index) => (
//                                 <div
//                                     key={index}
//                                     className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
//                                 >

//                                     {e.hospitalLogo && (
//                                         <img
//                                             src={e.hospitalLogo}
//                                             alt="logo"
//                                             className="h-16 w-16 object-cover rounded mb-2"
//                                         />
//                                     )}

//                                     <h2 className="text-lg font-bold text-indigo-600">
//                                         {e.name}
//                                     </h2>

//                                     <p className="text-sm text-gray-500">
//                                         {e.city}, {e.state}
//                                     </p>

//                                     <p className="text-sm mt-1">
//                                         {e.contactPerson}
//                                     </p>

//                                     <p className="text-sm mt-1">
//                                         {e.email}
//                                     </p>

//                                     <p className="text-xs mt-2 text-gray-400">
//                                         Code: {e.hospitalCode}
//                                     </p>

//                                     <button
//                                         onClick={() => edithospital(e)}
//                                         className="mt-3 bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600"
//                                     >
//                                         Edit
//                                     </button>

//                                     <button  onClick={() => deleteHos(e._id)}  className="mt-3 bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600"  >
//                                         Delete
//                                     </button>

//                                 </div>
//                             ))
//                         )}

//                     </div>


//                     {
//                         isavailable &&
//                         <div className="p-6 bg-white shadow-xl rounded-xl mt-6 max-w-4xl mx-auto">

//                             <h2 className="text-xl font-semibold text-indigo-600 mb-4">
//                                 Update Hospital
//                             </h2>

//                             <form onSubmit={Submit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                                 <div className="flex flex-col">
//                                     <label className="text-sm font-medium mb-1">Name</label>
//                                     <input onChange={handleChange} value={HospitalUpdate.name} type="text" name="name"
//                                         className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" required />
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <label className="text-sm font-medium mb-1">State</label>
//                                     <input type="text" onChange={handleChange} value={HospitalUpdate.state} name="state"
//                                         className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <label className="text-sm font-medium mb-1">City</label>
//                                     <input type="text" onChange={handleChange} value={HospitalUpdate.city} name="city"
//                                         className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
//                                 </div>

//                                 <div className="md:col-span-2 flex flex-col">
//                                     <label className="text-sm font-medium mb-1">Address</label>
//                                     <textarea name="address" onChange={handleChange} value={HospitalUpdate.address}
//                                         className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <label className="text-sm font-medium mb-1">Hospital Logo URL</label>
//                                     <input type="text" onChange={handleChange} value={HospitalUpdate.hospitalLogo} name="hospitalLogo"
//                                         className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <label className="text-sm font-medium mb-1">Hospital Code</label>
//                                     <input type="text" onChange={handleChange} value={HospitalUpdate.hospitalCode} name="hospitalCode"
//                                         className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <label className="text-sm font-medium mb-1">Contact Person</label>
//                                     <input type="text" onChange={handleChange} value={HospitalUpdate.contactPerson} name="contactPerson"
//                                         className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <label className="text-sm font-medium mb-1">Contact Number</label>
//                                     <input type="text" onChange={handleChange} value={HospitalUpdate.contactNumber} name="contactNumber"
//                                         className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
//                                 </div>

//                                 <div className="md:col-span-2 flex flex-col">
//                                     <label className="text-sm font-medium mb-1">Email</label>
//                                     <input type="email" onChange={handleChange} value={HospitalUpdate.email} name="email"
//                                         className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
//                                 </div>

//                                 <div className="md:col-span-2 flex justify-center gap-4 mt-4">
//                                     <button type="submit"
//                                         className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
//                                         Update
//                                     </button>

//                                     <button type="button"
//                                         onClick={() => setisavailable(false)}
//                                         className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500">
//                                         Cancel
//                                     </button>
//                                 </div>

//                             </form>
//                         </div>
//                     }

//                 </div>
//             </div>
//         </>
//     )
// }

// export default AdminHome










import React, { useEffect, useState } from 'react';
import Sidebar from '../../component/Sidebar';
import { t } from 'i18next';
import LanguageSelector from '../../component/Language_selecter';
import axios from 'axios';
import Button from '@mui/material/Button';
import Navbar from '../../component/Navbar';

function AdminHome() {
    const initial = {
        name: "",
        state: "",
        city: "",
        address: "",
        hospitalLogo: "",
        hospitalCode: "",
        contactPerson: "",
        contactNumber: "",
        email: ""
    };

    const [HospitalUpdate, setHospitalsUpdate] = useState(initial);
    const [hospitals, setHospitals] = useState([]);
    const [hospitalsdelete, sethospitalsdelete] = useState();
    const [isavailable, setisavailable] = useState(false);
    const [id, setId] = useState("");

    // --- NEW PAGINATION STATES ---
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 6; // Grid mein 3 columns hain, isliye 6 (2 rows) ek achha limit hai.

    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            path: "/admindashboard"
        },
        {
            id: "Hospitals",
            label: "Hospitals",
            path: "/hospitals"
        },
        {
            id: "Audit_Management",
            label: "Audit Management",
            path: "/auditManagement"
        },
        {
            id: "logout",
            label: "Logout",
        },
    ];

    // useEffect dependency mein currentPage add kiya hai
    useEffect(() => {
        fetchHospitals();
    }, [currentPage]);

    const fetchHospitals = async () => {
        try {
            // Updated API URL with page and limit query parameters
            const res = await axios.get(`http://localhost:5000/api/Pagination/pagination?page=${currentPage}&limit=${limit}`, {
                withCredentials: true,
            });
            
            // Backend se data aur totalPages extract kar rahe hain
            setHospitals(res?.data?.data);
            setTotalPages(res?.data?.totalPages);

        } catch (error) {
            console.log(error);
        }
    };

    const edithospital = (hospital) => {
        setisavailable(true);
        setHospitalsUpdate(hospital);
        setId(hospital._id);
    }

    const handleChange = (e) => {
        setHospitalsUpdate({ ...HospitalUpdate, [e.target.name]: e.target.value })
    }

    const Submit = async (e) => {
        try {
            e.preventDefault();
            await axios.put(
                `http://localhost:5000/apihospital/hospital/${id}`,
                HospitalUpdate
            );
            setHospitalsUpdate(initial);
            setisavailable(false);
            fetchHospitals(); // Refresh current page data after update
        } catch (error) {
            console.log(error);
        }
    }

    const deleteHos = async (id) => {
        try {
            const responce = await axios.delete(`http://localhost:5000/apihospital/hospital/${id}`)
            sethospitalsdelete(responce?.data?.data)
            fetchHospitals(); // Refresh current page data after delete
            console.log("hospital deleted", responce?.data?.data)
        } catch (error) {
            console.error(error)
        }
    }

    // Handlers for Next & Previous Buttons
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className='main-screen'>
                <div className='navbar'> <Navbar /></div>
                <div className='ml-2 my-1'>
                    <Sidebar menuItems={menuItems} />
                </div>

                <div className='screen-right'>
                    <div className='flex justify-between text-black mt-4'>
                        <h1>{t("greeting")}</h1>
                        <LanguageSelector />
                    </div>

                    <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-100'>
                        {hospitals.length === 0 ? (
                            <p>No Hospitals Found</p>
                        ) : (
                            hospitals.map((e, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
                                >
                                    {e.hospitalLogo && (
                                        <img
                                            src={e.hospitalLogo}
                                            alt="logo"
                                            className="h-16 w-16 object-cover rounded mb-2"
                                        />
                                    )}
                                    <h2 className="text-lg font-bold text-indigo-600">
                                        {e.name}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {e.city}, {e.state}
                                    </p>
                                    <p className="text-sm mt-1">
                                        {e.contactPerson}
                                    </p>
                                    <p className="text-sm mt-1">
                                        {e.email}
                                    </p>
                                    <p className="text-xs mt-2 text-gray-400">
                                        Code: {e.hospitalCode}
                                    </p>
                                    <button
                                        onClick={() => edithospital(e)}
                                        className="mt-3 bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600 mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteHos(e._id)}
                                        className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* --- PAGINATION CONTROLS --- */}
                    {totalPages > 0 && (
                        <div className="flex justify-center items-center gap-4 mt-6 mb-8">
                            <button
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 font-medium rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                            >
                                Previous
                            </button>
                            
                            <span className="text-gray-700 font-semibold">
                                Page {currentPage} of {totalPages}
                            </span>
                            
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 font-medium rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                            >
                                Next
                            </button>
                        </div>
                    )}

                    {/* EDIT FORM (Unchanged) */}
                    {isavailable && (
                        <div className="p-6 bg-white shadow-xl rounded-xl mt-6 max-w-4xl mx-auto">
                            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
                                Update Hospital
                            </h2>
                            <form onSubmit={Submit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Form Inputs... */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Name</label>
                                    <input onChange={handleChange} value={HospitalUpdate.name} type="text" name="name"
                                        className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" required />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">State</label>
                                    <input type="text" onChange={handleChange} value={HospitalUpdate.state} name="state"
                                        className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">City</label>
                                    <input type="text" onChange={handleChange} value={HospitalUpdate.city} name="city"
                                        className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
                                </div>
                                <div className="md:col-span-2 flex flex-col">
                                    <label className="text-sm font-medium mb-1">Address</label>
                                    <textarea name="address" onChange={handleChange} value={HospitalUpdate.address}
                                        className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Hospital Logo URL</label>
                                    <input type="text" onChange={handleChange} value={HospitalUpdate.hospitalLogo} name="hospitalLogo"
                                        className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Hospital Code</label>
                                    <input type="text" onChange={handleChange} value={HospitalUpdate.hospitalCode} name="hospitalCode"
                                        className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Contact Person</label>
                                    <input type="text" onChange={handleChange} value={HospitalUpdate.contactPerson} name="contactPerson"
                                        className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Contact Number</label>
                                    <input type="text" onChange={handleChange} value={HospitalUpdate.contactNumber} name="contactNumber"
                                        className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
                                </div>
                                <div className="md:col-span-2 flex flex-col">
                                    <label className="text-sm font-medium mb-1">Email</label>
                                    <input type="email" onChange={handleChange} value={HospitalUpdate.email} name="email"
                                        className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none" />
                                </div>
                                <div className="md:col-span-2 flex justify-center gap-4 mt-4">
                                    <button type="submit"
                                        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
                                        Update
                                    </button>
                                    <button type="button"
                                        onClick={() => setisavailable(false)}
                                        className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default AdminHome;