import Head from "next/head";
import Image from "next/image";
import {useEffect, useState } from "react";
import {data} from "../components/data"
export default function Home() {
  const [azkarData, setAzkarData] = useState(()=>data[1].filter((elem,index)=>elem["Timing"]=="morningAndEvening" || elem["Timing"]=="morning"))
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [azkarTimingDropdown, setAzkarTimingDropdown] = useState(false);
  const [azkarLanguage, setAzkarLanguage] = useState('English')
  // const [noOfTimesRepeatLang, setNoOfTimesRepeatLang] = useState('English')
  let azkarTimingFunc=(timing)=>{
    // console.log('timing',timing.target.value);
    console.log('timing',timing);
    setAzkarTimingDropdown(!azkarTimingDropdown)
    setAzkarData(()=>data[1].filter((elem,index)=>elem["Timing"]=="morningAndEvening" || elem["Timing"]==timing))
  }
const languageFunc=(language) => { 
  setLanguageDropdown(!languageDropdown)
  setAzkarLanguage(language)
 }
  return (
    <>
      <div className="wrapper my-6 mx-4">
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setAzkarTimingDropdown(!azkarTimingDropdown)}
            type="button"
            className="inline-flex w-full capitalize justify-center rounded-sm button bg-white px-4 border bottom-2 border-spacing-4 ml-auto py-2 text-sm font-medium  shadow-sm hover:bg-gray-50 "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            
          >
            Morning
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
                clipule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`absolute z-10 mt-2 w-fit ${
            azkarTimingDropdown ? "block" : "hidden"
          } bg-[#282f48] origin-top-right rounded-md`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1 w-40" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            <button
              onClick={(e) => azkarTimingFunc(e.target.value)}
              className="text-white capitalize  px-4 py-2 text-base"
              id="menu-item-0"
              value="morning"
            >
              morning
            </button>

            <button
              onClick={(e) => azkarTimingFunc(e.target.value)}
              className="text-white capitalize  px-4 py-2 text-base"
              value="evening"
              id="menu-item-2"
            >
              evening
            </button>
          </div>
        </div>
      </div>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setLanguageDropdown(!languageDropdown)}
            type="button"
            className="inline-flex w-full justify-center rounded-sm button bg-white px-4 border bottom-2 border-spacing-4 ml-auto py-2 text-sm font-medium  shadow-sm hover:bg-gray-50 "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {azkarLanguage}
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
                clipule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`absolute z-10 mt-2 w-fit ${
            languageDropdown ? "block" : "hidden"
          } bg-[#282f48] origin-top-right rounded-md`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1 w-40" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            <button
              onClick={(e) => languageFunc(e.target.value)}
              className="text-white  capitalize px-4 py-2 text-base"
              role="menuitem"
              id="menu-item-0"
              value="English"
            >
              english
            </button>
            <button
              onClick={(e) => languageFunc(e.target.value)}
              className="text-white block capitalize px-4 py-2 text-base"
              role="menuitem"
              id="menu-item-1"
              value="RomanUrdu"
            >
              roman urdu
            </button>
            <button
              onClick={(e) => languageFunc(e.target.value)}
              className="text-white block capitalize px-4 py-2 text-base"
              role="menuitem"
              id="menu-item-2"
              value="Kannada"
            >
              kannada
            </button>
          </div>
        </div>
      </div>

{
  azkarData.map((elem,index)=>{
    return (
      <div key={Math.random()}>
      <div  className="azkar-container bg-[#282f48] my-5 p-5 rounded-md space-y-5 ">
      <div className="heading text-2xl font-medium text-center uppercase">Dhikr {index+1}</div>
        <div className="arabicText text-center text-xl">
        {/* arabic text */}
          {elem.ArabicText}
        </div>
        <div className="flex justify-center">
          <audio controls className="z-10">
          <source src={elem.Audio} type="audio/mpeg" className=""/>
          </audio>
        </div>
        <div className="transliteration font-light text-lg text-center">
        {/* transliteration according to language */}
          {elem[`${azkarLanguage}Text`]}
        </div>
        <div className="translation font-mono text-center">
        {/* translate according to languague */}
        {elem[`${azkarLanguage}Translate`]}
        </div>
        <div className="text-center text-gray-400 font-mono italic text-lg">({elem.Repeat} {data[0][azkarLanguage]})</div>
      </div>
      </div>
    )
  })
}
      
      <footer className="">
        <div className="m-4"></div>
      </footer>
      </div>
    </>
  );
}
