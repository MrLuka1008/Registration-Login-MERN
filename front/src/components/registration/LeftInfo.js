import React from "react";
import illustration from "../../img/Illustration.png";

const LeftInfo = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-6">
      <h2 className="text-white text-5xl font-poppins font-semibold">Design with us</h2>
      <p className="text-white text-2xl font-poppins font-normal">
        Access to thousands of design resources and templates
      </p>
      <img className="w-96" src={illustration} alt="ilustration" />
    </div>
  );
};

export default LeftInfo;
