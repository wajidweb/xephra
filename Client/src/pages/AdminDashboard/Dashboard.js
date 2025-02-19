import React, { useState, useEffect } from "react";
import Header from "../../components/AdminDashobard/Header";
import { menuItems } from "../../components/AdminDashobard/AdminMenus";
import PostedEvents from "../../components/AdminDashobard/PostedEvents";
import NewEvents from "../../components/AdminDashobard/NewEvents";
import RankingApproval from "../../components/AdminDashobard/RankingApproval";
import Dashboardadmin from "../../components/AdminDashobard/Dashboardadmin";
import logo from "../../assets/xephra logo-01.png";
import AdminProfile from "../../components/AdminDashobard/AdminProfile";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../redux/features/profileSlice";
import CompletedEvents from "../../components/AdminDashobard/CompletedEvents";
import RankingBoard from "../../components/AdminDashobard/RankingBoard";
// Sidebar component
function Sidebar({ onMenuClick, dark }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutSubmit = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400  pl-6  fixed top-0 left-0 h-screen w-64 ">
          <a className="flex items-center space-x-3 rtl:space-x-reverse ms-5 bg-transparent mb-3">
            <img src={logo} className="h-8 w-32" alt="Flowbite Logo" />
          </a>
    
          <div className="bg-[#292622] bg-opacity-60   flex flex-col h-full  justify-between items-start rounded">
            <ul className="mt-6  w-full">
              {menuItems.map((item, index) => (
                <li
                  key={item.key}
                  className="relative px-6 py-3 cursor-pointer bg-transparent hover:bg-[#a3676f] text-[#D4AD66] hover:text-white"
                  onClick={() => onMenuClick(item.key)}
                >
                  <span
                    className={`absolute inset-y-0 left-0 w-1
                  }`}
                    aria-hidden="true"
                  />
                  <a
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  dark:hover:text-gray-200 dark:text-gray-100`}
                  >
                    <span className="ml-4">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-center items-center pb-10  w-full">
              <div className="px-6 my-2">
                <button
                  className={`flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 border-2 border-[#C9B796] rounded-lg focus:outline-none focus:shadow-outline-purple ${
                    dark
                      ? " text-[#C9B796] hover:text-black hover:bg-gradient-to-r from-[#D19F43] via-[#d1a759] to-[#eb9a0d] active:bg-[#A15D66]"
                      : "bg-gradient-to-r from-[#D19F43] via-[#d1a759] to-[#eb9a0d] active:bg-[#8b796b] text-black"
                  }`}
                >
                  Chat System
                  <span className="ml-2" aria-hidden="true"></span>
                </button>
              </div>
              <div className="px-6 my-2">
                <button
                  onClick={logoutSubmit}
                  className={`flex items-center justify-center w-full px-8 py-2 text-sm font-medium leading-5 text-[#C9B796] hover:text-black hover:bg-gradient-to-r from-[#D19F43] via-[#d1a759] to-[#eb9a0d]  transition-colors duration-150 border-2 border-[#C9B796] rounded-lg focus:outline-none focus:shadow-outline-purple ${
                    dark
                      ? "bg-[#854951] active:bg-[#A15D66]"
                      : "text-[#C9B796] hover:text-black hover:bg-gradient-to-r from-[#D19F43] via-[#d1a759] to-[#eb9a0d] hover:bg-[#A15D66] active:bg-[#8b796b]"
                  }`}
                >
                  Log out
                  <span className="ml-2" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}

// Mobile Sidebar component
function MobileSidebar({ dark, onMenuClick, toggleSideMenu, isSideMenuOpen }) {
  return (
    <div
      className={`fixed inset-y-0 z-20 w-64 mt-16 overflow-y-auto transform transition-transform ${
        isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
      } ${dark ? "bg-[#292622] bg-opacity-90" : "bg-[#232122]"} md:hidden`}
    >
      <Sidebar
        dark={dark}
        onMenuClick={(key) => {
          onMenuClick(key);
          toggleSideMenu(); // Close sidebar after clicking an item
        }}
      />
    </div>
  );
}

// Main Dashboard component
function Dashboard() {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?.UserId;
  useEffect(() => {
    if (userId) {
      dispatch(getProfile(userId)); // Fetch the profile if userId exists
    }
  }, [dispatch, userId]);

  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const toggleTheme = () => setDark(!dark);

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <Dashboardadmin setActiveMenu={setActiveMenu} dark={dark} />;
      case "postedEvents":
        return <PostedEvents setActiveMenu={setActiveMenu} dark={dark} />;
      case "newEvents":
        return <NewEvents setActiveMenu={setActiveMenu} dark={dark} />;
      case "rankingBoard":
        return <RankingBoard dark={dark} />;
      case "CompletedEvents":
        return <CompletedEvents dark={dark} />;
      case "rankingApproval":
        return <RankingApproval dark={dark} />;
      case "adminProfile":
        return <AdminProfile dark={dark} profile={profile} />;
      default:
        return <Dashboardadmin setActiveMenu={setActiveMenu} dark={dark} />;
    }
  };

  return (
    <div
    className={`flex h-full  
    ${
      dark
        ? "bg-[url('https://4kwallpapers.com/images/wallpapers/kratos-god-of-war-2880x1800-10280.jpg')]"
        : "bg-[url('https://wallpaper.forfun.com/fetch/48/4890f6961acf2a1fb28d0f7e247e6900.jpeg')]"
    } 
    ${isSideMenuOpen ? "overflow-hidden" : ""} 
    bg-cover bg-center relative`}
  >
    <div
      className={`absolute inset-x-0 bottom-0 h-2/4 z-10 pointer-events-none opacity-7 0 ${
        dark
          ? "bg-[linear-gradient(180deg,rgba(105,54,63,0)_-11.96%,#69363F_43.44%,#69363F_88.04%)]"
          : ""
      }`}
    ></div>
    <div className="absolute inset-0 bg-cover bg-center backdrop-blur-md opacity-40 z-0"></div>{" "}
    <aside
      className={`z-20 w-64 overflow-y-auto hidden md:block flex-shrink-0  `}
    >
        <Sidebar dark={dark} onMenuClick={setActiveMenu} />
      </aside>

      {/* Backdrop for mobile sidebar */}
      {isSideMenuOpen && (
        <div
          onClick={toggleSideMenu}
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
        />
      )}

      {/* Mobile sidebar */}
      <MobileSidebar
        dark={dark}
        isSideMenuOpen={isSideMenuOpen}
        toggleSideMenu={toggleSideMenu}
        onMenuClick={setActiveMenu}
      />

      {/* Main content */}
      <div className="flex flex-col flex-1 w-full z-10">
        <Header
          dark={dark}
          toggleSideMenu={toggleSideMenu}
          toggleTheme={toggleTheme}
          onMenuClick={setActiveMenu}
          profile={profile}
        />

        <main className="flex-1 p-0 md:p-6 min-h-screen">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
