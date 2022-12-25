import React, { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="shadow flex justify-between items-center py-3 px-10">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Snap</h1>
        {/* Links */}
        <div className="nav-links hidden ml-14 space-x-10 md:flex ">
          <div className="nav-item">
            <div className="relative group/f py-2 text-slate-400 hover:text-slate-900">
              <p className="cursor-pointer text-sm lg:text-base">
                Features{" "}
                <i class="fa-solid fa-chevron-down group-hover/f:rotate-180 transition duration-300"></i>
              </p>
              <div className="dropdown-list absolute hidden  group-hover/f:block bg-white py-3 px-5 rounded-md top-10 right-0">
                <ul className=" w-100 h-100 space-y-3 ">
                  <li className="cursor-pointer flex items-center gap-3 hover:translate-x-1 transition">
                    <i className="fa-solid fa-calendar-days text-indigo-600"></i>
                    Todolist
                  </li>
                  <li className="cursor-pointer flex items-center gap-3 hover:translate-x-1 transition">
                    <i className="fa-regular fa-calendar text-blue-500"></i>
                    Calender
                  </li>
                  <li className="cursor-pointer flex items-center gap-3 hover:translate-x-1 transition">
                    <i className="fa-solid fa-bell text-amber-400"></i>
                    Reminders
                  </li>
                  <li className="cursor-pointer flex items-center gap-3 hover:translate-x-1 transition">
                    <i className="fa-solid fa-bullseye text-violet-600"></i>
                    Planing
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <div className="relative group/f text-slate-400 hover:text-slate-900 py-2">
              <p className="cursor-pointer text-sm lg:text-base">
                Company{" "}
                <i class="fa-solid fa-chevron-down group-hover/f:rotate-180 transition duration-300"></i>
              </p>
              <div className="dropdown-list absolute hidden group-hover/f:block bg-white py-3 px-5 rounded-md top-10 right-0">
                <ul className=" w-100 h-100 space-y-3 whitespace-nowrap">
                  <li className="cursor-pointer flex items-center gap-3 hover:translate-x-1 transition">
                    <i class="fa-solid fa-clock-rotate-left text-blue-600"></i>
                    History
                  </li>
                  <li className="cursor-pointer flex-1 flex items-center gap-3 hover:translate-x-1 transition">
                    <i class="fa-solid fa-people-group text-yellow-600"></i>
                    Our Team
                  </li>
                  <li className="cursor-pointer flex items-center gap-3 hover:translate-x-1 transition">
                    <i class="fa-solid fa-pager text-purple-600"></i>
                    Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <div className="relative group/f text-slate-400 hover:text-slate-900 py-2">
              <p className="cursor-pointer text-sm lg:text-base">Careers</p>
            </div>
          </div>
          <div className="nav-item">
            <div className="relative group/f text-slate-400 hover:text-slate-900 py-2">
              <p className="cursor-pointer text-sm lg:text-base">About</p>
            </div>
          </div>
        </div>
      </div>
      {/* Right nav */}
      <div className="gap-5 hidden md:flex">
        <a href="/" className="py-3 px-5 text-sm lg:text-base md:px-3">
          Login
        </a>
        <a
          href="/"
          className=" px-5 hover:border-2 rounded-2xl flex items-center border-slate-900 text-sm lg:text-base md:px-3"
        >
          Register
        </a>
      </div>
      <div className="block md:hidden" onClick={() => setOpenMenu(true)}>
        <i class="fa-solid fa-bars-staggered text-3xl text-slate-400 hover:text-slate-800 cursor-pointer"></i>
      </div>
      {/* sm screen menu */}
      {openMenu && (
        <div className="transition Menu-sm fixed bg-white inset-0 ">
          <div className="absolute top-3 right-3">
            <span onClick={() => setOpenMenu(false)}>
              <i className="fa-solid fa-xmark text-2xl text-red-600 font-bold cursor-pointer"></i>{" "}
            </span>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="menu-content flex flex-col space-y-5">
              <div className="cursor-pointer text-slate-400 hover:text-slate-800 hover:translate-x-2 transition">
                <p>Todo List</p>
              </div>
              <div className="cursor-pointer text-slate-400 hover:text-slate-800 hover:translate-x-2 transition">
                <p>Calender</p>
              </div>
              <div className="cursor-pointer text-slate-400 hover:text-slate-800 hover:translate-x-2 transition">
                <p>Reminder</p>
              </div>
              <div className="cursor-pointer text-slate-400 hover:text-slate-800 hover:translate-x-2 transition">
                <p>Planing</p>
              </div>
              <div className="cursor-pointer text-slate-400 hover:text-slate-800 hover:translate-x-2 transition">
                <p>History</p>
              </div>
              <div className="cursor-pointer text-slate-400 hover:text-slate-800 hover:translate-x-2 transition">
                <p>Our Team</p>
              </div>
              <div className="cursor-pointer text-slate-400 hover:text-slate-800 hover:translate-x-2 transition">
                <p>Blog</p>
              </div>
              <div className="gap-5 flex flex-col">
                <a href="/" className="hover:underline text-slate-400 hover:text-slate-800  flex items-center ">
                  Login
                </a>
                <a href="/" className="hover:underline text-slate-400 hover:text-slate-800  flex items-center ">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
