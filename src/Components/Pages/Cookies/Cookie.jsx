import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cookie = ({ cookie }) => {
  return (
    <Link
      to={`/collections/cookies/${cookie.id}`}
      key={cookie.id}
      className="w-full max-w-xs mx-auto hover:cursor-pointer"
    >
      <figure className="relative">
        <div className="relative">
          <img
            src={cookie.images[0]}
            alt={cookie.name}
            className="object-cover w-full h-96 lg:h-72 xl:h-96 transition-opacity duration-300 ease-in-out hover:opacity-0"
          />
          <img
            src={cookie.images[1]}
            alt={`${cookie.name} hover`}
            className="absolute top-0 left-0 object-cover w-full h-96 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
          />
        </div>
      </figure>
      <div className="p-3 text-brookies-primary">
        <h2 className="text-lg font-semibold">{cookie.name}</h2>
        <p className="text-sm font-medium">${cookie.price.toFixed(2)} AUD</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-brookies-secondary">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>
          <p className="text-xs">({cookie.ratings})</p>
        </div>
      </div>
    </Link>
  );
};

Cookie.propTypes = {
  // cookie: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   name: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   ratings: PropTypes.number.isRequired,
  //   images: PropTypes.arrayOf(PropTypes.string).isRequired,
  // }).isRequired,
};

export default Cookie;
