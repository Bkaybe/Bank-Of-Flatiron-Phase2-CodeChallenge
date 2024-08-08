import React from "react";

const Button = ({ btnTxt, type }) => {
  return (
    <button
      className="mt-[10px] text-[28px] text-white bg-azure rounded-[10px] font-mono bg-[#282c34]"
      type={type}>
      {btnTxt}
    </button>
  );
};

export default Button;
