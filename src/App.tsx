import React, { useState, useRef, useEffect } from "react"
import MainPage from "./components/mainPage";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function ToggleDropdown() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  ;


  return (

  <>
   <div className="flex justify-center gap-[20px]">
      <div className="flex justify-center gap-[20px] mt-5">
        <button className="flex justify-center h-[40px] py-2 px-2 text-[#999999] border rounded-lg border-[#999999]">
          Chart
          <svg className="w-[20px] ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="fill-current text-[#999999]" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" /></svg>
        </button>
      </div>
      <div className="flex mt-5 flex-col">
        <div className="flex justify-center gap-[15px] border border-[#0B528c] rounded-lg w-[230px] py-2 cursor-pointer " onClick={ToggleDropdown} ref={dropdownRef}>
          <span className="text-white font-bold">Country Comparison</span>
          <svg className="w-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path className="fill-current text-white" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
        </div>

        {isOpen && <div className="w-[200] h-[150px] rounded-lg bg-[#0B4375]"></div>}
      </div>
  
    </ div>
     <MainPage />
  </>
   
  )
}

export default App
