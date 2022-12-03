import {useEffect, useRef, useState } from "react";
import {data} from "../components/data"
import {BsFillArrowUpCircleFill} from "react-icons/bs"

export default function Home({toggleDarkMode,setProgress}) {
  const [azkarData, setAzkarData] = useState(()=>data[1].filter((elem,index)=>elem["Timing"]=="morningAndEvening" || elem["Timing"]=="morning"))
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [azkarTimingDropdown, setAzkarTimingDropdown] = useState(false);
  const [azkarTiming, setAzkarTiming] = useState("morning");
  const [azkarLanguage, setAzkarLanguage] = useState('English')
  const refAzkarTimingDropDown = useRef(null)
  const refLangDropDown = useRef(null)
  // const [noOfTimesRepeatLang, setNoOfTimesRepeatLang] = useState('English')
  let azkarTimingFunc=(timing)=>{
    // console.log('timing',timing.target.value);
    // console.log('timing',timing);
    setAzkarTiming(timing)
    setAzkarTimingDropdown(!azkarTimingDropdown)
    setProgress(70)
    setTimeout(() => {      
      setProgress(100)
    }, 1000);
    setAzkarData(()=>data[1].filter((elem,index)=>elem["Timing"]=="morningAndEvening" || elem["Timing"]==timing))
  }
  // here is useeffect is used for if anywhere clicked in window menu is toggled
  useEffect(() => {
    console.log("useEffect is running index");
    let toggleFunc = (e) => {
      console.log("useEffect is running index inside");
      if (refAzkarTimingDropDown.current && !refAzkarTimingDropDown.current.contains(e.target)) {
        setAzkarTimingDropdown(false);
      }
      if (refLangDropDown.current && !refLangDropDown.current.contains(e.target)) {
        setLanguageDropdown(false);
      }
    }
    document.body.addEventListener("click", toggleFunc);
  return () => {
    document.body.removeEventListener("click", toggleFunc);
    }
  },[]);
  // },[azkarLanguage,azkarTimingDropdown,azkarLanguage,languageDropdown]);
const languageFunc=(language) => { 
  setLanguageDropdown(!languageDropdown)
  setAzkarLanguage(language)
  setProgress(70)
    setTimeout(() => {      
      setProgress(100)
    }, 1000);
 }
  return (
    <>
      <div className="wrapper  my-4 mx-4">
      <div className={`sticky z-20 top-[4rem] py-2 ${!toggleDarkMode? "bg-[#1c2237]":"bg-[#f5eef1]"} `}>
      <div className="relative mr-2 inline-block  text-left">
        <div>
          <button
            ref={refLangDropDown}
            onClick={() => setLanguageDropdown(!languageDropdown)}
            type="button"
            className="inline-flex w-full justify-center rounded-sm button px-4 bottom-2 ml-auto  py-2 text-sm font-medium  shadow-sm "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {azkarLanguage}
            {/* <!-- Heroicon name: mini/chevron-down --> */}
            <svg
              className="-mr-1 ml-2 h-5 w-5 "
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
          } bg-[#1c2237] origin-top-right rounded-md`}
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
              id="menu-item-1"
              value="Urdu"
            >
              urdu
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
      <div className=" inline-block text-left">
        <div>
          <button
            ref={refAzkarTimingDropDown}
            onClick={() => setAzkarTimingDropdown(!azkarTimingDropdown)}
            type="button"
            className="inline-flex w-full capitalize justify-center rounded-sm button  px-4 py-2 text-sm font-medium z-40 shadow-sm "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            
          >
            {azkarTiming}
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
          } bg-[#1c2237] origin-top-right rounded-md`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1 w-40" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            <button
              onClick={(e) =>{ azkarTimingFunc(e.target.value)}}
              className="text-white capitalize  px-4 py-2 text-base"
              id="menu-item-0"
              value="morning"
            >
              morning
            </button>

            <button
              onClick={(e) => {azkarTimingFunc(e.target.value)}}
              className="text-white capitalize  px-4 py-2 text-base"
              value="evening"
              id="menu-item-2"
            >
              evening
            </button>
          </div>
        </div>
      </div>
      </div>

{
  azkarData.map((elem,index)=>{
    return (
      <div key={Math.random()}>
      <div  className={`azkar-container ${!toggleDarkMode?"bg-[#282f48]":"bg-white"}  my-5 p-5 rounded-md space-y-5`} >
      <div className="heading text-2xl font-medium text-center uppercase">Dhikr {index+1}</div>
        <div className="arabicText arabic leading-snug text-center text-xl">
        {/* arabic text */}
          {elem.ArabicText}
        </div>
        <div className="flex justify-center z-10">
          <audio controls className="z-10 h-9  ">
          <source src={elem.Audio} type="audio/mpeg" className=""/>
          </audio>
        </div>
        <div className={`transliteration ${!toggleDarkMode?" text-gray-200":"text-gray-600"} font-medium text-lg text-center`}>
        {/* transliteration according to language */}
          {elem[`${azkarLanguage}Text`]}
        </div>
        <div className="translation  font-mono  text-center">
        {/* translate according to languague */}
        {elem[`${azkarLanguage}Translate`]}
        </div>
        <div className="text-center  font-mono font-bold text-lg">({elem.Repeat} {data[0][azkarLanguage]})</div>
      </div>
      </div>
    )
  })
}

      {/* on clicking window moves top  */}
      <div
            onClick={() => window.scrollTo({top:0,left:0,behavior:"smooth"})}
            type="button"
            className="flex w-10 flex-col opacity-70 hover:opacity-100 fixed bottom-5 right-5  h-10 items-center m-0 justify-center rounded-full button p-2  shadow-sm "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {/* <div className="text-lg -rotate-90 opacity-100 text-center block">&gt;</div> */}
            <BsFillArrowUpCircleFill color=""  className="button" size="2rem"></BsFillArrowUpCircleFill>
            {/* <div className="opacity-100 text-sm text-center block">Top</div> */}
            
          </div>
      <footer className="bg-slate-400 h-28 flex justify-center items-center">
        <div className="m-4 h-4">Zakir@{(new Date).getFullYear()} all rights reserverd</div>
      </footer>
      </div>
    </>
  );
}
