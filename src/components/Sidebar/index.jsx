import React from "react";
import { NavLink } from "react-router-dom";

import { MdDashboardCustomize } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { BsNewspaper } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { AiOutlineUsergroupAdd, AiOutlineMenuUnfold } from "react-icons/ai";
import css from "./style.module.css";

const Sidebar = () => {
  const DashNav = [
    { name: "Dashboard", path: "/", icons: <MdDashboardCustomize /> },
    { name: "Client Info", path: "/clients", icons: <AiOutlineUsergroupAdd /> },
    { name: "Pages", path: "/pages", icons: <BsNewspaper /> },
    { name: "Events ", path: "/events", icons: <RiCalendarEventFill /> },
    { name: "Settings ", path: "/settings", icons: <FcSettings /> },
  ];

  return (
    <>
      <section className={` ${css.sidebar}`}>
        <div
          className={`p-4 flex flex-row items-center justify-center gap-6  ${css.heading}`}
        >
          <div className={`text-xl ${css.dashIcon}`}>
            <AiOutlineMenuUnfold />
          </div>
          <h1 className="text-center text-xl font-medium uppercase">
            Raeela Admin
          </h1>
        </div>
        <hr />

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
                    {icons}
                    {name}
                  </li>
                </NavLink>
              </>
            ))}
          </ul>
        </nav>
      </section>

      <section className="sideContain">
        <div className={`text-xl `}>
          <AiOutlineMenuUnfold />
        </div>
        <h1>Dashboard</h1>
      </section>
    </>
  );
};

export default Sidebar;
