import React from "react";

const Button = () => {
  return (
    <button type="button" className={` outline-none  rounded-full `}>
      <a
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-full shadow-2xl group"
      >
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-600 rounded-full blur-md ease"></span>
        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-400 rounded-full blur-md"></span>
        </span>
        <span className="relative text-white">Join now</span>
      </a>
    </button>
  );
};

export default Button;
