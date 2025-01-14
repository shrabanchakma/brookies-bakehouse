import React from "react";
import PropTypes from "prop-types";
import Cookies from "../Cookies/Cookies";

const CookiesSection = (props) => {
  return (
    <div className="mt-20 ">
      <div className="text-start text-brookies-primary">
        <h1 className="text-4xl font-bold  ">Send Cookies in the mail 💌</h1>
        <p className="mt-2 text-[0.9rem] ">
          Shop our range of deliciously chunky cookies shipped to your doorstep.
        </p>
      </div>
      <Cookies />
    </div>
  );
};

CookiesSection.propTypes = {};

export default CookiesSection;
