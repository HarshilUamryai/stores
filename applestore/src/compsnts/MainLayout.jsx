
import React from 'react';
import Prenavbar from './prenavbar.jsx';
import Navbar from './navbar.jsx';
import Slider from './Slider.jsx';
import Offers from './Offers.jsx';
import Heading from './Heading.jsx';
import BestProduct from './BestProduct.jsx';
import HotAccessMode from './HotAcessMode.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
import iphone from "../data/iphone.json";

const MainLayout = () => {
  return (
    <div>
      <Prenavbar />
      <Navbar />
      <Slider />
      <Offers offer={iphone.offer} />
      <Heading text="Best Product" />
      <BestProduct starProduct={iphone.starProduct} />
      <Heading text="Hot Access" />
      <HotAccessMode />
 
      <Outlet />
      <Footer footer={iphone.footer}/>
    </div>
  );
};

export default MainLayout;
