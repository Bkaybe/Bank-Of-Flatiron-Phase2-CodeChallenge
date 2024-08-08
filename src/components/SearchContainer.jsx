import React from "react";
import InputField from "./InputField";

const SearchContainer = ({transactions, setQuery}) => {

  
  return (
    <div className="search-container">
      <form className="flex justify-center mt-[20px] items-centre">
        <InputField placeholder="Search..." type="text" onChange={(e) => setQuery(e.target.value)} />
      </form>
    </div>
  );
};

export default SearchContainer;
