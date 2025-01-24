import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import ForDeliveryOptions from "./ForDeliveryOptions";
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
            <ForDeliveryOptions />
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
        <nav className="block md:hidden">
          <ul className="flex space-x-6 text-base-200">
            <li>
              <a
                href="#cart"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                Cart
                <RiArrowDropDownLine size={24} />
              </a>
            </li>
            <li>
              <a
                href="#cart"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                Menu
                <RiArrowDropDownLine size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
