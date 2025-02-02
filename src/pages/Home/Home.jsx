import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/Filter/filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  console.log(cartItems);

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };

  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
