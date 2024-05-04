import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-60">
          <div className="mb-8 md:mb-0">
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              fermentum nec justo id consequat. Nam pharetra felis et ex
              blandit, ac sollicitudin lorem euismod.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Reservation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Foodish Land. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
