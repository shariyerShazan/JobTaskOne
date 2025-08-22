import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">JobTask</h1>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="p-3 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors"
            title="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-700 hover:bg-sky-400 transition-colors"
            title="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-700 hover:bg-pink-500 transition-colors"
            title="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-700 hover:bg-blue-700 transition-colors"
            title="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
