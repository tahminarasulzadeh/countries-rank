import React, { useState, useRef, useEffect } from "react"

type ArrType = {
  id: number;
  info: string;

};

interface MyComponentProps {
  items: ArrType[]

}
const RankFilter: React.FC<MyComponentProps> = ({ items }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);



  const filteredItems = items.filter((item) =>
    item.info.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleItemClick = (item: any) => {
    setInputValue(item); // Set the clicked item as the input value
  };


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
    <div>
      <div className="px-4 max-w-[410px] relative" onClick={ToggleDropdown} ref={dropdownRef}>
        {/* Input field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Allows manual input
          onFocus={() => setInputValue('')}
          className="  w-[205px]  focus:outline-none  bg-[#293E64] text-[#A6B4CA] text-[14px]  px-3 py-2 rounded-md border border-[2px] border-[#4A618A] placeholder:text-[12px]"
          placeholder="Select an item ..."
        />

        {isOpen && (
          <ul className="border absolute border-[#4A618A] w-[205px] h-40 overflow-y-scroll bg-[#293E64] rounded p-2">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleItemClick(item.info)}
                  className="p-2 cursor-pointer font-noto font-medium text-[14px] text-[#A6B4CA] hover:text-white hover:bg-[#006A9c] rounded"
                >
                  {item.info}
                </li>
              ))
            ) : (
              <li className="p-2 text-[10px] text-[#A6B4CA] text-center">No results found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default RankFilter