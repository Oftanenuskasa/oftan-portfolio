import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr className="border-gray-700" />
      <footer className="py-12 bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-600 text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-8">
              <a
                href="https://web.facebook.com/Oftanenuskasa/" // Replace with your Facebook link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition duration-300 transform hover:scale-125"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://twitter.com/yourprofile" // Replace with your Twitter link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-125"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://www.instagram.com/oftanenuskasa/" // Replace with your Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition duration-300 transform hover:scale-125"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/oftanenus-kasa-4692aa257/" // Replace with your LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-700 transition duration-300 transform hover:scale-125"
              >
                <FaLinkedinIn size={28} />
              </a>
            </div>

            {/* Decorative line above the footer text */}
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-lg font-semibold">
                &copy; 2024 oftanenus kasa. All rights reserved.
              </p>
              <p className="text-sm italic">Supportive Partner ❤️ oftanenus kasa</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
