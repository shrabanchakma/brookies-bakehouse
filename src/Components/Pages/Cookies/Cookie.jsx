import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
const Cookie = ({ cookie }) => {
  return (
    <div key={cookie.id} className=" w-96  hover:cursor-pointer">
      <figure className="relative w-9/12 mx-auto">
        <div className="relative">
          <img
            src={cookie.images[0]}
            alt={cookie.name}
            className="object-cover h-96 w-full transition-opacity duration-300 ease-in-out hover:opacity-0"
          />
          <img
            src={cookie.images[1]}
            alt={`${cookie.name} hover`}
            className="absolute top-0 left-0 object-cover h-96 w-full opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
          />
        </div>
      </figure>
      <div className="p-3 pl-2 text-brookies-primary">
        <h2>{cookie.name}</h2>
        <p>${cookie.price.toFixed(2)} AUD</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center justify-between w-[4.5rem] text-brookies-secondary">
            <FaStar size={10} />
            <FaStar size={10} />
            <FaStar size={10} />
            <FaStar size={10} />
          </div>
          <p className="text-[.8rem]">({cookie.ratings})</p>
        </div>
      </div>
    </div>
  );
};

Cookie.propTypes = {};

export default Cookie;
