"use client";
import useUpdateSearchParams from "@/app/hooks/useUpdateSearchParams";
import { FunctionComponent, useState } from "react";

interface SearchFormProps {
  searchValue?: string;
}

const SearchForm: FunctionComponent<SearchFormProps> = (props) => {
  const [searchValue, setSearchValue] = useState(props.searchValue || "");
  const [finalSearchValue, setFinalSearchValue] = useState(
    props.searchValue || ""
  );

  useUpdateSearchParams([{ key: "searchValue", values: finalSearchValue }]);

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setFinalSearchValue(searchValue);
    }
  };

  return (
    <div className="relative max-w-lg top-2">
      <input
        aria-label="Нийтлэл хайх"
        type="text"
        onKeyUp={onSearch}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Нийтлэл хайх"
        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
      />
      <svg
        className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SearchForm;
