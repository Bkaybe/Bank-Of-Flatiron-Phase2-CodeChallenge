import React from "react";

const SearchContainer = () => {
  return (
    <div className="search-container">
      <form className="flex justify-center mt-[20px] items-centre">
        <input
          className="text-[25px] rounded-[10px] bg-[#282c34] text-white font-mono"
          type="text"
          placeholder="Search...."
          required
        />
      </form>
    </div>
  );
};

export default SearchContainer;
