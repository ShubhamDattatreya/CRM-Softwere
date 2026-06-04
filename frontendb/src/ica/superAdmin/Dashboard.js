// import React from 'react'
// import Sidebar from '../../component/Sidebar'
// import LanguageSelector from '../../component/Language_selecter'
// // import { t } from 'i18next'
// import TimeZone from '../../component/TImeZone'
// import { useTranslation } from 'react-i18next';
// import Navbar from '../../component/Navbar';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import profilePic from "../../logo/profile.jpg"
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import { Doughnut } from "react-chartjs-2"

// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const menuItems = [
//     {
//         id: "dashboard",
//         label: "Dashboard",
//         path: "/dashboard"

//     },
//     {
//         id: "users",
//         label: "User Management",
//         children: [
//             { name: "Pending Request", path: "/userManagement" }
//         ],
//     },
//     {
//         id: "logout",
//         label: "Logout",
//     },
// ];


// const data = {
//     labels: [
//         'Red',
//         'Blue',
//         'Yellow',
//     ],
//     datasets: [{
//         data: [150, 120, 100],
//         backgroundColor: [
//             'rgb(255, 99, 132)',
//             'rgb(54, 162, 235)',
//             'rgb(255, 205, 86)'
//         ],
       
//     }]
// };

// const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: "bottom"
//         },
//         tooltip: {
//             enabled: true
//         }
//     },
//     cutout: "70%" // doughnut hole size
// };


// function Dashboard() {
//     const { t } = useTranslation();
//     return (
//         <>

//             <div className='navbar'><Navbar /></div>

//             <div className='main-screen '>

//                 <Sidebar menuItems={menuItems} />
//                 <div className=' screen-right'>

//                     <div className='flex wrap justify-between card-text text-xl  pt-8 pb-6' >
//                         <span  ><strong> Home</strong> - Dashboard</span>
//                         <span className='flex gap-2 items-center' >
//                             <img className='profileImage w-10 h-10' src={profilePic} />
//                             <img className='profileImage w-10 h-10' src={profilePic} />
//                             <img className='profileImage w-10 h-10' src={profilePic} />
//                             <Fab color="primary" aria-label="add" style={{ width: "38px", height: "10px", zIndex: "1" }}>
//                                 <AddIcon />
//                             </Fab>

//                         </span>
//                     </div>

//                     <div className=' flex justify-between card-text shadow-sm py-1 items-center'>
//                         <h1 > <HomeOutlinedIcon /> / Home / Dashboard  {/* {t("greeting")} */} </h1>
//                         <h1  > <LanguageSelector /></h1>
//                     </div>




//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-4 mx-4">

//                         <div className="card">

//                             <div className="flex items-center justify-between">
//                                 <div className="p-2 bg-blue-100 rounded-full">
//                                     <span className="text-blue-600 text-xl">👥</span>
//                                 </div>
//                                 <span className="text-xs text-green-600 font-medium">
//                                     +8.5% vs last month
//                                 </span>
//                             </div>

//                             <h2 className="mt-4 text-lg font-semibold text-blue-600">
//                                 People
//                             </h2>

//                             <p className="text-2xl font-bold">1,248</p>
//                             <p className="text-sm text-gray-500">Total Users</p>


//                         </div>


//                         <div className="card">

//                             <div className="flex items-center justify-between">
//                                 <div className="p-2 bg-green-100 rounded-full">
//                                     <span className="text-green-600 text-xl">⚙️</span>
//                                 </div>
//                                 <span className="text-xs text-green-600 font-medium">
//                                     +5.2% vs last month
//                                 </span>
//                             </div>

//                             <h2 className="mt-4 text-lg font-semibold text-green-600">
//                                 Process
//                             </h2>

//                             <p className="text-2xl font-bold">820</p>
//                             <p className="text-sm text-gray-500">Total Tasks</p>


//                         </div>


//                         <div className="card">

//                             <div className="flex items-center justify-between ">
//                                 <div className="p-2 bg-purple-100 rounded-full">
//                                     <span className="text-purple-600 text-xl">💻</span>
//                                 </div>
//                                 <span className="text-xs text-green-600 font-medium">
//                                     +3.1% vs last month
//                                 </span>
//                             </div>

