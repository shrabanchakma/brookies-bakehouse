import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import ForDeliveryOptions from "./ForDeliveryOptions";
import ForPickupOptions from "./ForPickupOptions";
import MenuOptions from "./MenuOptions";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header
      className={`top-0  w-full ${isHomePage ? "absolute " : "relative"}`}
    >
      <div className="container mx-auto py-5 px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className=" text-4xl font-bold text-brookies-primary uppercase "
        >
          Brookie Bakehouse
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-base-200">
            <ForDeliveryOptions isHomePage={isHomePage} />
            <ForPickupOptions isHomePage={isHomePage} />
            <li>
              <Link
                to={"/pages/contact"}
                href="#contact"
                className={`hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem] cursor-pointer ${
                  isHomePage ? "" : "text-brookies-primary"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="#cart"
                className={`hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem] cursor-pointer ${
                  isHomePage ? "" : "text-brookies-primary"
                }`}
              >
                {`Cart(0)`}
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <nav className="block md:hidden">
          <ul className="flex space-x-6 text-base-200">
            {/* <li>
              <a
                href="#cart"
                className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem]"
              >
                Cart
                <RiArrowDropDownLine size={24} />
              </a>
            </li> */}
            <MenuOptions />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
