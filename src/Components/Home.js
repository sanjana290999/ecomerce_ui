import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import Products from "./Products";
import { Bestseller } from "./ShoesData";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
export default function HomePage() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar cart={cart} setCart={setCart} />
      <div className="px-40">
        <div
          className="h-[60vh] bg-cover bg-no-repeat mt-5"
          style={{ backgroundImage: "url('/asset/images/bg_img2.jpg')" }}
        >
          <Link to="/Products">
            <button
              className=" bg-blue-950 py-3 px-10 text-white text-lg font-bold rounded-lg absolute top-[65%] left-[45%]"
              type="button"
            >
              Shop Now
            </button>
          </Link>
          <p className="text-7xl text-white font-bold mr-[30%] p-28">
            <Typewriter
              options={{
                strings: [`"DEEPTHI MOUNIKA FASHION APPAREL"`],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div>
          <Products name={"Bestseller"} cart={cart} setCart={setCart} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
