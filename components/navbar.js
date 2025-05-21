import React, { useEffect, useRef, useState } from "react";

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
      <nav className={`${toggleDarkMode?"bg-[#282f48]":"bg-white"} sticky top-0 z-30`} >
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
                  src={toggleDarkMode? "iamages1.png" : "images2.png"} 
                  
                  alt="Your Company"
                />

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
                  <Link href="/AudioQuran">
                    <a className=" hover:text-slate-100 bg-slate-100 hover:bg-blue-900 px-5 py-2 button rounded-full text-sm font-medium">
                      Audio Quran
                    </a>
                  </Link>
                  <Link href="/Download">
                    <a className=" hover:text-slate-100 bg-slate-100 hover:bg-blue-900 px-5 py-2 button rounded-full text-sm font-medium">
                      Downlaods
                    </a>
                  </Link>
                  <Link href="/About">
                    <a className=" hover:text-slate-100 bg-slate-100 hover:bg-blue-900 px-5 py-2 button rounded-full text-sm font-medium">
                      About
                    </a>
                  </Link>
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
          className={`sm:hidden  button h-screen w-4/5 ${toggleMobileMenu ? "hidden" : "block"} `}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link href="/">
              <a
                className="bg-gray-900 text-white block px-5 py-2 rounded-md text-sm font-medium button"
                aria-current="page">
                Azkar
              </a>
            </Link>
            <Link href="/AudioQuran">
              <a className=" hover:text-slate-100 block bg-slate-100 hover:bg-blue-900 px-5 py-2 button rounded-md text-sm font-medium">
                Audio Quran
              </a>
            </Link>
            <Link href="/Download">
              <a className=" hover:text-slate-100 block capitalize bg-slate-100 hover:bg-blue-900 px-5 py-2 button rounded-md text-sm font-medium">
                downloads
              </a>
            </Link>
            <Link href="/About">
              <a className=" hover:text-slate-100 block bg-slate-100 hover:bg-blue-900 px-5 py-2 button rounded-md text-sm font-medium">
                About
              </a>
            </Link>
          
          </div>
        </div>
      </nav>
    </>
  );
}