//                             <h2 className="mt-4 text-lg font-semibold text-purple-600">
//                                 Tech
//                             </h2>

//                             <p className="text-2xl font-bold">540</p>
//                             <p className="text-sm text-gray-500">Active Systems</p>


//                         </div>


//                         <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">

//                             <div className="flex items-center justify-between">
//                                 <div className="p-2 bg-orange-100 rounded-full">
//                                     <span className="text-orange-600 text-xl">🏛️</span>
//                                 </div>
//                                 <span className="text-xs text-green-600 font-medium">
//                                     +2.4% vs last month
//                                 </span>
//                             </div>

//                             <h2 className="mt-4 text-lg font-semibold text-orange-600">
//                                 Governance
//                             </h2>

//                             <p className="text-2xl font-bold">320</p>
//                             <p className="text-sm text-gray-500">Policies</p>


//                         </div>

//                     </div>



//                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6  mx-4" >
//                         <div className="bg-white rounded-2xl shadow p-5">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="font-semibold text-lg">People Overview</h2>
//                                 <button className="text-blue-500 text-sm">View all</button>
//                             </div>

//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between"><span>Total Users</span><b>1,248</b></div>
//                                 <div className="flex justify-between"><span>Active Users</span><b>978</b></div>
//                                 <div className="flex justify-between"><span>New Users</span><b>156</b></div>
//                                 <div className="flex justify-between"><span>Departments</span><b>24</b></div>
//                                 <div className="flex justify-between"><span>Roles</span><b>7</b></div>
//                             </div>
                        
//                             <Doughnut
//                                 data={data}
//                                 options={options}
//                             />





//                         </div>

//                         <div className="bg-white rounded-2xl shadow p-5">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="font-semibold text-lg">Process Overview</h2>
//                                 <button className="text-blue-500 text-sm">View all</button>
//                             </div>

//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between"><span>Total Processes</span><b>356</b></div>
//                                 <div className="flex justify-between"><span>Completed</span><b className="text-green-600">242</b></div>
//                                 <div className="flex justify-between"><span>In Progress</span><b>78</b></div>
//                                 <div className="flex justify-between"><span>Pending</span><b className="text-orange-500">26</b></div>
//                                 <div className="flex justify-between"><span>Overdue</span><b className="text-red-500">10</b></div>
//                             </div>

//                             <div className="mt-5 flex justify-center">
                                 
//                             <Doughnut
//                                 data={data}
//                                 options={options}
//                             />


//                             </div>
//                         </div>


//                         <div className="bg-white rounded-2xl shadow p-5">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="font-semibold text-lg">Tech Overview</h2>
//                                 <button className="text-blue-500 text-sm">View all</button>
//                             </div>

//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between"><span>System Uptime</span><b className="text-green-600">99.92%</b></div>
//                                 <div className="flex justify-between"><span>Avg Response</span><b>218 ms</b></div>
//                                 <div className="flex justify-between"><span>Active Services</span><b>24</b></div>
//                                 <div className="flex justify-between"><span>Open Incidents</span><b className="text-red-500">2</b></div>
//                                 <div className="flex justify-between"><span>Error Rate</span><b className="text-green-600">0.03%</b></div>
//                             </div>
  
//                             <Doughnut
//                                 data={data}
//                                 options={options}
//                             />


//                             {/* <div className="mt-5 h-20 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg"></div> */}
//                         </div>

//                         <div className="bg-white rounded-2xl shadow p-5">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="font-semibold text-lg">Governance Overview</h2>
//                                 <button className="text-blue-500 text-sm">View all</button>
//                             </div>

//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between"><span>Active Policies</span><b>84</b></div>
//                                 <div className="flex justify-between"><span>Policies Updated</span><b>6</b></div>
//                                 <div className="flex justify-between"><span>Audit Logs</span><b>1,356</b></div>
//                                 <div className="flex justify-between"><span>Compliance Score</span><b className="text-green-600">92%</b></div>
//                                 <div className="flex justify-between"><span>Violations</span><b className="text-red-500">3</b></div>
//                             </div>

                             
//                             <Doughnut
//                                 data={data}
//                                 options={options}
//                             />



