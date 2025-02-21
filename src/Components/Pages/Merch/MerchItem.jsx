import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const MerchItem = ({ merch }) => {
  return (
    <div className="hover:cursor-pointer mx-auto ">
      <figure className="relative w-full">
        <img
          src={merch.image}
          alt={merch.name}
          className="object-cover h-[30rem] w-full"
        />
      </figure>
      <div className="p-3 text-brookies-primary">
        <h2 className="font-bold text-lg">{merch.name}</h2>
        <p className="text-[1rem] font-semibold">
          ${merch.price.toFixed(2)} AUD
        </p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-brookies-secondary">
            {Array.from({ length: Math.floor(merch.ratings) }).map(
              (_, index) => (
                <FaStar key={index} size={12} />
              )
            )}
          </div>
          <p className="text-[.8rem]">({merch.ratings.toFixed(1)})</p>
        </div>
      </div>
    </div>
  );
};

export default MerchItem;
