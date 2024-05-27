import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products({ name, showAllButton }) {
  const [productData, setProducts] = useState([]);

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
  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/products`
      );
      const data = response.data.data.products;
      console.log({ data });
      setProducts(data);
    } catch (error) {
      console.error("error", error.message);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <div className="text-4xl font-medium ml-60 mt-5">{name}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-10 sm:mx-20 lg:mx-40 mt-8">
        {!isEmpty(productData) &&
          productData.map((element) => (
            <div
              key={element.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <Link to={`/product_details/${element.id}`}>
                <img
                  className="object-cover w-full h-60"
                  src={element.image}
                  alt="Product"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  <TitleShortner title={element.title} />
                </h3>
                <p className="text-gray-600 mb-2">&#x20B9;{element.price}</p>
                <div className="flex justify-evenly items-center">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg">
                    Add to Cart
                  </button>

                  <button className="bg-blue-900 hover:bg-blue-950 text-white py-2 px-6 rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {showAllButton && (
        <div className="flex items-center justify-center mt-10">
          <Link to="/all_products">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              View All Products
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
