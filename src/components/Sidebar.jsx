import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Logo from "../components/Logo.svg";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { LayoutGroupContext, motion } from "framer-motion";
import {  useLocation, useNavigate, useParams, useRoutes, useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

const params = useLocation()
const pathname= params.pathname.split('/')[1];

 
  return (
    <>
      <div className="bars" >
        <UilBars />
      </div>
      <motion.div className='sidebar'

   
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={pathname === item.link ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => {
                  navigate(item.link)
                }}
              >

                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
            <span>LogOut</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
