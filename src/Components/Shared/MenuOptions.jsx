import React from "react";
import PropTypes from "prop-types";
import ForDeliveryDisclosure from "./ForDeliveryDisclosure";
import PickupDisclosure from "./PickupDisclosure";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
const MenuOptions = (props) => {
  const closeDrawer = () => {
    document.getElementById("my-drawer").checked = false;
  };
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem] cursor-pointer"
        >
          Menu
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <section className="min-h-full w-4/5 bg-brookies-secondary ">
          <div
            onClick={closeDrawer}
            className="flex justify-start pt-6 pb-10 pl-4 hover:cursor-pointer text-brookies-primary"
          >
            <IoCloseOutline size={28} />
          </div>
          <ul className="text-base-content space-y-8 ">
            <li>
              <ForDeliveryDisclosure />
            </li>
            <li>
              <PickupDisclosure />
            </li>
            <li className="">
              <Link
                to="/contact-us"
                className="text-lg xsm:text-2xl font-bold text-brookies-primary  uppercase px-4"
              >
                contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center bg-brookies-secondary p-2 mx-4  w-11/12 border-b border-brookies-primary pt-20">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-brookies-primary placeholder-brookies-primary flex-1 "
            />
            <FiSearch className="text-brookies-primary text-lg" />
          </div>
          <div className="flex items-center justify-start mt-5 ml-4 text-brookies-primary gap-2 text-lg pt-10">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
          </div>
        </section>
      </div>
    </div>
  );
};

MenuOptions.propTypes = {};

export default MenuOptions;