//                             <p className="text-center text-sm mt-2">Compliance Score 92%</p>
//                         </div>

//                     </div>
//                     <div className=" rounded-xl ">
//                         <h1 className="w-full card  text-xl font-bold my-6 ">
//                             Supported Audit Standards
//                         </h1>
//                         <div className=" card-parent">
//                             <div className="card  text-center">
//                                 <img
//                                     src="/images/nabh.png"
//                                     alt="NABH"
//                                     className="h-20 mx-auto mb-2"
//                                 />
//                                 <p className="font-semibold text-red-600">NABH</p>
//                             </div>

//                             <div className="card text-center">
//                                 <img
//                                     src="/images/jci.png"
//                                     alt="JCI"
//                                     className="h-20 mx-auto mb-2"
//                                 />
//                                 <p className="font-semibold text-blue-600">JCI Accredited</p>
//                             </div>

//                             <div className="card text-center">
//                                 <img
//                                     src="/images/jci-enterprises.png"
//                                     alt="JCI Enterprises"
//                                     className="h-20 mx-auto mb-2"
//                                 />
//                                 <p className="font-semibold text-blue-700">JCI Enterprises</p>
//                             </div>

//                         </div>
//                         <div className=' text-right pt-4'><TimeZone /></div>
//                     </div>

//                 </div>
//             </div>



//         </>
//     )
// }

// export default Dashboard

// import React from 'react'
// import Sidebar from '../../component/Sidebar'
// import LanguageSelector from '../../component/Language_selecter'
// import TimeZone from '../../component/TImeZone'
// import { useTranslation } from 'react-i18next';
// import Navbar from '../../component/Navbar';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import profilePic from "../../logo/profile.jpg"
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const menuItems = [
//     {
//         id: "dashboard",
//         label: "Dashboard",
//         path: "/dashboard"
//     },
//     {
//         id: "users",
//         label: "User Management",
//         children: [
//             { name: "Pending Request", path: "/userManagement" }
//         ],
//     },
//     {
//         id: "logout",
//         label: "Logout",
//     },
// ];

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const lineOptions = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const lineData = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [300, 750, -200, 600, -800, 400, 950],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: [-500, 200, 800, -100, 700, -300, 500],
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };


// function Dashboard() {
//     const { t } = useTranslation();
//     return (
//         <>
//             <div className='navbar'><Navbar /></div>

//             <div className='main-screen '>
//                 <Sidebar menuItems={menuItems} />
//                 <div className=' screen-right'>

//                     <div className='flex wrap justify-between card-text text-xl  pt-8 pb-6' >
//                         <span  ><strong> Home</strong> - Dashboard</span>
//                         <span className='flex gap-2 items-center' >
//                             <img className='profileImage w-10 h-10' src={profilePic} />
//                             <img className='profileImage w-10 h-10' src={profilePic} />
//                             <img className='profileImage w-10 h-10' src={profilePic} />
//                             <Fab color="primary" aria-label="add" style={{ width: "38px", height: "10px", zIndex: "1" }}>
//                                 <AddIcon />
//                             </Fab>
//                         </span>
//                     </div>

//                     <div className=' flex justify-between card-text shadow-sm py-1 items-center'>
//                         <h1 > <HomeOutlinedIcon /> / Home / Dashboard</h1>
//                         <h1  > <LanguageSelector /></h1>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-4 mx-4">
//                         <div className="card">
//                             <div className="flex items-center justify-between">
//                                 <div className="p-2 bg-blue-100 rounded-full">
//                                     <span className="text-blue-600 text-xl">👥</span>
//                                 </div>
//                                 <span className="text-xs text-green-600 font-medium">+8.5% vs last month</span>
//                             </div>
//                             <h2 className="mt-4 text-lg font-semibold text-blue-600">People</h2>
//                             <p className="text-2xl font-bold">1,248</p>
//                             <p className="text-sm text-gray-500">Total Users</p>
//                         </div>

