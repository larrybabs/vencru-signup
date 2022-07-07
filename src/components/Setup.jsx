import React from "react";
import { FcGoogle } from "react-icons/fc";
import setup from "../assets/setup.png";
import dot from "../assets/dot.png";
import ShowAndHidePassword from "./HidePassword";

const Signup = () => {
  return (
    <div className="flex justify-center items-center">

        {/* left */}
      <div className="w-full h-screen bg-[#2D74DA] text-[#FFFFFF] lg:w-[540px]">
        <div className="px-8 md:px-20 ">
          <h1 className="text-[20px] mt-[70px] mb-[90px] tracking-widest logo">
            SME Better
          </h1>

          <h1 className="text-[24px]">Log into your Business Manager</h1>

          <form className="w-full flex flex-col py-6 ">
            <label className="mb-1 mt-[26px]"> Email Address</label>
            <input
              type="email"
              placeholder="someone@email.com"
              className="p-3 my-2 rounded outline-none text-black"
            />
            <label className="mb-1 mt-[26px]">Enter Your Password</label>
            <ShowAndHidePassword />
            
            <button className="border py-3 my-5 hover:bg-[#5493ec] duration-300 rounded ">
              SIGN IN
            </button>
            <div className="flex justify-center items-center text-sm text-white">
              <p className="text-gray-300">Don't have an account? </p>
              <a className="font-bold pl-1" href="/">
                Sign Up
              </a>
            </div>
            <div className="flex justify-center items-center  mt-6 text-sm text-white">
              <a href="/">Forgot Password?</a>
            </div>
            <button className="flex justify-center bg-white relative text-[#454749] duration-500 hover:bg-gray-200 border py-3 my-5  rounded ">
              <FcGoogle className="absolute top-4 left-20 md:left-60 lg:left-20" /> Log in with
              Google
            </button>
          </form>
        </div>
      </div>

      {/* right */}
      <div className="hidden lg:flex flex-col justify-center items-center w-[900px]">
        <h1 className="text-[#2D74DA] text-[24px] py-20">
          Organize your customer information
        </h1>
        <img src={setup} alt="/" width="400px" />
        <img src={dot} alt="/" width="58" className="mt-10" />
      </div>
    </div>
  );
};

export default Signup;
