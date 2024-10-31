/* eslint-disable no-unused-vars */
import React from "react";
import { FaGraduationCap, FaUser, FaLaptopCode, FaTrophy } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdWork } from "react-icons/md";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold mb-5 text-center text-green-700 transform transition duration-500 hover:scale-110 hover:text-green-900">
          About Me
        </h1>

        <p className="text-center mb-8 text-gray-600 text-lg">
          Hello! My name is{" "}
          <strong className="text-green-700 animate-pulse transition duration-300 hover:text-green-900">
            Oftanenus Kasa
          </strong>
          , a passionate Software Engineer with a keen eye for web development.
        </p>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 transition-transform duration-300 hover:scale-105 hover:text-green-800 flex justify-center items-center">
            <FaUser className="mr-2 text-green-500" />
            Personal Information
          </h2>
          <p className="text-gray-700 mb-2 text-lg">
            <span className="flex items-center justify-center">
              👤 Age:{" "}
              <strong className="text-green-700 transition-transform duration-300 hover:text-green-900 hover:scale-105">
                23
              </strong>
            </span>
          </p>
          <p className="text-gray-700 mb-2 text-lg">
            <span className="flex items-center justify-center">
              <FaGraduationCap className="mr-2 text-green-500" />
              Education:{" "}
              <strong className="text-green-700 transition-transform duration-300 hover:text-green-900 hover:scale-105">
                Wolkite University
              </strong>
            </span>
          </p>
          <p className="text-gray-700 mb-2 text-lg">
            <span className="flex items-center justify-center">
              📚 Current GPA:{" "}
              <strong className="text-green-700 transition-transform duration-300 hover:text-green-900 hover:scale-105">
                3.55
              </strong>
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="flex-1">
            <h1 className="text-green-600 font-semibold text-xl mb-4 transform transition duration-300 hover:scale-105 hover:text-green-700 flex items-center">
              <HiOutlineAcademicCap className="mr-2 text-green-500" />
              Education & Training
            </h1>
            <ul className="ml-5 space-y-2">
              <li className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
                <span className="text-green-500 animate-pulse">🎓</span>
                <strong>Software Engineering</strong>, Wolkite University
              </li>
              {["HTML", "CSS", "JavaScript", "React", "PostgreSQL"].map((item) => (
                <li
                  key={item}
                  className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
                >
                  <span className="text-green-500 animate-bounce">💻</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h1 className="text-green-600 font-semibold text-xl mb-4 transform transition duration-300 hover:scale-105 hover:text-green-700 flex items-center">
              <FaLaptopCode className="mr-2 text-green-500" />
              Skills & Expertise
            </h1>
            <ul className="ml-5 space-y-2">
              {[
                "Proficient in HTML, CSS, JavaScript, and React",
                "Experienced with PostgreSQL for database management",
                "Strong grasp of web design principles",
                "Excellent problem-solving skills",
                "Effective communicator and collaborator",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
                >
                  <span className="text-green-500 animate-spin">⚙️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <br />

        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="flex-1">
            <h1 className="text-green-600 font-semibold text-xl mb-4 transform transition duration-300 hover:scale-105 hover:text-green-700 flex items-center">
              <MdWork className="mr-2 text-green-500" />
              Professional Experience
            </h1>
            <ul className="ml-5 space-y-2">
              <li className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
                <span className="text-green-500 animate-pulse">🏢</span>
                <span>Front-End Developer at Xion Computing PLC, Addis Ababa (2023 - 2024)</span>
              </li>
              <li className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
                <span className="text-green-500 animate-bounce">🛠️</span>
                <span>Worked on Inventory Management System project</span>
              </li>
              <li className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
                <span className="text-green-500 animate-spin">📱</span>
                <span>Built responsive UI with React and Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
                <span className="text-green-500 animate-ping">🔌</span>
                <span>Integrated RESTful APIs for dynamic data flow</span>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h1 className="text-green-600 font-semibold text-xl mb-4 transform transition duration-300 hover:scale-105 hover:text-green-700 flex items-center">
              <FaTrophy className="mr-2 text-green-500" />
              Achievements & Awards
            </h1>
            <ul className="ml-5 space-y-2">
              {[
                "Red Hat Java Certificate",
                "Red Hat Basics Programming and Automation",
                "Huawei Datacom Certificate",
                "Oracle Database Certificate",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
                >
                  <span className="text-green-500 animate-pulse">🏆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
