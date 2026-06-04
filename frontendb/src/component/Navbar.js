// import React, { useState } from 'react'

// import infinis from "../logo/infinis.png"
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
// import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
// import SearchSharpIcon from '@mui/icons-material/SearchSharp';
// import { FiSearch } from "react-icons/fi";
// function Navbar() {
//   const [available, setavailable] = useState(false)

//   const profile = () => {
//     setavailable(true)

//   }


//   return (

//     <div >
//     <div className='flex items-center py-4  bg-[#2c2d33] text-white  justify-between px-5' >


//       <ul className='flex gap-6'>
//         <img className='w-14 h-8' src={infinis} />
//         <li className='text-xl font-bold '>Infinis Q Panel</li>
//       </ul>

//       <div className='flex gap-3'>
//         <span > <  GridViewSharpIcon /></span>
//         <span > <QuestionAnswerOutlinedIcon /></span>
//       </div>

//       <div className='flex items-center md: w-[470px] rounded-3xl bg-[#2c2d33] border border-slate-500 h-[40px] align-middle pl-3 gap-3'>

//         <div className="relative w-[418px]">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-[#2c2d33] w-full h-[33px] pl-10 rounded-2xl text-white outline-none"
//           />
//         </div>
//       </div>

//       <div className='flex items-center gap-2'>
//         < NotificationsNoneOutlinedIcon />
//         <ul onClick={profile} className='flex gap-4 items-center hover:bg-slate-600 rounded-3xl p-1 transition-all duration-200 '>
//           <img
//             className='w-8 h-8 p-1 rounded-full object-cover border border-gray-300 align-middle'
//             src={infinis}
//             alt="profile"
//           />
//           <span className='pb-1'>victoria</span>
//         </ul>

//       </div>



//     </div>

import React, { useState } from 'react'
import infinis from "../logo/infinis.png"
import profileimage from "../logo/profile.jpg"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { FiSearch } from "react-icons/fi";

function Navbar() {
  const popupdata = " flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"

  const [available, setavailable] = useState(false)

  const profile = () => {
    setavailable(!available)
  }

  return (
    <div className='fixed top-0 left-0 w-full z-50 border-b border-slate-700 font-sans'  >
      <div className='flex items-center py-3 bg-[#252b36] text-white  justify-between px-6' >
        <div className='flex gap-20 items-center'>
          <ul className='flex gap-4 items-center'>
            <img className='w-13 h-8' src={infinis} />
            <li className='text-[1.125rem] font-bold '>Infinis Q Panel</li>
          </ul>
          <div className='flex gap-6'>
            <span > < GridViewOutlinedIcon style={{ width: "20px" }} /></span>
            <span > <QuestionAnswerOutlinedIcon style={{ width: "20px" }} /></span>
          </div>
        </div>
        <div className='flex items-center md: w-[470px] rounded-3xl bg-[#252b36] border border-slate-600 h-[40px] align-middle pl-2 gap-3'>
          <div className="relative w-[418px] ">
            <FiSearch className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#252b36] w-full h-[33px] pl-8 rounded-2xl text-white outline-none"
            />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          < NotificationsNoneOutlinedIcon />


          <div className='relative'>
            <ul onClick={profile} className='flex gap-3 items-center hover:bg-slate-600 rounded-3xl p-1 transition-all duration-200 cursor-pointer'>
              <img
                className='profileImage h-8 w-8'
                src={profileimage}
                alt="profile"
              />
              <span className=' text-[15px]'>Victoria</span>
            </ul>


            {available &&
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg py-2 text-black z-50">
                <div className={popupdata}>
                  <div className="flex items-center gap-3">
                    <span><PersonIcon /></span>
                    <span className="text-sm">My profile</span>
                  </div>
                </div>
                <div className={popupdata}>
                  <div className="flex items-center gap-3">
                    <span><AttachMoneyIcon /></span>
                    <span className="text-sm">My subscription</span>
                  </div>
                </div>
                <div className={popupdata}>
                  <div className="flex items-center gap-3">
                    <span><ShoppingCartOutlinedIcon /></span>
                    <span className="text-sm">My orders</span>
                  </div>
                </div>
                <div className={popupdata}>
                  <div className="flex items-center gap-3">
                    <span><EmailOutlinedIcon /></span>
                    <span className="text-sm">My inbox</span>
                  </div>
                  <span className="text-white text-xs px-2 py-0.5 rounded-full"></span>
                </div>
                <div className="border-t my-2"></div>
                <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <span><SettingsOutlinedIcon /></span>
                  <span className="text-sm">Account settings</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <span><LogoutRoundedIcon /></span>
                  <span className="text-sm">Logout</span>
                </div>
              </div>
            }
          </div>

        </div>
      </div>
    </div>
  )
}
export default Navbar