import React from "react";
import PropTypes from "prop-types";
import Postcards from "../Postcards/Postcards";

const PostcardsSection = (props) => {
  return (
    <div className="mt-20">
      <div className="text-start text-brookies-primary">
        <h1 className="text-4xl font-bold  ">Say something sweet</h1>
        <p className="mt-2 text-[0.9rem] ">
          Add a special message with our Brookies branded postcards. This is a{" "}
          <span className="underline">blank card</span> provided for you to
          write your own message on.
        </p>
      </div>
      <Postcards />
    </div>
  );
};

PostcardsSection.propTypes = {};

export default PostcardsSection;
