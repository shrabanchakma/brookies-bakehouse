import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <header className="top-0 z-50 absolute w-full ">
      <div className="mx-auto py-7 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-brookies-primary">
          Brookie Bakehouse
        </h1>
        <nav>
          <ul className="flex space-x-6 text-base-200">
            <li className="relative">
              <a
                href="#delivery"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                For Delivery
                <RiArrowDropDownLine size={35} />
              </a>
            </li>
            <li className="relative">
              <a
                href="#pickup"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                Pickup
                <RiArrowDropDownLine size={35} />
              </a>
            </li>
            <li className="relative">
              <a
                href="#contact"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                Contact
                <RiArrowDropDownLine size={35} />
              </a>
            </li>
            <li className="relative">
              <a
                href="#cart"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                Cart
                <RiArrowDropDownLine size={35} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
