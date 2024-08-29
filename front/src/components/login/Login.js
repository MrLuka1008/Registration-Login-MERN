import React from "react";
import Input from "../registration/Input";
import LeftInfo from "../registration/LeftInfo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-90v bg-my-lightBlack w-full flex justify-around items-center">
      <LeftInfo />

      <div className="w-1/2">
        <form className="bg-white px-24 py-11 gap-4 flex flex-col rounded-3xl w-11/12">
          <h2 className="text-3xl font-medium font-poppins">Login</h2>
          <Input label="Email" type="email" name="email" isValid="true" />
          <Input label="password" type="password" name="password" isValid="true" />

          <div className="flex flex-col gap-6 mt-4">
            <button type="submit" className="bg-gray-500 rounded-3xl text-white px-7 py-2 text-xl">
              Login
            </button>
            <button>
              Don't have an account?{" "}
              <Link className="underline" to={"/registration"}>
                Sign up
              </Link>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
