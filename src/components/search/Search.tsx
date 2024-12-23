import React from "react";
import { LuSearch } from "react-icons/lu";

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ query, setQuery, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="relative md:w-[40%] w-11/12 flex items-center">
      <input
        type="search"
        id="default-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block w-full py-[.6rem] px-4 font-medium text-[.8rem] border-none rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder="Procure uma música"
        required
      />
      <button
        type="submit"
        className="text-white flex absolute end-0 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
      >
        <LuSearch className="text-2xl text-gray-400" />
      </button>
    </form>
  );
};
