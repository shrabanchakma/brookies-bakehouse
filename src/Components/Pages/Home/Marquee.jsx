import React from "react";
import PropTypes from "prop-types";

const Marquee = (props) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-brookies-secondary py-2">
      <div className="inline-block animate-marquee text-[1rem] font-bold text-brookies-primary ">
        THE INTERNET'S FAVOURITE COOKIES THE INTERNET'S FAVOURITE COOKIES THE
        INTERNET'S FAVOURITE COOKIES THE INTERNET'S FAVOURITE COOKIE
      </div>
    </div>
  );
};

Marquee.propTypes = {};

export default Marquee;
