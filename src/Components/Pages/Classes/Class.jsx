import React from "react";
import PropTypes from "prop-types";

const Class = ({ classItem }) => {
  return (
    <div key={classItem.id} className="w-full hover:cursor-pointer">
      <figure className="relative w-11/12 mx-auto">
        <img
          src={classItem.image}
          alt={classItem.name}
          className="object-cover h-[calc(100vh-250px)] w-full rounded-xl"
        />
      </figure>
      {/* Title outside the figure */}
      <div className="mt-3 text-start text-brookies-primary pl-4">
        <p className="text-lg font-medium">{classItem.name}</p>
      </div>
    </div>
  );
};

Class.propTypes = {
  classItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Class;
