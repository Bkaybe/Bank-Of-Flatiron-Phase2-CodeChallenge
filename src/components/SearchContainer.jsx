import React from "react";
import InputField from "./InputField";

const SearchContainer = () => {
  return (
    <div className="search-container">
      <form className="flex justify-center mt-[20px] items-centre">
        <InputField placeholder="Search..." type="text" />
      </form>
    </div>
  );
};

export default SearchContainer;
