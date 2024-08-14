import React, { useState } from "react";
import Input from "./Input";
import PriveryPolicy from "./PriveryPolicy";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import LeftInfo from "./LeftInfo";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    firstName: true,
    lastname: true,
    email: true,
    password: true,
    agree: true,
  });

  const [cheackAgree, setCheackAgree] = useState(false);
  const [passHide, setPassHide] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    console.log(userInfo);
  };

  const handleChangeAgree = () => {
    setCheackAgree((prev) => !prev);
    console.log(cheackAgree);
  };

  const handleChangeShowToHide = () => {
    console.log("clicked");
    setPassHide((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const newValidation = {
      firstName: userInfo.firstName.trim() !== "",
      lastname: userInfo.lastname.trim() !== "",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email),
      password: passwordPattern.test(userInfo.password),
      agree: cheackAgree !== false,
    };

    setValidation(newValidation);

    console.log("userInfo", userInfo);
    console.log("validation", validation);
  };

  return (
    <div className="bg-my-lightBlack h-100v w-full flex justify-around items-center">
      <LeftInfo />

      <div className=" w-1/2">
        <form onSubmit={handleSubmit} className="bg-white px-24 py-11 gap-4 flex flex-col rounded-3xl w-11/12">
          <h2 className="text-3xl font-medium font-poppins">Sign Up Now</h2>
          <div className="flex gap-4 w-full">
            <Input
              label="First name"
              type="text"
              handleChange={handleChange}
              name="firstName"
              isValid={validation.firstName}
            />
            <Input
              label="Last name"
              type="text"
              handleChange={handleChange}
              name="lastname"
              isValid={validation.lastname}
            />
          </div>
          <div>
            <Input
              label="Email address"
              type="email"
              handleChange={handleChange}
              name="email"
              isValid={validation.email}
            />
          </div>
          <div className="mb-8 flex flex-col">
            <Input
              label="Password"
              // type="password"
              type={!passHide ? `password` : "text"}
              handleChange={handleChange}
              name="password"
              isValid={validation.password}
            />
            <div className="flex items-center justify-between ">
              <p className="font-poppins text-xs text-gray-500 mt-1">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>
              <div className="flex items-center cursor-pointer" onClick={handleChangeShowToHide}>
                {!passHide ? (
                  <>
                    <BiSolidHide className="w-4" />
                    <p className="ml-2">Hide</p>
                  </>
                ) : (
                  <>
                    <BiSolidShow className="w-4" />
                    <p className="ml-2">Show</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <PriveryPolicy handleChangeAgree={handleChangeAgree} isValid={validation.agree} />

            <div className="flex flex-col gap-6 mt-4">
              <button type="submit" className="bg-gray-500 rounded-3xl text-white px-7 py-2 text-xl">
                Sign up
              </button>
              <button>
                Already have an account? <span className="underline">Log in</span>{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
