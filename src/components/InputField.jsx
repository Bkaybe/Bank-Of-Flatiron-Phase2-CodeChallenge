import React from "react";

const InputField = ({ value, type, placeholder, onChange }) => {
  return (
    <input
      className="text-[25px] rounded-[10px] bg-[#282c34] text-white font-mono"
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
      valuer={value}
    />
  );
};

export default InputField;
