import React from "react";
import { Link } from "react-router-dom";
import bclogo from "../assets/bc-logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center max-md:flex-col bg-purple-700 text-white p-4 shadow-lg mx-auto lg:px-16 xl:px-32">
      <div className="flex justify-center">
        <img src={bclogo} width="48px" height="48px" />
        <h1 className="text-3xl font-bold">BeyondChats</h1>
      </div>
      <nav className="flex justify-between items-center max-sm:gap-4 sm:gap-8">
        <Link to="/" className="text-teal-200 md:text-md text-lg hover:text-teal-300">
          Home
        </Link>
        <Link
          to="/setup"
          className="text-teal-200 md:text-lg text-md hover:text-teal-300"
        >
          Setup Organization
        </Link>
        <Link
          to="/chatbot"
          className="text-teal-200 md:text-lg text-md hover:text-teal-300"
        >
          Chatbot Integration
        </Link>
      </nav>
    </header>
  );
};

export default Header;
