import React from "react";
import Classes from "../Classes/Classes";

const ClassesSection = () => {
  return (
    <div className="my-32">
      <div className="text-start text-brookies-primary">
        <h1 className="text-4xl font-bold">Online Classes & Recipes</h1>
        <p className="mt-2 text-[0.9rem]">
          Get the Brookies Bakehouse recipes and join an online video class
          hosted by Brookies herself.
        </p>
      </div>
      <Classes />
    </div>
  );
};

export default ClassesSection;
