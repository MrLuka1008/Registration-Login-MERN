import React from "react";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <div className="flex px-10 py-4 items-center justify-between h-10v">
      <img src={logo} className="w-28" alt="logo" />
      <button className="bg-black rounded-lg text-white px-7 py-2 text-base">Log in</button>
    </div>
  );
};

export default Header;
