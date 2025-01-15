import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Postcard from "./Postcard";

const Postcards = (props) => {
  const [postcards, setPostcards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostcards = async () => {
      try {
        const response = await fetch("/postcards.json");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch postcards. Status: ${response.status}`
          );
        }
        const data = await response.json();
        setPostcards(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching postcards:", err);
      }
    };
    fetchPostcards();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
        {postcards &&
          postcards.length > 0 &&
          postcards.map((postcard) => (
            <Postcard key={postcard.id} postcard={postcard} />
          ))}
      </div>
    </div>
  );
};

Postcards.propTypes = {};

export default Postcards;
