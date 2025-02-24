import React from "react";
import PropTypes from "prop-types";
import SideCardItem from "./SideCardItem";

const SideCards = ({ cardsCandles }) => {
  return (
    <div className="text-brookies-primary w-[20rem] place-self-center mt-10">
      <h2 className="uppercase text-2xl font-bold">on the side</h2>
      <div className="grid grid-cols-2 gap-5 mt-4">
        {cardsCandles.map((item) => (
          <SideCardItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

SideCards.propTypes = {};

export default SideCards;
