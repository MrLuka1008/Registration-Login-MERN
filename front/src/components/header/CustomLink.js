import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ name, namePath }) => {
  return (
    <Link to={namePath} className="bg-black rounded-lg text-white px-7 py-2 text-base">
      {name}
    </Link>
  );
};

export default CustomLink;
