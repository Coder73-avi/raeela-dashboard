import React from "react";
import { NavLink } from "react-router-dom";

import { MdDashboardCustomize } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { BsNewspaper } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiShekel, BiMessageDetail } from "react-icons/bi";
import css from "./style.module.css";

const Sidebar = () => {
  const DashNav = [
    { name: "Dashboard", path: "/", icons: <MdDashboardCustomize /> },
    { name: "Client Info", path: "/clients", icons: <AiOutlineUsergroupAdd /> },
    { name: "Messages", path: "/clients", icons: <BiMessageDetail /> },
    { name: "Pages", path: "/pages", icons: <BsNewspaper /> },
    { name: "Events ", path: "/events", icons: <RiCalendarEventFill /> },
    { name: "Settings ", path: "/settings", icons: <FcSettings /> },
  ];

  return (
    <>
      <section className={` ${css.sidebar}`}>
        <div
          className={` flex flex-row items-center justify-center gap-6  ${css.heading}`}
        >
          <div className={`text-4xl ${css.dashIcon}`}>
            <BiShekel />
          </div>
          <h1 className="text-center text-xl font-bold uppercase">
            Raeela <span style={{ color: "var(--color-danger)" }}>Admin</span>
          </h1>
        </div>

        {/* navigation */}
        <nav className={`mt-8 ${css.navigation}`}>
          <ul>
            {DashNav.map(({ name, path, icons }, indx) => (
              <>
                <NavLink to={path} key={indx}>
                  <li
                    className={`font-normal flex flex-row items-center gap-3 ${
                      window.location.pathname === path && css.active
                    } ${css.navLink}`}
                  >
                    <span className="text-xl">{icons}</span>
                    {name}
                  </li>
                </NavLink>
              </>
            ))}
          </ul>
        </nav>
      </section>

      <section className="sideContain">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <h1 className={`text-2xl font-bold`}>Dashboard</h1>
            <div className={`my-4 ${css.date}`}>
              <input type="date" />
            </div>

            <div className={`grid grid-cols-2 gap-6`}>
              <div className="bg-white shadow-black rounded-xl h-44"></div>
              <div className="bg-white shadow-black rounded-xl h-44"></div>
            </div>

            <div className={`${css.recent__activities}`}></div>
          </div>

          <div className="col-span-2">side</div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
