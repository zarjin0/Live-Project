import React from "react";
import Categories from "./components/Categories/Categories";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MonthDeals from "./components/MonthDeals/MonthDeals";
import OurBestSellers from "./components/OurBestSellers/OurBestSellers";
const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <OurBestSellers />
      <MonthDeals />
      <CustomerReview />
      <Footer />
    </>
  );
};

export default Layout;
