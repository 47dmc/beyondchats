import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6 mt-10">
      <div className="mx-auto flex justify-between max-sm:flex-col items-center p-4 lg:px-16 xl:px-32">
        <p className="text-sm md:text-md">© 2025 BeyondChats. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/privacy" className="text-sm md:text-md hover:text-teal-300">Privacy Policy</a>
          <a href="/terms" className="text-sm md:text-md hover:text-teal-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
