import React from "react";
import PropTypes from "prop-types";
import Cookies from "../Cookies/Cookies";

const CookiesSection = (props) => {
  return (
    <div className="mt-10 px-4 md:px-8 lg:px-12">
      <div className="text-start text-brookies-primary">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Send Cookies in the mail 💌
        </h1>
        <p className="mt-2 text-sm md:text-base lg:text-lg">
          Shop our range of deliciously chunky cookies shipped to your doorstep.
        </p>
      </div>
      <Cookies />
    </div>
  );
};

CookiesSection.propTypes = {};

export default CookiesSection;
