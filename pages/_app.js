import "../styles/globals.css";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  let router=useRouter()
  const [toggleDarkMode, setToggleDarkMode] = useState(true)
  const [progress,setProgress] = useState(0);
  useEffect(()=> {
    router.events.on('routeChangeStart',()=>setProgress(50))
    router.events.on('routeChangeComplete',()=>setProgress(100))
  },[])
  
  // getting data from child
  const darkModeStateFunc =(mode) => {
    setToggleDarkMode(!mode)
   }
  return (
    <>
      <LoadingBar color="transpaernt" className="button" height={2} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Navbar darkModeStateFunc={darkModeStateFunc} />
      <Component {...pageProps} setProgress={setProgress} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
export default MyApp;
