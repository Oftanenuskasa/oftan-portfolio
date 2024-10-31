import React from "react";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";

function Experience() {
  const cardItem = [
    { id: 1, logo: css, name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { id: 2, logo: java, name: "Java", link: "https://docs.oracle.com/en/java/" },
    { id: 3, logo: javascript, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { id: 4, logo: oracle, name: "Oracle", link: "https://docs.oracle.com/" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="text-center">
        {/* Decorated and Animated Header */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="text-blue-500 text-4xl animate-pulse duration-1000">✨</div>
          <h1 className="text-5xl font-extrabold text-blue-600 tracking-wide transform transition duration-500 hover:scale-110">
            Experience
          </h1>
          <div className="text-blue-500 text-4xl animate-pulse duration-1000">✨</div>
        </div>

        {/* Animated Paragraph with Slide Up and Fade In Effect */}
        <p
          className="text-xl mb-8 opacity-0 transition-opacity duration-1000 delay-300"
          style={{
            animation: "slideUpFade 0.7s ease-out forwards",
            animationDelay: "0.3s",
          }}
        >
          I have over 2 years of experience in the following technologies.
        </p>

        {/* Technology Icons with Hover and Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {cardItem.map(({ id, logo, name, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center border-2 rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] shadow-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:-rotate-3 hover:shadow-2xl hover:bg-blue-100 hover:border-blue-300 duration-300 animate-bounce hover:animate-spin"
            >
              <img
                src={logo}
                alt={name}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full transition-transform duration-300"
              />
              <div className="mt-3 font-semibold text-gray-800 text-lg animate-pulse">
                {name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

// Add the slideUpFade keyframes in your CSS file
// Example:
// @keyframes slideUpFade {
//   0% {
//     transform: translateY(20px);
//     opacity: 0;
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
