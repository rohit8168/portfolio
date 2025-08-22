import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Header() {
  return (
<header className="flex items-center justify-between w-full px-6 py-4 bg-white mb-0 pb-0">
      {/* Logo + Name */}
      <div className="flex items-center">
        <div className="text-2xl font-bold text-orange-500">IE</div>
        <span className="ml-2 text-xl font-semibold">Illustrator Box</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#projects" className="hover:text-orange-500">Projects</a>
        <a href="#services" className="hover:text-orange-500">Services</a>
        <a href="#about" className="hover:text-orange-500">About Us</a>
      </nav>

      {/* Social Icons */}
      <div className="flex items-center space-x-4 text-xl">
        <a href="#" className="hover:text-orange-500"><SiUpwork /></a>
        <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
        <a href="#" className="hover:text-orange-500"><FaLinkedin /></a>
        <a href="#" className="hover:text-orange-500"><FaEnvelope /></a>
      </div>
    </header>
  );
}
