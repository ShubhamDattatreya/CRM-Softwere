import React, { useState } from 'react'
import Sidebar from '../../component/Sidebar'
import { t } from 'i18next'
import LanguageSelector from '../../component/Language_selecter'
import Dashboard from '../superAdmin/Dashboard';
import TimeZone from '../../component/TImeZone';
import Button from '@mui/material/Button';
import axios from 'axios';
import Navbar from '../../component/Navbar';
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
}
function AdminDashboard() {
  const [Hospital, setHospital] = useState(initial)
  const [isavailable, Setisavailable] = useState(false);
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

  const createBtn = () => {
    Setisavailable(true)
  }
  const remove = () => {
    Setisavailable(false)
  }


  const handleChange = (e) => {
    setHospital({ ...Hospital, [e.target.name]: e.target.value })
  }

  const Submit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("https://crm-softwere.onrender.com/apihospital/hospital", Hospital);
      setHospital(response?.data);
      setHospital(initial);

    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <>
 <div className='navbar'><Navbar /></div>
      <div className='main-screen '>
       
        <Sidebar menuItems={menuItems} />
        <div className=' screen-right '>

          <div className='flex wrap justify-between card-text text-xl pt-8 pb-6 '>
            <h1 >{t("greeting")}</h1>
            <LanguageSelector />
          </div>

          <div className='my-4 flex justify-between mx-4 items-center'>
            <h2 className='text-orange-500 font-bold'>Welcome To Admin</h2>
            <button onClick={createBtn} className='tailwindsubmitbtn'> + Create Hospital</button>
          </div>

          {isavailable &&

            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">

              <div className="relative w-full max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">

                <button onClick={remove} className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold">
                  ✕
                </button>

                <h2 className="text-xl font-semibold mb-4 text-center">Add Hospital</h2>

                <form onSubmit={Submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input onChange={handleChange} value={Hospital.name} type="name" name="name" className="w-full border p-2 rounded" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">State</label>
                    <input type="text" onChange={handleChange} value={Hospital.state} name="state" className="w-full border p-2 rounded" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">City</label>
                    <input type="text" onChange={handleChange} value={Hospital.city} name="city" className="w-full border p-2 rounded" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium">Address</label>
                    <textarea name="address" onChange={handleChange} value={Hospital.address} className="w-full border p-2 rounded" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Hospital Logo URL</label>
                    <input type="text" onChange={handleChange} value={Hospital.hospitalLogo} name="hospitalLogo" className="w-full border p-2 rounded" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Hospital Code</label>
                    <input type="text" onChange={handleChange} value={Hospital.hospitalCode} name="hospitalCode" className="w-full border p-2 rounded" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Contact Person</label>
                    <input type="text" onChange={handleChange} value={Hospital.contactPerson} name="contactPerson" className="w-full border p-2 rounded" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Contact Number</label>
                    <input type="text" onChange={handleChange} value={Hospital.contactNumber} name="contactNumber" className="w-full border p-2 rounded" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input type="email" onChange={handleChange} value={Hospital.email} name="email" className="w-full border p-2 rounded" />
                  </div>

                  <div className="md:col-span-2 text-center mt-4">
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          }

         
            <div className=" text-black  rounded-lg ">
              <h1 className="card w-full text-xl font-bold">
                Audit Creation & Pillar Definition
              </h1>
         

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 bg-gray-100 min-h-full rounded-2xl">
              <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100">
                <h2 className="font-semibold text-lg text-gray-800 mb-4">People</h2>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500  cursor-pointer transition">Roles & Responsibilities</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Training Logs</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Resource Allocation</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Skill Matrix</p>
                </div>
              </div>

              <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100">
                <h2 className="font-semibold text-lg text-gray-800 mb-4">Process</h2>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500  cursor-pointer transition">SOPs (Standard Operating Procedures)</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Workflow Diagrams</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Incident Management</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Change Management</p>
                </div>
              </div>

              <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100">
                <h2 className="font-semibold text-lg text-gray-800 mb-4">Tech</h2>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500  cursor-pointer transition">System Access Control</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Data Security</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Infrastructure Health</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Backup & Recovery</p>
                </div>
              </div>

              <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100">
                <h2 className="font-semibold text-lg text-gray-800 mb-4">Governance</h2>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500  cursor-pointer transition">Compliance Checklist</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Risk Registry</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Policy Documents</p>
                  <p className="text-sm text-gray-500  cursor-pointer transition">Audit Trail</p>
                </div>
              </div>

            </div>
          </div>
          <div className='text-right pt-16'><TimeZone /></div>
        </div>
      </div>

    </>
  )
}

export default AdminDashboard