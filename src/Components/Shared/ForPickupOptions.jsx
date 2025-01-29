import React from "react";
import PropTypes from "prop-types";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ForPickupOptions = (props) => {
  const closeDrawer = () => {
    document.getElementById("my-drawer-3").checked = false;
  };

  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-3"
          className="hover:text-gray-600 flex items-center font-bold uppercase text-[.9rem] cursor-pointer"
        >
          Pickup
          <RiArrowDropDownLine size={24} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-brookies-secondary text-base-content min-h-full w-2/5 py-20 pl-10 pt-10 space-y-10">
          {/* Sidebar content here */}
          <div
            onClick={closeDrawer}
            className="flex justify-end pr-10 hover:cursor-pointer"
          >
            <IoCloseOutline size={28} />
          </div>
          <Link
            to="/collections/cakes"
            className={`uppercase text-brookies-primary font-bold text-4xl`}
          >
            cakes
          </Link>
          <Link
            to="/collections/cookies"
            className="uppercase text-brookies-primary font-bold text-4xl"
          >
            cookies
          </Link>
          <Link
            to="/collections/brownies"
            className="uppercase text-brookies-primary font-bold text-4xl"
          >
            brownies
          </Link>
          <Link
            to="/collections/cupcakes"
            className={`uppercase text-brookies-primary font-bold text-4xl`}
          >
            cupcakes
          </Link>
          <Link
            to="/collections/brownies"
            className={`uppercase text-brookies-primary font-bold text-4xl`}
          >
            merch
          </Link>
          <Link
            to="/collections/brownies"
            className="uppercase text-brookies-primary font-bold text-4xl"
          >
            cards & candles
          </Link>
          <Link
            to="/collections/corporate-orders"
            className={`uppercase text-brookies-primary font-bold text-4xl`}
          >
            corporate orders
          </Link>
        </ul>
      </div>
    </div>
  );
};

ForPickupOptions.propTypes = {};

export default ForPickupOptions;
