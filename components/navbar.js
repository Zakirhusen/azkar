import React, { useState } from "react";
import Image from "next/image";
import pic from "../public/images.png";
export default function Navbar() {
  const [downloadDropDown, setDownloadDropDown] = useState(false);
  return (
    <>
      <nav className="bg-[#282f48] ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="button inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-700 hover:text-white focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {/* Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-20 rounded- lg:block"
                  src="images2.png"
                  alt="Your Company"
                />

                <Image
                  height="30"
                  layout="responsive"
                  className="hidden h-8 w-auto lg:hidden"
                  src={pic}
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex items-center ">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    href="/"
                    className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium button"
                    aria-current="page"
                  >
                    Azkar
                  </a>

                  <a
                    href="/audioQuran"
                    className=" hover:text-slate-100 bg-slate-100 hover:bg-blue-900 px-5 py-2 button rounded-full text-sm font-medium"
                  >
                    Audio Quran
                  </a>
                  <div className="relative inline-block text-left">
                    <div>
                      <button onClick={()=>setDownloadDropDown(!downloadDropDown)}
                        type="button"
                        className="inline-flex w-full justify-center rounded-full button bg-white px-4 py-2 text-sm font-medium  shadow-sm hover:bg-gray-50 "
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Downloads
                        {/* <!-- Heroicon name: mini/chevron-down --> */}
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      className={`absolute z-10 mt-2 w-fit ${downloadDropDown?"block":"hidden"} bg-[#282f48] origin-top-right rounded-md` }
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1 w-40" role="none">
                        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                        <a onClick={()=>setDownloadDropDown(!downloadDropDown)}
                          href="#"
                          className="text-white block  px-4 py-2 text-base"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Hisnul Muslim kannada
                        </a>
                        <a onClick={()=>setDownloadDropDown(!downloadDropDown)}
                          href="#"
                          className="text-white block  px-4 py-2 text-base"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Support
                        </a>
                        <a onClick={()=>setDownloadDropDown(!downloadDropDown)}
                          href="#"
                          className="text-white block  px-4 py-2 text-base"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          License
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-block text-left">
                    <div>
                      <button onClick={()=>setDownloadDropDown(!downloadDropDown)}
                        type="button"
                        className="inline-flex w-full justify-center rounded-full button bg-white px-4 py-2 text-sm font-medium  shadow-sm hover:bg-gray-50 "
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Language
                        {/* <!-- Heroicon name: mini/chevron-down --> */}
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      className={`absolute z-10 mt-2 w-fit ${downloadDropDown?"block":"hidden"} bg-[#282f48] origin-top-right rounded-md` }
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1 w-40" role="none">
                        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                        <a onClick={()=>setDownloadDropDown(!downloadDropDown)}
                          href="#"
                          className="text-white block  px-4 py-2 text-base"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Hisnul Muslim kannada
                        </a>
                        <a onClick={()=>setDownloadDropDown(!downloadDropDown)}
                          href="#"
                          className="text-white block  px-4 py-2 text-base"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Support
                        </a>
                        <a onClick={()=>setDownloadDropDown(!downloadDropDown)}
                          href="#"
                          className="text-white block  px-4 py-2 text-base"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          License
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                {/* <!-- Heroicon name: outline/bell --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="#"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
