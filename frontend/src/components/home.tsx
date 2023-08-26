import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../App.css";
import { RxCross1 } from "react-icons/rx";

const Home = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const visibleSideBar = () => {
    setShowSideBar(true);
  };

  const hideSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <div
      className={`${
        showSideBar ? "" : ""
      } md:flex flex-row bg-white-400 h-screen`}
    >
      <div
        className={`sidebar  text-lg md:w-1/6 md:relative absolute  md:duration-0 ${
          showSideBar ? "block w-1/2 left-0 ease-in-out duration-700" : " left-[-999px] "
        }  md:left-0  bg-neutral-900 h-screen`}
      >
        {
          <div className="flex justify-end m-2 md:hidden cursor-pointer" onClick={hideSideBar} >
            <RxCross1 color="white" />
          </div>
        }
        <Link to="/">
          <div
            className="p-2 border-2 border-slate-300  font-bold cursor-pointer ease-out duration-200 bg-neutral-900
            text-white hover:bg-neutral-900 "
          >
            Contact
          </div>
        </Link>

        <Link to="/charts">
          <div
            className="p-2 border-2 border-slate-300  font-bold  cursor-pointer  ease-out duration-200 bg-neutral-900
            text-white hover:bg-neutral-900"
          >
            Charts and Maps
          </div>
        </Link>
      </div>
      <div
        className={`md:hidden ${showSideBar ? "invisible" : ""} inline-block cursor-pointer`}
        onClick={visibleSideBar}
      >
        <FaBars size="20" />
      </div>
      <div className="flex-1 bg-zinc-500 border-2 border-slate-300  h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
