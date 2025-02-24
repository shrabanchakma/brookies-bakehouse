import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
const Ratings = () => {
  const starCount = [1, 2, 3, 4, 5];
  return (
    <span className="flex items-center ">
      {starCount.map((star, idx) => (
        <FaStar key={idx} className="text-brookies-secondary " />
      ))}
    </span>
  );
};

Ratings.propTypes = {};

export default Ratings;