//                         <div className="card">
//                             <div className="flex items-center justify-between">
//                                 <div className="p-2 bg-green-100 rounded-full">
//                                     <span className="text-green-600 text-xl">⚙️</span>
//                                 </div>
//                                 <span className="text-xs text-green-600 font-medium">+5.2% vs last month</span>
//                             </div>
//                             <h2 className="mt-4 text-lg font-semibold text-green-600">Process</h2>
//                             <p className="text-2xl font-bold">820</p>
//                             <p className="text-sm text-gray-500">Total Tasks</p>
//                         </div>

//                         <div className="card">
//                             <div className="flex items-center justify-between ">
//                                 <div className="p-2 bg-purple-100 rounded-full">
//                                     <span className="text-purple-600 text-xl">💻</span>
//                                 </div>
//                                 <span className="text-xs text-green-600 font-medium">+3.1% vs last month</span>
//                             </div>
//                             <h2 className="mt-4 text-lg font-semibold text-purple-600">Tech</h2>
//                             <p className="text-2xl font-bold">540</p>
//                             <p className="text-sm text-gray-500">Active Systems</p>
//                         </div>

//                         <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
//                             <div className="flex items-center justify-between">
//                                 <div className="p-2 bg-orange-100 rounded-full">
//                                     <span className="text-orange-600 text-xl">🏛️</span>
//                                 </div>
//                                 <span className="text-xs text-green-600 font-medium">+2.4% vs last month</span>
//                             </div>
//                             <h2 className="mt-4 text-lg font-semibold text-orange-600">Governance</h2>
//                             <p className="text-2xl font-bold">320</p>
//                             <p className="text-sm text-gray-500">Policies</p>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6  mx-4" >
//                         <div className="bg-white rounded-2xl shadow p-5">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="font-semibold text-lg">People Overview</h2>
//                                 <button className="text-blue-500 text-sm">View all</button>
//                             </div>
//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between"><span>Total Users</span><b>1,248</b></div>
//                                 <div className="flex justify-between"><span>Active Users</span><b>978</b></div>
//                                 <div className="flex justify-between"><span>New Users</span><b>156</b></div>
//                                 <div className="flex justify-between"><span>Departments</span><b>24</b></div>
//                                 <div className="flex justify-between"><span>Roles</span><b>7</b></div>
//                             </div>
//                             <Line options={lineOptions} data={lineData} />
//                         </div>

//                         <div className="bg-white rounded-2xl shadow p-5">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="font-semibold text-lg">Process Overview</h2>
//                                 <button className="text-blue-500 text-sm">View all</button>
//                             </div>
//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between"><span>Total Processes</span><b>356</b></div>
//                                 <div className="flex justify-between"><span>Completed</span><b className="text-green-600">242</b></div>
//                                 <div className="flex justify-between"><span>In Progress</span><b>78</b></div>
//                                 <div className="flex justify-between"><span>Pending</span><b className="text-orange-500">26</b></div>
//                                 <div className="flex justify-between"><span>Overdue</span><b className="text-red-500">10</b></div>
//                             </div>
//                             <div className="mt-5 flex justify-center">
//                                 <Line options={lineOptions} data={lineData} />
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-2xl shadow p-5">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="font-semibold text-lg">Tech Overview</h2>
//                                 <button className="text-blue-500 text-sm">View all</button>
//                             </div>
//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between"><span>System Uptime</span><b className="text-green-600">99.92%</b></div>
//                                 <div className="flex justify-between"><span>Avg Response</span><b>218 ms</b></div>
//                                 <div className="flex justify-between"><span>Active Services</span><b>24</b></div>
//                                 <div className="flex justify-between"><span>Open Incidents</span><b className="text-red-500">2</b></div>
//                                 <div className="flex justify-between"><span>Error Rate</span><b className="text-green-600">0.03%</b></div>
//                             </div>
//                             <Line options={lineOptions} data={lineData} />
//                         </div>

