import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import pic from "../public/images.png";
import Link from "next/link";
import {IoToggle} from "react-icons/io5";
export default function Navbar({darkModeStateFunc}) {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(true);
  const [downloadDropDown, setDownloadDropDown] = useState(false);
  const [toggleDarkMode, setToggleDarkMode] = useState(true)
  const refMobileMenu = useRef(null);
  const refMobileMenuDisplay = useRef(null);

  // toggle dark mode function
  const switchModeFunc =() => { 
    setToggleDarkMode(!toggleDarkMode)
   }

  // here is useeffect is used for if anywhere clicked in window menu is toggled
  useEffect(() => {
    let toggleFunc = (e) => {
      console.log("useEffect is running");
      if (
        refMobileMenu.current &&
        refMobileMenu.current &&
        !refMobileMenu.current.contains(e.target)
      ) {
        setToggleMobileMenu(true);
      }
    };
    
    // sending state to parent component
    darkModeStateFunc(toggleDarkMode)
    if (!toggleDarkMode) {
      document.body.style.color="black"
      document.body.style.background="#f5eef1"
    }else{
      document.body.style.background="#1c2237"
      document.body.style.color="white"
    }
    document.body.addEventListener("click", toggleFunc);
    return () => {
    document.body.removeEventListener("click", toggleFunc);
    };
  }, [toggleDarkMode,toggleMobileMenu]);

  return (
    <>
      <nav className={`${toggleDarkMode?"bg-[#282f48]":"bg-white"} sticky top-0 z-20`} >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                ref={refMobileMenu}
                onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
                type="button"
                className="button inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-700 hover:text-white focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${
                    !toggleMobileMenu ? "hidden" : "block"
                  } h-6 w-6`}
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
                  className={`${toggleMobileMenu ? "hidden" : "block"} h-6 w-6`}
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
                  className="block h-16 rounded- lg:block"
                  src="images2.png"
                  alt="Your Company"
                />

                {/* <Image
                  height="30"
                  layout="responsive"
                  className="hidden h-8 w-auto lg:hidden"
                  src={pic}
                  alt="Your Company"
                /> */}
              </div>
              <div className="hidden sm:ml-6 sm:flex items-center ">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                  <Link href="/">
                    <a
                      className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium button"
                      aria-current="page"
                    >
                      Azkar
                    </a>
                  </Link>
                  <Link href="/audioQuran">
                    <a className=" hover:text-slate-100 bg-slate-100 hover:bg-blue-900 px-5 py-2 button rounded-full text-sm font-medium">
                      Audio Quran
                    </a>
                  </Link>
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={() => setDownloadDropDown(!downloadDropDown)}
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
                      className={`absolute z-10 mt-2 w-fit ${
                        downloadDropDown ? "block" : "hidden"
                      } bg-[#282f48] origin-top-right rounded-md`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1 w-40" role="none">
                        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                        <Link href="#">
                          <a
                            onClick={() =>
                              setDownloadDropDown(!downloadDropDown)
                            }
                            className="text-white block  px-4 py-2 text-base"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            Hisnul Muslim kannada
                          </a>
                        </Link>
                        <Link href="#">
                          <a
                            onClick={() =>
                              setDownloadDropDown(!downloadDropDown)
                            }
                            className="text-white block  px-4 py-2 text-base"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                          >
                            Support
                          </a>
                        </Link>
                        <Link href="#">
                          <a
                            onClick={() =>
                              setDownloadDropDown(!downloadDropDown)
                            }
                            className="text-white block  px-4 py-2 text-base"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            License
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={() => setDownloadDropDown(!downloadDropDown)}
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
                      className={`absolute z-10 mt-2 w-fit ${
                        downloadDropDown ? "block" : "hidden"
                      } bg-[#282f48] origin-top-right rounded-md`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1 w-40" role="none">
                        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                        <Link href="#">
                          <a
                            onClick={() =>
                              setDownloadDropDown(!downloadDropDown)
                            }
                            className="text-white block  px-4 py-2 text-base"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            Hisnul Muslim kannada
                          </a>
                        </Link>
                        <Link href="#">
                          <a
                            onClick={() =>
                              setDownloadDropDown(!downloadDropDown)
                            }
                            className="text-white block  px-4 py-2 text-base"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                          >
                            Support
                          </a>
                        </Link>
                        <Link href="#">
                          <a
                            onClick={() =>
                              setDownloadDropDown(!downloadDropDown)
                            }
                            className="text-white block  px-4 py-2 text-base"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            License
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span className="font-semibold mr-3">Dark Mode</span>
              <button
                type="button"
                onClick={switchModeFunc}
                className="rounded-full  w-8 h-5"
              > 
              {/* <img src={toggleDarkMode? "lightmode.png":"darkmode.png"} alt="" /> */}
              {toggleDarkMode?<IoToggle color="" className=" m-0 p-0 button rounded-full h-full w-full" size="" />:<IoToggle className=" m-0 p-0 rotate-180 rounded-full button h-full w-full" size="2rem"/>}
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          ref={refMobileMenuDisplay}
          className={`sm:hidden ${toggleMobileMenu ? "hidden" : "block"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link href="/">
              <a
                className="bg-gray-900 text-white block px-5 py-2 rounded-md text-sm font-medium button"
                aria-current="page"
              >
                Azkar
              </a>
            </Link>
            <Link href="/audioQuran">
              <a className=" hover:text-slate-100 block bg-slate-100 hover:bg-blue-900 px-5 py-2 button rounded-md text-sm font-medium">
                Audio Quran
              </a>
            </Link>
            <div className="relative block text-left">
              <div>
                <button
                  onClick={() => setDownloadDropDown(!downloadDropDown)}
                  type="button"
                  className="inline-flex w-full rounded-md button bg-white px-4 py-2 text-sm font-medium  shadow-sm hover:bg-gray-50 "
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
