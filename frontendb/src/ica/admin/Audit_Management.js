import React, { useState } from 'react'
import Navbar from '../../component/Navbar'
import Sidebar from '../../component/Sidebar'
import LanguageSelector from '../../component/Language_selecter'
import { t } from 'i18next'
import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import { FiDelete } from 'react-icons/fi'
// import ButtonGroup from '@mui/material/ButtonGroup'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LaptopIcon from '@mui/icons-material/Laptop';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Audit_Management() {

    const [ispopup, setispopup] = useState(false)


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


    const pillersPopup = () => {
        setispopup(true)
    }
    
    return (
        <>

            <div className='navbar'><Navbar /></div>
            <div className='main-screen    }'>

                <Sidebar menuItems={menuItems} />
                <div className=' screen-right  text-gray-700 '>

                    <div className='flex wrap justify-between card-text text-xl pt-8 pb-6 '>
                        <h1 >{t("greeting")}</h1>
                        <LanguageSelector />
                    </div>

                    <h1 className='card-normal card-title '> Create Audit & Define Pillers</h1>

                    <div className='flex justify-between m-4 card h-auto'>

                        <div className='card grid p-4 w-1/2  gap-3 mr-2 border border-spacing-1'>
                            <h1 className='font-bold text-base text-cyan-700 '>Audit Detail</h1>

                            <div className='grid'>
                                <label>Audit Name</label>
                                <input className='input h-9 px-2 border border-gray-300' type='text' placeholder='Security Audit 2026' />
                            </div>
                            <div className='grid'>
                                <label>Description</label>
                                <TextField className="border border-gray-300" placeholder='Annual security audit '></TextField>
                            </div>
                            <div className='flex justify-between ' >
                                <div className='grid '>
                                    <label>Audit Type</label>
                                    <select className='input h-9 px-6 border border-gray-300'  >
                                        <option >NABH</option>
                                        <option>JCL</option>
                                        <option>JCL Enterprises</option>
                                    </select>
                                </div>

                                <div>
                                    <label>End date -</label>
                                    <input type='date' className='w-36 border border-gray-300' />
                                </div>
                            </div>
                        </div>
                        <div className='card grid px-4 py-2 w-1/2 ml-2 border border-spacing-1'>
                            <h1 className='font-bold text-base text-cyan-700 pb-2'>Define Pillers</h1>

                            <div className='grid gap-3 '>
                                <span>Add Or Remoove Pillers For This Audit</span>
                                <div className='input h-9 px-2 border border-gray-300 flex justify-between items-center'>
                                    <span  >People  </span>
                                    <span onClick={pillersPopup}><MoreVertIcon /></span>
                                </div>

                                <div className='input h-9 px-2 border border-gray-300 flex justify-between items-center'>
                                    <span  > Process</span>
                                    <span onClick={pillersPopup}><MoreVertIcon /></span>
                                </div >
                                <div className='input h-9 px-2 border border-gray-300 flex justify-between items-center'>
                                    <span  >Tech </span>
                                    <span onClick={pillersPopup}><MoreVertIcon /></span>
                                </div>
                                <div className='input h-9 px-2 border border-gray-300 flex justify-between items-center'>
                                    <span  >Governance </span>
                                    <span onClick={pillersPopup}><MoreVertIcon /></span>
                                </div>
                                {ispopup &&
                                    <div className="absolute right-12 mt-4 w-48 bg-white shadow-lg rounded-lg border z-50">

                                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                            Edit Pillar
                                        </button>

                                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                            Update Pillar
                                        </button>

                                        <button className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600">
                                            Delete Pillar
                                        </button>

                                    </div>
                                }


                            </div>
                            <button className='tailwindsubmitbtn mt-2 w-28 '>+ Add Piller</button>
                        </div>

                    </div>
                    <div className='flex justify-end mr-4'>
                        <button className='tailwindsubmitbtn '>Save Audit & Continue</button>
                    </div>

                    <div className='flex card-normal  justify-between ' >
                        <div >
                            <h1 className='card-title'>Upload Checklist By Piller</h1>
                            <span>Upload or checklist for each piller</span>
                        </div>
                        <button className='text-blue-600 font-bold border border-slate-300 w-40 h-10 '>Preview Checklist</button>
                    </div>

                    <div className='card-normal flex items-center justify-start gap-10 border border-gray-300 text-gray-700'>
                        <div className='flex items-center gap-2 '>
                            <PeopleOutlineOutlinedIcon />
                            <span>People</span>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <SettingsIcon />
                            <span>Process</span>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <LaptopIcon />
                            <span>Tech</span>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <AccountBalanceIcon />
                            <span>Governance</span>
                        </div>
                    </div>

                    {/* <div className="card m-4">
                        <div className="bg-white rounded-2xl shadow-lg p-7 w-full max-w-lg">

                            <h2 className="text-blue-600 font-semibold text-lg mb-5">
                                People Pillar Checklist
                            </h2>

                            <p className="text-gray-700 font-medium text-sm mb-2">
                                Upload Checklist (Excel / CSV)
                            </p>

                            <div className="border-2 border-dashed border-[#c7d2e8] rounded-xl bg-gray-50 flex items-center justify-between px-5 py-5 mb-4 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
                                <div className="flex items-center gap-3">
                                    <FileUploadOutlinedIcon />
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Drag & drop file here or{" "}
                                            <span className="text-blue-500 font-medium">click to browse</span>
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">Supports .xlsx, .xls, .csv</p>
                                    </div>
                                </div>
                                <button type="button" className="text-sm font-medium text-blue-600 border border-blue-400 rounded-lg px-4 py-2 hover:bg-blue-50 transition whitespace-nowrap ml-3">
                                    Browse Files
                                </button>
                            </div>

                            <div className="flex items-center gap-3 my-4">
                                <span className="flex-1 h-[1px] bg-gray-200" />
                                <span className="text-gray-400 text-xs font-medium tracking-wide">OR</span>
                                <span className="flex-1 h-[1px] bg-gray-200" />
                            </div>

                            <p className="text-gray-700 font-medium text-sm mb-2">
                                Add Checklist Manually
                            </p>

                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter checklist question"
                                    className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
                                />
                                <button type="button" className="text-sm font-medium text-blue-600 border border-blue-400 rounded-lg px-4 py-2.5 hover:bg-blue-50 transition whitespace-nowrap">
                                    Add Question
                                </button>
                            </div>

                        </div>
                    </div> */}


                </div>
            </div>
        </>

    )
}

export default Audit_Management