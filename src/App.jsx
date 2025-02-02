import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Order from "./pages/order/order";
import Dashboard from "./pages/admin/dashboard/dashboard";
import NoPage from "./pages/nopage/nopage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/login";
import Signup from "./pages/registration/signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Cart from "./pages/cart/Cart";
import AddProduct from "./pages/admin/pages/Addproduct";
import UpdateProduct from "./pages/admin/pages/Updateproduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/order'
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path='/cart' element={<Cart />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
          <Route
            path='/addproduct'
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path='/updateproduct'
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
};

export default App;

// user

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// admin

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.email === "yashkapure@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
