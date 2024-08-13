import React from "react";

const Input = ({ label, type, name, handleChange, isValid }) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label className={`font-poppins ${isValid ? "text-gray-500" : "text-red-600"}`}>{label}</label>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        className={`border-2 ${isValid ? "border-gray-500/50" : "border-red-600"} rounded-xl w-full h-10 p-2`}
      />
    </div>
  );
};

export default Input;
