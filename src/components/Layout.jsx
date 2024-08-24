// Layout for hotel website with header, footer and main content
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import background from "../assets/bg.jpg";

const Layout = ({ children }) => {
  return (
    <div style={{backgroundImage: `url(${background})`}}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
