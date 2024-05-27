import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import Products from "./Products";
// import { Bestseller } from "./ShoesData";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";

export default function HomePage() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="relative flex flex-col items-center justify-center h-[60vh] bg-cover bg-no-repeat bg-center bg-gradient-to-b from-blue-900 to-blue-700 mt-5 overflow-hidden">
          <div className="absolute top-1/2 transform -translate-y-1/2 text-white text-center z-10">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <Typewriter
                options={{
                  strings: [`"DEEPTHI MOUNIKA FASHION APPAREL"`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <Link to="/Products">
              <button className="bg-yellow-500 hover:bg-yellow-600 py-3 px-8 text-white text-lg font-bold rounded-lg mt-8 transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
          <img
            src="/asset/images/bg_img2.jpg"
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full opacity-40 z-0"
          />
        </div>
        <div className="mt-10">
          <Products name={"Bestseller"} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
