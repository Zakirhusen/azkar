import "../styles/globals.css";
import Navbar from "../components/navbar";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [toggleDarkMode, setToggleDarkMode] = useState(true)
  // getting data from child
  const darkModeStateFunc =(mode) => {
    setToggleDarkMode(!mode)
   }
  return (
    <>


      <Navbar darkModeStateFunc={darkModeStateFunc} />
      <Component {...pageProps} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
export default MyApp;
