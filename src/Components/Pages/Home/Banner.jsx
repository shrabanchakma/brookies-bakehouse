import React from "react";
import PropTypes from "prop-types";

const Banner = (props) => {
  return (
    <div className="w-full bg-brookies-primary text-brookies-secondary flex items-center justify-center font-bold uppercase h-[20rem] xsm:h-[30rem] sm:h-[40rem] md:h-[48rem]  lg:h-[30rem] xl:h-[40rem] 2xl:h-[50rem]">
      <span className="text-[3.5rem] xsm:text-[4.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[13rem]">
        Brookies
      </span>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
