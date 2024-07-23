// Icons
import { CiSearch } from "react-icons/ci";

// Hooks
import { useRef, useContext } from "react";

// Context
import Context from "../context";

const Search = (props) => {
  const searchInputRef = useRef(null);
  const { searchCountries } = useContext(Context);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    searchCountries(searchInputRef.current.value);
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex w-1/3 items-center pl-4 bg-white drop-shadow rounded">
      <CiSearch className="h-5 w-5" />
      <input
        ref={searchInputRef}
        type="text"
        className="border-none focus:outline-none bg-transparent flex-grow p-3"
        placeholder="Search Countries"
        id="search"
      />
    </form>
  );
};

export default Search;
