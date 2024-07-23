import Country from "./Country";
import { useEffect, useState, useContext } from "react";
import Context from "../context";

const Countries = ({ countries }) => {
  





  return (
    <div className="mt-10 grid grid-cols-4 gap-5">
      {countries.map(country => (
        <Country
          flag={country.flags.svg}
          population={country.population}
          name={country.name.common}
          capital={country.capital}
          region={country.region}
        />
      ))}
    </div>
  );
};

export default Countries;
