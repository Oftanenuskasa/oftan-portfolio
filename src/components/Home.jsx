/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
import pic from "../assets/oftaan.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import {ReactTyped} from "react-typed"; // Corrected import for react-typed

function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg p-8 transition-transform duration-500 transform hover:scale-105"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"> {/* Removed opacity-0 */}
          <span className="text-xl text-white font-semibold">Welcome to my portfolio, I am Oftaan</span>
          <div className="flex space-x-1 text-2xl md:text-4xl text-white">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-yellow-300 font-bold"
              strings={["Oftaan", "Kind Hearted", "Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <p className="text-sm md:text-md text-justify text-white">
            Hello! I am Oftanenus Kasa, a 23-year-old software engineering student in my fifth year at Wolkite University, Ethiopia. 
            I have a strong passion for technology and software development. Throughout my studies, I have gained skills in various programming languages and technologies. 
            I am eager to apply my knowledge in real-world projects and contribute to innovative solutions. Thank you for your time!
          </p>

          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-2">
              <h1 className="font-bold text-center text-white">Available on</h1>
              <ul className="flex space-x-5">
                {[
                  { icon: <FaFacebook />, url: "https://web.facebook.com/Oftanenuskasa/" },
                  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/oftanenus-kasa-4692aa257/" },
                  { icon: <FaGithub />, url: "https://github.com/" },
                  { icon: <FaInstagram />, url: "https://www.instagram.com/" },
                  { icon: <FaTelegram />, url: "https://t.me/" },
                ].map(({ icon, url }, index) => (
                  <li key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
                      <span className="text-white text-2xl">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-center text-white">Currently working on</h1>
              <div className="flex space-x-5">
                {[
                  { icon: <FaHtml5 />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                  { icon: <FaCss3Alt />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                  { icon: <FaJsSquare />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                  { icon: <FaReact />, url: "https://reactjs.org/docs/getting-started.html" },
                  { icon: <SiPostgresql />, url: "https://www.postgresql.org/docs/" },
                ].map(({ icon, url }, index) => (
                  <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
                    <span className="text-white text-2xl">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
          <img
            src={pic}
            className="rounded-lg md:w-[400px] md:h-[400px] w-[300px] h-[300px] border-4 border-white transform transition-transform duration-300 hover:scale-110 animate-fadeIn"
            alt="Oftanenus Kasa"
          />
        </div>
      </div>
      <hr className="my-10 border-t border-gray-300" />
    </div>
  );
}

export default Home;
