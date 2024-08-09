import React from "react";
import InputField from "./InputField";

const SearchContainer = ({ searchTerm, onSearchChange }) => {
  const handlingsearchInput = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <div className="search-container">
      <form className="flex justify-center mt-[20px] items-centre">
        <InputField
          placeholder="Search..."
          type="text"
          onChange={handlingsearchInput}
          value={searchTerm}
        />
      </form>
    </div>
  );
};

export default SearchContainer;
