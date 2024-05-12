import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// const TitleShortner = ({ title }) => {
//   if (title.length > 10) {
//     return <span>{title.slice(0, 10)}...</span>;
//   }
//   return <span>{title}</span>;
// };
const TitleShortner = ({ title }) => {
  if (title.length > 20) {
    return (
      <>
        <div className=" opacity-0 hover:opacity-100  absolute z-10 w-auto bg-gray-800 text-sm text-white p-3 rounded-lg -mt-8 -ml-3">
          {title}
        </div>
        <span>{title.slice(0, 20)}...</span>
      </>
    );
  }
  return <span>{title}</span>;
};
export default function Products({ name, data, showAllButton, cart, setCart }) {
  const [products, setProducts] = useState([]);

  const handleData = async () => {
    // const response = await axios.get(
    //   `${process.env.REACT_APP_BASE_URL}/products`
    // );
    // setProducts(response.data);
  };

  useEffect(() => {
    // handleData();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="text-4xl font-medium ml-60 mt-5">{name}</div>
      <div className=" grid grid-cols-4 gap-4 mx-60">
        {products.map((element) => (
          <div
            key={element.id}
            className="w-64 flex flex-col m-4  items-center "
          >
            <img
              className="object-contain h-60"
              src={element.image}
              alt="product image"
            />
            <div className=" ">
              <p className="mt-4 text-xl font-bold">
                <TitleShortner title={element.title} />
              </p>
            </div>
            <p className="mt-2 text-lg text-green-600">
              &#x20B9;{element.price} &#x20B9;
            </p>

            <button
              onClick={() => setCart((prev) => [...prev, element])}
              className="bg-blue-950 px-16 py-2 text-white font-medium mt-4"
            >
              Add to Cart
            </button>

            <Link to={"/product_details/" + element.id}>
              <button className="bg-blue-950 px-16 py-2 text-white font-medium mt-4">
                VIEW PRODUCT
              </button>
            </Link>
          </div>
        ))}
      </div>
      {showAllButton && (
        <div className="flex items-center justify-center mt-10">
          <button className="bg-green-700 px-28 py-2 text-white font-medium">
            VIEW All
          </button>
        </div>
      )}
    </div>
  );
}
