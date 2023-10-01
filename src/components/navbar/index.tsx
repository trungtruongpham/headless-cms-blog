"use client";

import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl bg-slate-300 rounded-full p-2">
          <Link href="/" className="text-black">TT</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="pt-2 md:hidden">
          <ul className="">
            <li>
              <a href="#" className="block py-2 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

NavBar.propTypes = {};

export default NavBar;
