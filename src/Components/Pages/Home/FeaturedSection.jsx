import React from "react";
import PropTypes from "prop-types";
import brand1 from "../../../assets/Featured Brands/b1.png";
import brand2 from "../../../assets/Featured Brands/b2.png";
import brand3 from "../../../assets/Featured Brands/b3.png";
const FeaturedSection = (props) => {
  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl  md:text-4xl text-brookies-primary uppercase text-center my-2">
        Featured In:
      </h2>
      <div className="w-full flex  items-center justify-center">
        <div className="w-5/12  flex flex-col lg:flex-row items-center ">
          <figure className="relative mx-auto">
            <img
              src={brand1}
              alt={brand1}
              className="object-cover  rounded-xl"
            />
          </figure>
          <figure className="relative mx-auto">
            <img
              src={brand2}
              alt={brand2}
              className="object-cover  rounded-xl"
            />
          </figure>
          <figure className="relative mx-auto">
            <img
              src={brand3}
              alt={brand3}
              className="object-cover  rounded-xl"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

FeaturedSection.propTypes = {};

export default FeaturedSection;
