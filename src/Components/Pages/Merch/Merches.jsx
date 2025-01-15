import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Merch from "./Merch";

const Merches = () => {
  const [merches, setMerches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMerches = async () => {
      try {
        const response = await fetch("/merch.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch merch. Status: ${response.status}`);
        }
        const data = await response.json();
        setMerches(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching merch:", err);
      }
    };
    fetchMerches();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  mt-16">
        {merches &&
          merches.length > 0 &&
          merches.map((merch) => <Merch key={merch.id} merch={merch} />)}
      </div>
    </div>
  );
};

Merches.propTypes = {};

export default Merches;