//                         <div className="bg-white rounded-2xl shadow p-5">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="font-semibold text-lg">Governance Overview</h2>
//                                 <button className="text-blue-500 text-sm">View all</button>
//                             </div>
//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between"><span>Active Policies</span><b>84</b></div>
//                                 <div className="flex justify-between"><span>Policies Updated</span><b>6</b></div>
//                                 <div className="flex justify-between"><span>Audit Logs</span><b>1,356</b></div>
//                                 <div className="flex justify-between"><span>Compliance Score</span><b className="text-green-600">92%</b></div>
//                                 <div className="flex justify-between"><span>Violations</span><b className="text-red-500">3</b></div>
//                             </div>
//                             <Line options={lineOptions} data={lineData} />
//                             <p className="text-center text-sm mt-2">Compliance Score 92%</p>
//                         </div>
//                     </div>

//                     <div className=" rounded-xl ">
//                         <h1 className="w-full card  text-xl font-bold my-6 ">
//                             Supported Audit Standards
//                         </h1>
//                         <div className=" card-parent">
//                             <div className="card  text-center">
//                                 <img src="/images/nabh.png" alt="NABH" className="h-20 mx-auto mb-2" />
//                                 <p className="font-semibold text-red-600">NABH</p>
//                             </div>
//                             <div className="card text-center">
//                                 <img src="/images/jci.png" alt="JCI" className="h-20 mx-auto mb-2" />
//                                 <p className="font-semibold text-blue-600">JCI Accredited</p>
//                             </div>
//                             <div className="card text-center">
//                                 <img src="/images/jci-enterprises.png" alt="JCI Enterprises" className="h-20 mx-auto mb-2" />
//                                 <p className="font-semibold text-blue-700">JCI Enterprises</p>
//                             </div>
//                         </div>
//                         <div className=' text-right pt-4'><TimeZone /></div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Dashboard


import React from 'react'
import Sidebar from '../../component/Sidebar'
import LanguageSelector from '../../component/Language_selecter'
import TimeZone from '../../component/TImeZone'
import { useTranslation } from 'react-i18next';
import Navbar from '../../component/Navbar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import profilePic from "../../logo/profile.jpg"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
    },
};

