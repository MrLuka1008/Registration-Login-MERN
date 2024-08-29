import React from "react";
import logo from "../../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";

const Header = () => {
  const location = useLocation();

  function test() {
    if (location.pathname === "/") {
      return (
        <div className="flex gap-4">
          <CustomLink name="Login" namePath="login" />
          <CustomLink name="Sign in" namePath="registration" />
        </div>
      );
    } else if (location.pathname === "/registration") {
      return <CustomLink name="Login" namePath="login" />;
    } else if (location.pathname === "/login") {
      return <CustomLink name="Sign in" namePath="registration" />;
    }
  }

  return (
    <div className="flex px-10 py-4 items-center justify-between h-10v">
      <Link to={"/"}>
        <img src={logo} className="w-28" alt="logo" />
      </Link>

      {/* <button className="bg-black rounded-lg text-white px-7 py-2 text-base">Log in</button> */}
      {test()}
    </div>
  );
};

export default Header;
