import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Postcard = ({ postcard }) => {
  return (
    <div key={postcard.id} className="w-auto xsm:w-80 hover:cursor-pointer">
      <figure className="relative w-9/12 mx-auto">
        <div className="relative">
          <img
            src={postcard.image}
            alt={postcard.name}
            className="object-cover h-96 w-full"
          />
        </div>
      </figure>
      <div className="p-3 pl-2 text-brookies-primary">
        <h2>{postcard.name}</h2>
        <p>${postcard.price.toFixed(2)} AUD</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center justify-between w-[4.5rem] text-brookies-secondary">
            <FaStar size={10} />
            <FaStar size={10} />
            <FaStar size={10} />
            <FaStar size={10} />
          </div>
          <p className="text-[.8rem]">({postcard.ratings})</p>
        </div>
      </div>
    </div>
  );
};

Postcard.propTypes = {
  // postcard: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   name: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   ratings: PropTypes.number.isRequired,
  //   image: PropTypes.string.isRequired,
  // }).isRequired,
};

export default Postcard;
