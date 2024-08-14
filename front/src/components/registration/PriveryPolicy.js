import React from "react";

const PriveryPolicy = ({ handleChangeAgree, isValid }) => {
  return (
    <>
      <div className="flex  gap-2">
        <input type="checkbox" onChange={handleChangeAgree} />

        <p className={`"font-poppins text-xs  ${isValid ? "text-gray-500" : "text-red-600"}`}>
          By creating an account, I agree to our <span className="underline cursor-pointer">Terms of use </span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>
      <div className="flex gap-2">
        <input type="checkbox" />
        <p className="font-poppins text-xs text-gray-500 ">
          By creating an account, I am also consenting to receive SMS messages and emails, including product new feature
          updates, events, and marketing promotions.
        </p>
      </div>
    </>
  );
};

export default PriveryPolicy;