const randomData = () => labels.map(() => Math.floor(Math.random() * 2000) - 1000);

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: randomData(),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: randomData(),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const menuItems = [
    {
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

function Dashboard() {
    const { t } = useTranslation();
    return (
        <>
            <div className='navbar'><Navbar /></div>

            <div className='main-screen'>
                <Sidebar menuItems={menuItems} />
                <div className='screen-right'>

                    <div className='flex wrap justify-between card-text text-xl pt-8 pb-6'>
                        <span><strong>Home</strong> - Dashboard</span>
                        <span className='flex gap-2 items-center'>
                            <img className='profileImage w-10 h-10' src={profilePic} />
                            <img className='profileImage w-10 h-10' src={profilePic} />
                            <img className='profileImage w-10 h-10' src={profilePic} />
                            <Fab color="primary" aria-label="add" style={{ width: "38px", height: "10px", zIndex: "1" }}>
                                <AddIcon />
                            </Fab>
                        </span>
                    </div>

                    <div className='flex justify-between card-text shadow-sm py-1 items-center'>
                        <h1><HomeOutlinedIcon /> / Home / Dashboard</h1>
                        <h1><LanguageSelector /></h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-4 mx-4">
                        <div className="card">
                            <div className="flex items-center justify-between">
                                <div className="p-2 bg-blue-100 rounded-full">
                                    <span className="text-blue-600 text-xl">👥</span>
                                </div>
                                <span className="text-xs text-green-600 font-medium">+8.5% vs last month</span>
                            </div>
                            <h2 className="mt-4 text-lg font-semibold text-blue-600">People</h2>
                            <p className="text-2xl font-bold">1,248</p>
                            <p className="text-sm text-gray-500">Total Users</p>
                        </div>

                        <div className="card">
                            <div className="flex items-center justify-between">
                                <div className="p-2 bg-green-100 rounded-full">
                                    <span className="text-green-600 text-xl">⚙️</span>
                                </div>
                                <span className="text-xs text-green-600 font-medium">+5.2% vs last month</span>
                            </div>
                            <h2 className="mt-4 text-lg font-semibold text-green-600">Process</h2>
                            <p className="text-2xl font-bold">820</p>
                            <p className="text-sm text-gray-500">Total Tasks</p>
                        </div>

                        <div className="card">
                            <div className="flex items-center justify-between">
                                <div className="p-2 bg-purple-100 rounded-full">
                                    <span className="text-purple-600 text-xl">💻</span>
                                </div>
                                <span className="text-xs text-green-600 font-medium">+3.1% vs last month</span>
                            </div>
                            <h2 className="mt-4 text-lg font-semibold text-purple-600">Tech</h2>
                            <p className="text-2xl font-bold">540</p>
                            <p className="text-sm text-gray-500">Active Systems</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div className="p-2 bg-orange-100 rounded-full">
                                    <span className="text-orange-600 text-xl">🏛️</span>
                                </div>
                                <span className="text-xs text-green-600 font-medium">+2.4% vs last month</span>
                            </div>
                            <h2 className="mt-4 text-lg font-semibold text-orange-600">Governance</h2>
                            <p className="text-2xl font-bold">320</p>
                            <p className="text-sm text-gray-500">Policies</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mx-4">
                        <div className="bg-white rounded-2xl shadow p-5">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-semibold text-lg">People Overview</h2>
                                <button className="text-blue-500 text-sm">View all</button>
                            </div>
                            <div className="space-y-2 text-sm mb-6">
                                <div className="flex justify-between"><span>Total Users</span><b>1,248</b></div>
                                <div className="flex justify-between"><span>Active Users</span><b>978</b></div>
                                <div className="flex justify-between"><span>New Users</span><b>156</b></div>
                                <div className="flex justify-between"><span>Departments</span><b>24</b></div>
                                <div className="flex justify-between"><span>Roles</span><b>7</b></div>
                            </div>
                         
                            <Line options={options} data={data} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-5">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-semibold text-lg">Process Overview</h2>
                                <button className="text-blue-500 text-sm">View all</button>
                            </div>
                            <div className="space-y-2 text-sm mb-6">
                                <div className="flex justify-between"><span>Total Processes</span><b>356</b></div>
                                <div className="flex justify-between"><span>Completed</span><b className="text-green-600">242</b></div>
                                <div className="flex justify-between"><span>In Progress</span><b>78</b></div>
                                <div className="flex justify-between"><span>Pending</span><b className="text-orange-500">26</b></div>
                                <div className="flex justify-between"><span>Overdue</span><b className="text-red-500">10</b></div>
                            </div>
                            <div className="mt-5 flex justify-center">
                                <Line options={options} data={data} />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-5">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-semibold text-lg">Tech Overview</h2>
                                <button className="text-blue-500 text-sm">View all</button>
                            </div>
                            <div className="space-y-2 text-sm mb-6">
                                <div className="flex justify-between"><span>System Uptime</span><b className="text-green-600">99.92%</b></div>
                                <div className="flex justify-between"><span>Avg Response</span><b>218 ms</b></div>
                                <div className="flex justify-between"><span>Active Services</span><b>24</b></div>
                                <div className="flex justify-between"><span>Open Incidents</span><b className="text-red-500">2</b></div>
                                <div className="flex justify-between"><span>Error Rate</span><b className="text-green-600">0.03%</b></div>
                            </div>
                            <Line options={options} data={data} />
                        </div>

                        <div className="bg-white rounded-2xl shadow p-5">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-semibold text-lg">Governance Overview</h2>
                                <button className="text-blue-500 text-sm">View all</button>
                            </div>
                            <div className="space-y-2 text-sm mb-6">
                                <div className="flex justify-between"><span>Active Policies</span><b>84</b></div>
                                <div className="flex justify-between"><span>Policies Updated</span><b>6</b></div>
                                <div className="flex justify-between"><span>Audit Logs</span><b>1,356</b></div>
                                <div className="flex justify-between"><span>Compliance Score</span><b className="text-green-600">92%</b></div>
                                <div className="flex justify-between"><span>Violations</span><b className="text-red-500">3</b></div>
                            </div>
                            <Line options={options} data={data} />
                            <p className="text-center text-sm mt-2">Compliance Score 92%</p>
                        </div>
                    </div>

                  

                </div>
            </div>
        </>
    )
}

export default Dashboard