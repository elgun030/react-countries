// Components
import Header from "./Components/Header";
import Dropdown from "./Components/Dropdown";
import Search from "./Components/Search";
import Countries from "./Components/Countries";
// Context
import Context from "./context";  

// Hooks
import { useEffect, useState } from "react";

const App = (props) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [countries, setCountries] = useState([]);

  const selectRegion = async (region) => {
    const response = await fetch (`https://restcountries.com/v3.1/region/${region}`)
    const data = await response.json();
    setSelectedRegion(region);
    setCountries(data)

  };


  const getData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
  };

  const searchCountries = async (searchValue) => {
   const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
   const data = await response.json();
console.log(data);
   setCountries(data);
  }

  
  useEffect(() => {
    getData();
  }, [])

  return (
    <Context.Provider value={{ selectRegion, searchCountries, selectedRegion }}>
      <Header />
      <main className="container mx-auto pt-10 h-screen">
        <div className="flex items-center justify-between">
          <Search />
          <Dropdown />
        </div>
        <Countries countries={countries} />
      </main>
    </Context.Provider>
  );
};

export default App;
