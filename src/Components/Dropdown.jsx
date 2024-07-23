// Icons
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

// Hooks
import { useState } from "react";
import RegionButton from "./RegionButton";

// Regions
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Dropdown = (props) => {
  const [isopen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isopen);
  }
  return (
    <div className="relative w-[250px]">
      <button onClick={toggleDropdown} className="flex items-center justify-between w-full bg-white p-4 drop-shadow rounded cursor-pointer hover:bg-gray-100 ">
        <span>Filter by Region</span>
        <span>
         {isopen ?  <GoChevronUp /> : <GoChevronDown />}
        </span>
      </button>
      <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow rounded overflow-hidden">
        {isopen && regions.map(region=> <RegionButton region={region}>{region}</RegionButton>)}
      </div>
    </div>
  );
};

export default Dropdown;
