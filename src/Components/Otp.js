import React from "react";
import { Link } from "react-router-dom";

export default function OtpVerify() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="bg-blue-950 hover:bg-blue-900 ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Procced
            </button>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="username"
            >
              Otp
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Otp"
              type="text"
              placeholder="Otp"
            />
          </div>
          <div className="flex items-center justify-center ">
            <Link to="/confirm_password">
              <button
                className="bg-blue-950 hover:bg-blue-900 ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Verify
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
