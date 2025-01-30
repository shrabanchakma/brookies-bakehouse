import React, { useState } from "react";
import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";

const CookiesFilter = (props) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  return (
    <section className="bg-pink-100 h-full px-5 py-10 ">
      {" "}
      <div className="mb-6 text-brookies-primary ">
        <h3 className="mb-2 text-[14px]">Availability</h3>
        <div className="border border-b-0 border-brookies-primary mb-5"></div>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-xs  rounded-none"
            />
            <span className="ml-2">In stock (18)</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-xs  rounded-none"
            />
            <span className="ml-2">Out of stock (6)</span>
          </label>
        </div>
      </div>
      {/* Price Range Section */}
      <div className="text-brookies-primary">
        <h3 className="mb-2 text-[14px]">Price</h3>
        <div className="border border-b-0 border-brookies-primary mb-5 "></div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FiDollarSign />
            <input
              type="number"
              value={minPrice}
              placeholder="From"
              onChange={(e) => setMinPrice(e.target.value)}
              className="p-1 py-[0.3rem] rounded-md border border-brookies-primary w-20  focus:outline-2 focus:outline-brookies-primary text-[14px]"
            />
          </div>
          <span>-</span>
          <div className="flex items-center">
            <FiDollarSign />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="p-1 py-[0.3rem] rounded-md border border-brookies-primary w-20  focus:outline-2 focus:outline-brookies-primary text-[14px]"
              placeholder="To"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

CookiesFilter.propTypes = {};

export default CookiesFilter;
