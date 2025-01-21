import React from "react";
import PropTypes from "prop-types";

const VisitUsSection = (props) => {
  return (
    <div className="h-screen bg-brookies-secondary flex flex-col lg:flex-row items-center overflow-hidden">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 px-4 lg:px-0">
        <div>
          <h2 className="font-bold text-4xl text-brookies-primary text-center mb-9">
            Visit Us IRL:
          </h2>
          <h3 className="font-bold text-[14px] text-brookies-primary uppercase text-center my-2">
            Fortitude Valley
          </h3>
          <p className="text-brookies-primary uppercase text-center my-2 underline cursor-pointer">
            15 Marshall Street, Fortitude Valley <br /> Queensland 4006
          </p>
          <p className="text-brookies-primary uppercase text-center my-2">
            Tuesday 8:00am-2:00pm
            <br />
            <br /> Wednesday-Friday 8:00am-5:00pm
            <br />
            <br />
            Saturdays/Sundays 8:00am-2:00pm
          </p>
        </div>
        <div className="w-full text-center">
          <span className="my-10 text-brookies-primary">-</span>
        </div>
        <div>
          <h3 className="font-bold text-[14px] text-brookies-primary uppercase text-center my-2">
            Brisbane Airport
          </h3>
          <p className="text-brookies-primary uppercase text-center my-2 underline cursor-pointer">
            Gate 25, Domestic Airport
          </p>
          <p className="text-brookies-primary uppercase text-center my-2">
            7 days, 6:00am-5:00pm
          </p>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-96 lg:h-full">
        <img
          src="https://i.ibb.co.com/C0ZbdgX/ezgif-com-gif-to-mp4.gif"
          alt="Visit Us Location"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

VisitUsSection.propTypes = {};

export default VisitUsSection;
