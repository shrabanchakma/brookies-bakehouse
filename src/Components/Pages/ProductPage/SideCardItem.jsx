import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const SideCardItem = ({ item }) => {
  return (
    <div className="w-full hover:cursor-pointer mx-auto ">
      <figure className="relative w-[8rem] ">
        <img src={item.image} alt={item.name} className="object-cover" />
      </figure>
      <div className=" text-brookies-primary">
        <h2 className="font-bold text-sm">{item.title}</h2>
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

export default SideCardItem;
