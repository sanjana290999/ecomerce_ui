import { FaCartPlus, FaUser } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function Navbar({ cart, setCart }) {
  return (
    <div>
      <div className="p-2 flex justify-evenly">
        <p className="text-lg font-bold">yeshwanthsinha143@gmail.com--</p>
        <p className="text-lg font-bold">Deepti Mounika Fashion Apparel</p>
        <p className="text-lg font-bold">Call: +91-9129-9129-91</p>
      </div>
      <div className="p-2 flex shadow-xl mt-2 bg-gradient-to-r from-indigo-900 to-blue-500">
        <div className="w-[20%]">
          <img
            className="ml-48 w-16 h-16 rounded-lg"
            src="/asset/images/logo3.jpg"
            alt="xyz"
          />
        </div>
        <div className="w-[50%] flex justify-between mt-5 font-bold text-white hover:cursor-pointer text-base">
          <p>ALL PRODUCTS </p>
          <p>TRADITIONAL </p>
          <p>TOPS</p>
          <p>DRESSES</p>
          <p>KURTIS</p>
          <p>BLOUSES MODEL</p>
          <p>TOP & JEANS</p>
        </div>
        <div className="w-[40%] flex">
          <input
            className="ml-24 px-10 my-3 rounded-2xl"
            type="text"
            placeholder="search"
          />
          <Link to="/login">
            <FaUser className="w-10 h-5 mt-4 ml-2 hover:cursor-pointer text-white" />
          </Link>
          <FaCartPlus className="w-10 h-5 mt-4 hover:cursor-pointer text-white" />
          <button
            className="border-white py-1 px-5 text-white text-lg font-bold rounded-lg ml-10 m-2"
            type="button"
          >
            HELP
          </button>
        </div>
      </div>
    </div>
  );
}
