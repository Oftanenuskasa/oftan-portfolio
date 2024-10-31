/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import pic from "../assets/oftaan.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaBriefcase, FaRegClock, FaEnvelope } from "react-icons/fa"; // Importing icons

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", icon: <FaHome /> },
    { id: 2, text: "About", icon: <FaUser /> },
    { id: 3, text: "Portfolio", icon: <FaBriefcase /> },
    { id: 4, text: "Experience", icon: <FaRegClock /> },
    { id: 5, text: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className={`max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${menu ? "bg-white shadow-lg" : "bg-gradient-to-r from-purple-500 to-blue-500"}`}>
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <img
            src={pic}
            className="h-12 w-12 rounded-full transform transition-transform duration-300 hover:scale-110"
            alt=""
          />
          <h1 className="font-semibold text-xl cursor-pointer text-white">
            Oftanenus<span className="text-green-500 text-2xl">l</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text, icon }) => (
              <li
                className="flex items-center cursor-pointer relative group"
                key={id}
              >
                {icon}
                <Link
                  className="ml-1 text-white hover:text-green-500 transition-colors duration-300"
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </li>
            ))}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
            {menu ? <IoCloseSharp size={24} className="text-white" /> : <AiOutlineMenu size={24} className="text-white" />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="bg-white shadow-lg transition-transform duration-300">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl text-gray-800">
            {navItems.map(({ id, text, icon }) => (
              <li
                className="flex items-center hover:text-green-500 duration-300 font-semibold cursor-pointer transform hover:scale-105 transition-transform"
                key={id}
              >
                {icon}
                <Link
                  className="ml-1"
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
