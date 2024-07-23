import { useContext } from "react";

import Context from "../context";

const RegionButton = ({region}) => {
  const {selectRegion} = useContext(Context);




  return (
    <button onClick={() => selectRegion(region)} className="flex items-center justify-between bg-white p-4  cursor-pointer w-[250px] hover:bg-gray-100 ">
      {region}
    </button>
  );
};

export default RegionButton;
