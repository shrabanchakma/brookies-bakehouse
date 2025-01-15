import React from "react";
import PropTypes from "prop-types";
import Merches from "./Merches";

const MerchSection = () => {
  return (
    <div className="mt-20">
      <div className="text-start text-brookies-primary">
        <h1 className="text-4xl font-bold">Explore Our Merch</h1>
        <p className="mt-2 text-[0.9rem]">
          Shop exclusive Brookies merchandise and show off your love for
          cookies!
        </p>
      </div>
      <Merches />
    </div>
  );
};

MerchSection.propTypes = {};

export default MerchSection;
