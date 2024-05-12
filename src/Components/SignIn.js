import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex items-center ">
            <button
              className="bg-blue-950 hover:bg-blue-900 ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-md ml-20 text-blue-950 hover:text-blue-800"
              to="/otp_verify"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
