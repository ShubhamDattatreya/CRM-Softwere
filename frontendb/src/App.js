import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import Home from './SuperAdmin';
import Signup from './Signup';
import Login from './login';

import LanguageSelector from './component/Language_selecter';
import Sidebar from './component/Sidebar';
import UserManagement from './ica/superAdmin/UserManagement';
import Dashboard from './ica/superAdmin/Dashboard';
import AdminDashboard from './ica/admin/Dashboard';

import SuperAuditorDashboard from './ica/Super Auditor/Dashboard';
import AdminHome from './ica/admin/AdminHome';
import CxoDashboard from './Hospital/CXO.js/Dashboard';
import Audit_Management from './ica/admin/Audit_Management';
// import CxoDashboard from './Hospital/CXO.js/Dashboard';
// import UserManagement from './ica/superAdmin/UserManagement';



function App() {  


  return (
    <>
   
   
      {/* <LanguageSelector /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/admindashboard' element={<AdminDashboard/>} />
        <Route path='/superauditor' element={<SuperAuditorDashboard/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/userManagement' element={<UserManagement />} />
        <Route path='/hospitals' element={<AdminHome/>} />
        <Route path='/cxodashboard' element={<CxoDashboard/>} />
        <Route path='/auditManagement' element={<Audit_Management/>} />
      </Routes>
     
    </>
  );
}

export default App;