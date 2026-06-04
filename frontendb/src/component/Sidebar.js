

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import DashboardIcon from "@mui/icons-material/Dashboard";
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import FolderIcon from "@mui/icons-material/Folder";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function Sidebar({ menuItems }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    navigate("/", { replace: true });
  };
  const getIcon = (label) => {
    if (label.toLowerCase().includes("dashboard")) return <HomeOutlinedIcon fontSize="small" />;
    if (label.toLowerCase().includes("user")) return <PeopleIcon fontSize="small" />;
    if (label.toLowerCase().includes("setting")) return <SettingsIcon fontSize="small" />;
    if (label.toLowerCase().includes("logout")) return <LogoutIcon fontSize="small" />;
    return <FolderIcon fontSize="small" />;
  };
  return (
    <div className=" font-sans h-screen w-[19%] bg-[#252b36] text-white fixed top-16 left-0 shadow-2xl px-0 pt-4 overflow-y-auto">
      <div className="flex px-6 py-3 justify-between ">
        <h2 className=" text-lg font-semibold text-left ">Navigation</h2>
        <span className=" hover:bg-slate-400  justify-center rounded-3xl ">< SyncAltOutlinedIcon /></span>
      </div>
      <h2 className="px-6 py-3 text-[12px] text-slate-400">MAIN</h2>
      {menuItems?.map((item) => (
        <div key={item.id}>
          {item.id === "logout" ? (
            <div
              onClick={handleLogout}
              className="flex items-center gap-4 px-6 py-3 cursor-pointer w-full hover:bg-white/20 transition-all duration-200"
            >
              {getIcon(item.label)}
              {item.label}
            </div>
          ) : item.children ? (
            <div
              onClick={() => {
                toggleMenu(item.id);
                setActiveItem(item.id);
              }}
              className={`flex items-center justify-between gap-4 px-6 my-1 py-3 cursor-pointer w-full transition-all duration-200 
              ${activeItem === item.id ? " text-white shadow-md bg-white/20 " : "hover:bg-white/20"}`}
            >
              <span className="flex items-center gap-4">
                {getIcon(item.label)}
                {item.label}
              </span>


              {openMenu === item.id ? <MdKeyboardArrowDown size={18} /> : <MdKeyboardArrowRight size={18} />}
            </div>
          ) : (
            <Link
              to={item.path}
              onClick={() => setActiveItem(item.id)}
              className={`text-[15px] flex items-center gap-4 px-6 py-3 w-full transition-all duration-200 
              ${activeItem === item.id ? " text-white bg-white/20 shadow-sm" : "hover:bg-white/20"}`}
            >
              {getIcon(item.label)}
              {item.label}
            </Link>
          )}
          {openMenu === item.id && item.children && (
            <div className="pl-6 mt-1 space-y-1 text-[15px]">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.path}
                  onClick={() => setActiveItem(child.name)}
                  className={`flex items-center gap-4 p-2 rounded-lg transition-all duration-200 
                  ${activeItem === child.name ? " text-white bg-white/20 shadow-sm" : "text-white/80 hover:bg-white/20"}`}
                >
                  <FolderIcon fontSize="small" />
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}