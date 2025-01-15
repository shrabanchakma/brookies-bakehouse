import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <header className="top-0 z-50 absolute w-full ">
      <div className="container mx-auto py-5 px-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-brookies-primary">
          Brookie Bakehouse
        </h1>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-base-200">
            <li>
              <a
                href="#delivery"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                For Delivery
                <RiArrowDropDownLine size={24} />
              </a>
            </li>
            <li>
              <a
                href="#pickup"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                Pickup
                <RiArrowDropDownLine size={24} />
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                Contact
                <RiArrowDropDownLine size={24} />
              </a>
            </li>
            <li>
              <a
                href="#cart"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                Cart
                <RiArrowDropDownLine size={24} />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-brookies-primary"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
