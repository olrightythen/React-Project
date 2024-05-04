import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 backdrop-blur-lg text-gray-200 text-3xl font-bold relative shadow-lg font-mono shadow-orange-500"
      role="navigation"
    >
      <NavLink href="/" className="pl-2">
        <div className="flex items-center justify-center h-8">
          <h1 className="font-bold text-red-600">Foodish</h1>
          <div className="w-4 h-4 bg-yellow-400 rounded-full mx-2"></div>
          <h1 className="font-bold text-yellow-400">Land</h1>
        </div>
      </NavLink>
      <div className="pr-8 md:block hidden">
        <NavLink
          to="/"
          className={(e) => {
            return e.isActive
              ? "text-yellow-400 p-4"
              : "p-4 text-gray-400 hover:text-yellow-500 transition duration-300";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => {
            return e.isActive
              ? "text-yellow-400 p-4"
              : "p-4 text-gray-400 hover:text-yellow-500 transition duration-300";
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={(e) => {
            return e.isActive
              ? "text-yellow-400 p-4"
              : "p-4 text-gray-400 hover:text-yellow-500 transition duration-300";
          }}
        >
          Contact
        </NavLink>
        <NavLink
          to="/orders"
          className={(e) => {
            return e.isActive
              ? "text-yellow-400 p-4"
              : "p-4 text-gray-400 hover:text-yellow-500 transition duration-300";
          }}
        >
          Orders
        </NavLink>
      </div>
      <div>ABBDFFDDFYB</div>
    </nav>
  );
};
export default Navbar;
