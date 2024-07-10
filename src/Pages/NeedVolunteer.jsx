import { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { MdTableRows } from "react-icons/md";

export const SearchContext = createContext(null);

const NeedVolunteer = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [searchResult, setSearchResult] = useState("");

  const [volunteers, setVolunteers] = useState([])

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearchResult(searchValue);
  };

  const info = {
    searchResult, volunteers, setVolunteers
  }

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-3xl font-bold text-center my-8">Need Volunteers</h2>

      <div className="my-8 text-center">
        <form onSubmit={handleSearch}>
          <input
            className="border-2 border-gray-300 px-4 py-3 rounded-lg"
            type="text"
            name="search"
            placeholder="search by post title"
          />
          <input
            className="btn bg-[#ff5252] text-white hover:bg-[#cc8e35]"
            type="submit"
            value="Search"
          />
        </form>
      </div>

      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-end flex-nowrap ">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex justify-end items-center flex-shrink-0 px-5 py-3 space-x-2  ${
            tabIndex === 0 ? "border " : ""
          }   mb-4 dark:border-gray-600 dark:text-gray-900`}
        >
          <span>
            <TfiLayoutGrid3Alt />
          </span>
        </Link>

        <Link
          to={"tableLayout"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border " : ""
          } mb-4 dark:border-gray-600 dark:text-gray-900`}
        >
          <span className="text-xl">
            <MdTableRows />
          </span>
        </Link>
      </div>
      <SearchContext.Provider value={info}>
        <Outlet></Outlet>
      </SearchContext.Provider>
    </div>
  );
};

export default NeedVolunteer;
