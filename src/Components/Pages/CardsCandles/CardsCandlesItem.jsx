import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const CardsCandlesItem = ({ item }) => {
  return (
    <div className="w-80 hover:cursor-pointer mx-auto -z-10">
      <figure className="relative w-full">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover h-80 w-full"
        />
      </figure>
      <div className="p-3 text-brookies-primary">
        <h2 className="font-bold text-lg">{item.title}</h2>
        <p className="text-[1rem] font-semibold">
          ${item.price.toFixed(2)} AUD
        </p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-brookies-secondary">
            {Array.from({ length: Math.floor(item.ratings) }).map(
              (_, index) => (
                <FaStar key={index} size={12} />
              )
            )}
          </div>
          <p className="text-[.8rem]">({item.ratings.toFixed(1)})</p>
        </div>
      </div>
    </div>
  );
};

CardsCandlesItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardsCandlesItem;
