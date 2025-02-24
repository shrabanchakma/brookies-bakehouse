import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const CakeItem = ({ cake, index, scrollY }) => {
  const isEven = index % 2 === 0;
  const isBestSeller = cake.ratings >= 4.8;
  // Calculate maximum scroll effect with a cap
  const maxTransform = 50; // Maximum pixels to move
  const scrollEffect = Math.min(
    isEven ? -scrollY * 0.05 : scrollY * 0.05,
    isEven ? -maxTransform : maxTransform
  );
  return (
    <div
      className={`relative group cursor-pointer w-[25rem] place-self-center ${
        isEven ? "" : "mt-24"
      }`}
      style={{
        transform: `translateY(${scrollEffect}px)`,
      }}
    >
      {isBestSeller && (
        <div className="absolute -top-4 -left-4 bg-brookies-primary text-white text-xs rounded-full p-3 z-10">
          <span className="block text-center font-bold">BEST</span>
          <span className="block text-center font-bold">SELLER</span>
        </div>
      )}

      <div className="overflow-hidden ">
        <img
          src={cake.image}
          alt={cake.title}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 text-brookies-primary">
        <h3 className="text-lg font-semibold text-stone-800">{cake.title}</h3>
        <p className="text-stone-700">${cake.price.toFixed(2)} AUD</p>

        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-brookies-secondary">
            {Array.from({ length: Math.floor(cake.ratings) }).map(
              (_, index) => (
                <FaStar key={index} size={12} />
              )
            )}
          </div>
          <p className="text-[.8rem]">({cake.ratings.toFixed(1)})</p>
        </div>
      </div>
    </div>
  );
};

export default CakeItem;
