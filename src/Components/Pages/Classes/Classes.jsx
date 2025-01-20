import React, { useEffect, useState } from "react";
import Class from "./Class";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("/classes.json");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch classes. Status: ${response.status}`
          );
        }
        const data = await response.json();
        setClasses(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching classes:", err);
      }
    };
    fetchClasses();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {classes &&
          classes.length > 0 &&
          classes.map((classItem) => (
            <Class key={classItem.id} classItem={classItem} />
          ))}
      </div>
    </div>
  );
};

export default Classes;
