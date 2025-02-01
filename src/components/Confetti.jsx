import React from "react";
import Confetti from "react-confetti";
import bcfb from "../assets/bcfb.png";
import bctwitter from "../assets/bctwitter.png";
import bcwhatsapp from "../assets/bcwhatsapp.png";

const ConfettiUI = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 max-sm:w-[90%] max-lg:w-[80%] min-h-screen">
      <Confetti />
      <h3 className="text-3xl font-semibold text-center mt-8">Success! Chatbot Integrated!</h3>
      <button className="mt-4 px-8 py-3 bg-teal-300 text-white rounded-md hover:bg-teal-200 transition">
        Explore Admin Panel
      </button>
      <button className="mt-4 px-8 py-3 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition">
        Start Talking to Your Chatbot
      </button>
      <div className="flex mt-4">
              <img src={bcfb} alt="Facebook" className="w-10 h-10 mx-2" />
              <img src={bctwitter} alt="Twitter" className="w-10 h-10 mx-2" />
              <img src={bcwhatsapp} alt="Whatsapp" className="w-10 h-10 mx-2" />
            </div>
    </div>
  );
};

export default ConfettiUI;
