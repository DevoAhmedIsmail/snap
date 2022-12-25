import React, { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const BODY = document.querySelector("body");
  BODY.style.overflow = openMenu ? "hidden" : "";

  return (
    <nav className="shadow flex justify-between items-center py-3 px-10 z-50">
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
      {
        <div
          className={`transition-all duration-200 Menu-sm absolute w-80 h-screen overflow-auto bg-white top-0 ${
            openMenu ? "right-0 opacity-100" : "-right-96 opacity-0"
          } `}
        >
          {/* Close Button */}
          <div className="absolute top-3 right-3">
            <span onClick={() => setOpenMenu(false)}>
              <i className="fa-solid fa-xmark text-2xl text-red-600 font-bold cursor-pointer"></i>{" "}
            </span>
          </div>

          {/* Menu List that show in small screen */}
          <div className="mt-12 px-9">
            <div className="menu-content flex flex-col space-y-7">
              {/* Link */}
              <div className="menu-content-item cursor-pointer text-slate-40">
                <details className="px-6 rounded-lg flex">
                  <summary class="leading-6 text-slate-900 dark:text-white font-semibold select-none flex">
                    <p className="group text-slate-600 hover:text-slate-800">
                      Features{" "}
                      <i class="fa-solid fa-chevron-down group-hover/f:rotate-180 transition duration-300"></i>
                    </p>
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <div className="flex flex-col gap-3 mt-3 ml-3">
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
                </details>
              </div>

              {/* Link */}
              <div className="menu-content-item cursor-pointer text-slate-40">
                <details className=" px-6 rounded-lg flex">
                  <summary class="leading-6 text-slate-900 dark:text-white font-semibold select-none flex">
                    <p className="group text-slate-600 hover:text-slate-800">
                      Company{" "}
                      <i class="fa-solid fa-chevron-down group-hover/f:rotate-180 transition duration-300"></i>
                    </p>
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <div className="flex flex-col gap-3 mt-3 ml-3">
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
                </details>
              </div>
              <div className="cursor-pointer px-5 text-slate-400 hover:text-slate-800 hover:translate-x-2 transition">
                <p className="group text-slate-600 hover:text-slate-800">
                  Careers
                </p>
              </div>
              <div className="cursor-pointer px-5 text-slate-400 hover:text-slate-800 hover:translate-x-2 transition">
                <p className="group text-slate-600 hover:text-slate-800">
                  About
                </p>
              </div>
              <div className="gap-5 flex flex-col justify-center items-center">
                <a href="/" className="py-3 px-5 text-base md:px-3">
                  Login
                </a>
                <a
                  href="/"
                  className=" px-5 py-2 w-full text-center block hover:border-2 rounded-2xl  border-slate-900 text-base md:px-3"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;
