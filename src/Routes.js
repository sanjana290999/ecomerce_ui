import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Todo from "./Components/Todo";
import HomePage from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import SignIn from "./Components/SignIn";
import OtpVerify from "./Components/Otp";
import ConfirmPassword from "./Components/ConfirmPassword";
import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";

function RouterComponent() {
  return (
    <Routes>
      {/* <Route path="/" element={<Todo />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="sign_in" element={<SignIn />} />
      <Route path="otp_verify" element={<OtpVerify />} />
      <Route path="confirm_password" element={<ConfirmPassword />} />
      <Route path="product_details/:productId" element={<ProductDetails />} />
      <Route path="product_details/:productId" element={<ProductDetails />} />
      <Route path="products" element={<Products />} />
    </Routes>
  );
}

export default RouterComponent;
