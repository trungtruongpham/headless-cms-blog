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
        <div className="text-white font-extrabold text-xl bg-slate-300 p-2 rounded-full cursor-pointer">
          <Link href="/" className="text-black font-bold hover:no-underline rounded-full">TT</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white font-semibold hover:text-gray-300 hover:underline hover:underline-offset-4 hover:duration-700">
            Home
          </Link>
          <Link href="/about" className="text-white font-semibold hover:text-gray-300 hover:underline hover:underline-offset-4 hover:duration-700">
            About
          </Link>
          <Link href="/contact" className="text-white font-semibold hover:text-gray-300 hover:underline hover:underline-offset-4 hover:duration-700">
            Contact
          </Link>
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
              <Link href="/" className="block font-semibold py-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block font-semibold py-2 text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block font-semibold py-2 text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

NavBar.propTypes = {};

export default NavBar;
