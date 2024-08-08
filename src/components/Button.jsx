import React from "react";

const Button = ({ btnTxt, type }) => {
  return (
    <button
      type={type}
      className="mt-[10px] text-[25px] bg-azure rounded-[10px] font-mono">
      {btnTxt}
    </button>
  );
};

export default Button;
